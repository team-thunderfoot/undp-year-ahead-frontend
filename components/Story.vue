<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <v-chapter-1  />
        <v-chapter-2  />
        <v-chapter-3  />
        <v-chapter-4  />
        <v-chapter-5  />
        <v-chapter-6  />
        <v-progress :urlWithParams="urlWithParams" :urlName="urlName" v-if="isLoaded" :currentItem="currentItem" ref="progress" />
    </div>
</template>

<script>
import Chapter1 from '~/components/Chapter1.vue';
import Chapter2 from '~/components/Chapter2.vue';
import Chapter3 from '~/components/Chapter3.vue';
import Chapter4 from '~/components/Chapter4.vue';
import Chapter5 from '~/components/Chapter5.vue';
import Chapter6 from '~/components/Chapter6.vue';

import Progress from '@/components/Progress/Progress.vue';

export default {
    data:()=>{
		return{
            totalChapters:6,
			statusChapter : 0,
            urlWithParams :false,
            urlName : false,
            isLoadedURLParam : false,
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
        'v-progress' : Progress
    },
    watch: {
        statusChapter(newValue, oldValue) {
            if(newValue == this.totalChapters){
                setTimeout(() => {
                    this.asambleStory()
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
                this.loadedNew = true;
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
            // event in Progress.vue
            this.$nuxt.$on('isLoadedURL', (payload) => {
                this.isLoadedURLParam = true
            });
            // event in ChapterX.vue
            this.$nuxt.$on('changeURL', (payload) => {
                if(this.urlWithParams){
                    window.location.href =  this.$route.path  + '#' + payload.url;
                }
            });
            this.$nuxt.$on('changeCurrent', (payload) => {
                this.currentItem = payload.item;
            });
        }
    }
}
</script>