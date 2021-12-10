<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <v-chapter-1  />
        <v-chapter-2  />
        <v-chapter-3  />
        <v-chapter-4  />
        <v-chapter-5  />
        <v-chapter-6  />
        <v-chapter-7  />
        <v-chapter-8  />
        <v-chapter-9  />
        <v-chapter-10  />
        <v-chapter-11  />
        <v-chapter-12  />
        <v-chapter-13  />
        <v-chapter-14  />
        <v-progress :urlWithParams="urlWithParams" :urlName="urlName" v-if="isLoaded" :currentItem="currentItem" ref="progress" />
        <div style="position:absolute;bottom : 0; background-color: red;width: 400px; text-align: center">
           ++++++++++  {{loadedNew}} ---
        </div>
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

import Progress from '@/components/Progress/Progress.vue';

export default {
    data:()=>{
		return{
            totalChapters:14,
			statusChapter : 0,
            urlWithParams :false,
            urlName : false,
            currentItem : 1,
            loadedNew : false
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
                setTimeout(() => {
                    this.asambleStory()
                    this.loadedNew = true;
                }, 1200);
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
                this.$gsap.to(document.querySelectorAll("section"), { 
                    x: () => -this.getTotalWidth() + window.innerWidth, 
                    ease: "none", 
                    scrollTrigger: {
                        trigger: '.b--page-a',
                        pin: true,
                        start: 0,
                        end: () => "+=" + (document.querySelector('.b--page-a').scrollWidth - window.innerWidth),
                        scrub: true,
                        markers: "true",
                        onUpdate: (self) => {
                            // Emits on Update Progress in Nav.vue 
                            var widthProgress = self.progress.toFixed(2) * 100;
                            $nuxt.$emit('updateProgressNav',{value:widthProgress})
                        }
                    }
                });
                // emits on in Index.vue
                $nuxt.$emit('siteLoaded');
            })
        },
        checkURL(){
            if(process.client){
                var currentURL = window.location.href;
                var pathname = currentURL.split('/');	// split url in array
                if(pathname[pathname.length-1].includes("Scene")){ // check if url contains Scene string
                    this.urlWithParams = true; // Url with param inside
                    this.urlName = pathname[pathname.length-1]; // ID in the url param
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
            // event in ChapterX.vue
            this.$nuxt.$on('changeURL', (payload) => {
                if(this.urlWithParams && this.loadedNew){
                    console.log("das");
                    // window.location.href =  this.$route.path  + '#' + payload.url;
                }
            });
            this.$nuxt.$on('changeCurrent', (payload) => {
                this.currentItem = payload.item;
            });
        }
    }
}
</script>