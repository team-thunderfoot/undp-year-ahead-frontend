<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <!-- <div style="position: fixed; bottom: 1rem; background-color: pink; color: black;width: 100px; left: 100px;z-index:1000">
            {{loadedNew}} ++ {{currentItem}}
        </div> -->
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
        <v-progress :isLoaded="isLoaded" :urlWithParams="urlWithParams" :sceneNumber="sceneNumber" v-if="statusChapter == totalChapters" :currentItem="currentItem" ref="progress" />
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

import Progress from '~/components/NavControls.vue';

export default {
    data:()=>{
		return{
            totalChapters: 14,
			statusChapter : 0,
            urlWithParams :false,
            sceneNumber : false,
            currentItem : 1,
            loadedNew : false,
            navLoaded : false,
            allisLoaded : false,
            scrollTween: null,
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

        'v-progress' : Progress
    },
    watch: {
        statusChapter(newValue, oldValue) {
            if(newValue == this.totalChapters){
                this.allisLoaded = true;
            }
        },
        navLoaded(newValue, oldValue) {
            if(newValue){
                this.allisLoaded = 1;
            }
        },
        allisLoaded(newValue, oldValue) {
            if(this.statusChapter == this.totalChapters && this.navLoaded){
               this.asambleStory()
            }
        },
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
                        // markers: "false",
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
                    this.loadedNew = true;
                }, 5000);
            })
        },
    
        checkURL(){
            if(process.client){
                var currentURL = window.location.href;
                var pathname = currentURL.split('/');	// split url in array
                
                if(pathname[pathname.length-1].includes("?scene")){ // check if url contains Scene string
                    this.urlWithParams = true; // Url with param inside
                    var sceneNo = pathname[pathname.length-1].split('?scene=');
                    this.sceneNumber = sceneNo[1];
                } 
            }
		},
    },
    mounted(){
        if(process.client){
            this.checkURL();
            // event in Index.vue
            this.$nuxt.$on('assetLoaded', () => {
                this.statusChapter++;
            });
            // event in NavControl.vue
            this.$nuxt.$on('navIsLoaded', () => {
                this.navLoaded = true;
            });
            this.queryString = window.location.search;
            this.urlParams = new URLSearchParams(this.queryString);

            this.queryString = window.location.search;
            this.urlParams = new URLSearchParams(this.queryString);

            // event in ChapterX.vue
            this.$nuxt.$on('changeCurrent', (payload) => {
                if(this.loadedNew){
                    // // SET NEW Item
                    this.currentItem = payload.item;
                    console.log(this.currentItem);
                    // // // Change URL
                    this.urlParams.set("scene", payload.item );
                    this.urlParams.toString(); 
                    window.history.replaceState({}, '', `?${this.urlParams}`);
                }
            });
            this.$nuxt.$on('changeURL', (payload) => {
                // log
            });
        }
    }
}
</script>