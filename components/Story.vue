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
import Chapter1 from '~/components/Chapter1.vue';
import Chapter2 from '~/components/Chapter2.vue';
import Chapter3 from '~/components/Chapter3.vue';
import Chapter4 from '~/components/Chapter4.vue';
import Chapter5 from '~/components/Chapter5.vue';
import Chapter6 from '~/components/Chapter6.vue';
import Chapter7 from '~/components/Chapter7.vue';
import Chapter8 from '~/components/Chapter8.vue';
import Chapter9 from '~/components/Chapter9.vue';
import Chapter10 from '~/components/Chapter10.vue';
import Chapter11 from '~/components/Chapter11.vue';
import Chapter12 from '~/components/Chapter12.vue';
import Chapter13 from '~/components/Chapter13.vue';
import Chapter14 from '~/components/Chapter14.vue';
import Chapter15 from '~/components/Chapter15.vue';

import Progress from '~/components/NavControls.vue';
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
        'v-chapter-1':Chapter1,
        'v-chapter-2':Chapter2,
        'v-chapter-3':Chapter3,
        'v-chapter-4':Chapter4,
        'v-chapter-5':Chapter5,
        'v-chapter-6':Chapter6,
        'v-chapter-7':Chapter7,
        'v-chapter-8':Chapter8,
        'v-chapter-9':Chapter9,
        'v-chapter-10':Chapter10,
        'v-chapter-11':Chapter11,
        'v-chapter-12':Chapter12,
        'v-chapter-13':Chapter13,
        'v-chapter-14':Chapter14,
        'v-chapter-15':Chapter15,

        'v-progress' : Progress
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
            console.log(this.$device);
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
                        if(window.innerWidth > 1201){
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