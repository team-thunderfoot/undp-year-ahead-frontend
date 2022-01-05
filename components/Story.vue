<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <v-chapter-1 :scrollTween="scrollTween"  />
        <v-chapter-2 :scrollTween="scrollTween" />
        <v-chapter-3 :scrollTween="scrollTween" />
        <v-chapter-4  :scrollTween="scrollTween"/>
        <v-chapter-5 :scrollTween="scrollTween"  />
        <v-chapter-6  :scrollTween="scrollTween"/>
        <v-chapter-7  :scrollTween="scrollTween"/>
        <v-chapter-8 :scrollTween="scrollTween" />
        <v-chapter-9  :scrollTween="scrollTween"/>
        <v-chapter-10 :scrollTween="scrollTween"/>
        <v-chapter-11 :scrollTween="scrollTween" />
        <v-chapter-12 :scrollTween="scrollTween" />
        <v-chapter-13  :scrollTween="scrollTween"/>
        <v-chapter-14  :scrollTween="scrollTween"/>
        <v-chapter-15  :scrollTween="scrollTween"/>
        <v-progress :urlWithParams="urlWithParams" :sceneNumber="sceneNumber" v-if="statusChapter == totalChapters" :currentItem="currentItem" ref="progress" />
    </div>
</template>

<script>
import CustomTF from '@/custom/custom_tf.js';

export default {
    data:()=>{
		return{
            totalChapters: 15,
			statusChapter : 0,
            urlWithParams :false,
            sceneNumber : false,
            currentItem : 1,
            loadedNew : false,
            navLoaded : false,
            allisLoaded : false,
            scrollTween: null,
            timeOutFunctionId: null,
            windowWidth : 1201
		}
	},
    props : [
        'isLoaded'
    ],
    components:{
        'v-chapter-1': () => import(/* webpackChunkName: "Chapter1" */ "~/components/Chapter1.vue"),
        'v-chapter-2': () => import(/* webpackChunkName: "Chapter2" */ "~/components/Chapter2.vue"),
        'v-chapter-3': () => import(/* webpackChunkName: "Chapter3" */ "~/components/Chapter3.vue"),
        'v-chapter-4': () => import(/* webpackChunkName: "Chapter4" */ "~/components/Chapter4.vue"),
        'v-chapter-5': () => import(/* webpackChunkName: "Chapter5" */ "~/components/Chapter5.vue"),
        'v-chapter-6': () => import(/* webpackChunkName: "Chapter6" */ "~/components/Chapter6.vue"),
        'v-chapter-7': () => import(/* webpackChunkName: "Chapter7" */ "~/components/Chapter7.vue"),
        'v-chapter-8': () => import(/* webpackChunkName: "Chapter8" */ "~/components/Chapter8.vue"),
        'v-chapter-9': () => import(/* webpackChunkName: "Chapter9" */ "~/components/Chapter9.vue"),
        'v-chapter-10': () => import(/* webpackChunkName: "Chapter10" */ "~/components/Chapter10.vue"),
        'v-chapter-11': () => import(/* webpackChunkName: "Chapter11" */ "~/components/Chapter11.vue"),
        'v-chapter-12': () => import(/* webpackChunkName: "Chapter12" */ "~/components/Chapter12.vue"),
        'v-chapter-13': () => import(/* webpackChunkName: "Chapter13" */ "~/components/Chapter13.vue"),
        'v-chapter-14': () => import(/* webpackChunkName: "Chapter14" */ "~/components/Chapter14.vue"),
        'v-chapter-15': () => import(/* webpackChunkName: "Chapter15" */ "~/components/Chapter15.vue"),

        'v-progress': () => import(/* webpackChunkName: "Progress" */ "~/components/NavControls.vue")
    },
    watch: {
        // checks if all chapters are loaded
        statusChapter(newValue, oldValue) {
            if(newValue == this.totalChapters){
                this.allisLoaded = true;
            }
        },
        // checks if navbar control is loaded
        navLoaded(newValue, oldValue) {
            if(newValue){
                this.allisLoaded = 1;
            }
        },
        // creates the page when chapters and navbar controls are loaded
        allisLoaded(newValue, oldValue) {
            if(this.statusChapter == this.totalChapters && this.navLoaded){
               this.asambleStory();
            }
        }
    },
    methods:{
        getTotalWidth(){
            let width = 0;
            let Sections = document.querySelectorAll("section");
            Sections.forEach(el => width += el.offsetWidth);
            return width;
        },
        asambleStory(){
           	this.$nextTick(() => {
                this.scrollTween = this.$gsap.to(document.querySelectorAll("section"), { 
                    id:'sectionTrigger',
                    x: () => -this.getTotalWidth() + window.innerWidth, 
                    ease: "none", 
                    scrollTrigger: {
                        trigger: '.b--page-a',
                        pin: true,
                        start: 0,
                        end: () => "+=" + (document.querySelector('.b--page-a').scrollWidth - window.innerWidth),
                        scrub: true,
                        anticipatePin: 1,
                        onUpdate: (self) => {
                            // Emits on Update Progress in Nav.vue 
                            var widthProgress = self.progress.toFixed(2) * 100;
                            $nuxt.$emit('updateProgressNav',{value:widthProgress})
                        }
                    }
                });

                // emits on in Index.vue
                setTimeout(() => {
                    $nuxt.$emit('siteLoaded');
                }, 3000);
                setTimeout(() => {  
                    this.loadedNew = true;
                }, 3000);
            })
        },

        workAfterResizeIsDone(){
            if(this.$route.query.scene){
                window.location  =  this.$route.path + '?scene=' + this.$route.query.scene;
            }else{
                window.location  =  this.$route.path;
            }
        }
    },
    mounted(){
        if(process.client){
            this.custom_tf = new CustomTF();
            
            this.urlWithParams = this.custom_tf.checkURL(); // checks if url has params
            this.sceneNumber = ( this.urlWithParams ) ? this.custom_tf.getURL() : false; // returns the param
            // event in Index.vue
            this.$nuxt.$on('assetLoaded', () => {
                this.statusChapter++;
            });
            // event in NavControl.vue
            this.$nuxt.$on('navIsLoaded', () => {
                this.navLoaded = true;
            });

            // event in ChapterX.vue
            this.$nuxt.$on('changeCurrent', (payload) => {
                if(this.loadedNew){
                    // Set New Item
                    this.currentItem = payload.item;
                    
                    // Change URL
                    this.$router.push({path: this.$route.path, query: { scene:  payload.item }})
                }
            });
            
            // refresh page when orientation changes
            if(this.$device.isMobileOrTablet || this.$device.isDesktopOrTablet){
                window.addEventListener('orientationchange', this.workAfterResizeIsDone);
            }
            if(!this.$device.isMobileOrTablet){
                // refresh page on resize
                if(!this.$device.isSafari){
                    window.onresize = (e)=> {  
                        clearTimeout(this.timeOutFunctionId);
                        this.timeOutFunctionId = setTimeout(this.workAfterResizeIsDone(), 500);
                    }
                }else{
                    window.onresize = (e)=> {  
                        if(!this.custom_tf.isTouchableDevice()){
                            clearTimeout(this.timeOutFunctionId);
                            this.timeOutFunctionId = setTimeout(this.workAfterResizeIsDone(), 500);
                        }
                    }
                }
            }
        }
    },
    
}
</script>