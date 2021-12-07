<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <v-chapter-1 @changeURL="changeURL" />
        <v-chapter-2 @changeURL="changeURL" />
        <v-progress-nav ref="progress" />
        <v-progress ref="progress" />
        <div class="element">
            Chapter Status {{this.chapterOneContent}}
        </div>
    </div>
</template>

<script>
import Chapter1 from '~/components/Chapter1.vue';
import Chapter2 from '~/components/Chapter2.vue';
import Progress from '@/components/Progress/Progress.vue';
import ProgressNav from '@/components/Progress/ProgProgressNavress.vue';

export default {
    data:()=>{
		return{
            totalChapters:2,
			statusChapter : 0
		}
	},
    props:['chapterOneContent'],
    components:{
        'v-chapter-1':Chapter1,
        'v-chapter-2':Chapter2,
        'v-progress' : Progress,
        'v-progress-nav' : ProgressNav
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
                    }
                });
                $nuxt.$emit('siteLoaded')
            })
        },
        changeURL(payload){
            // window.location.hash = payload.url;
            
        }
    },
    created(){
        if(process.client){
            // event
            this.$nuxt.$on('assetLoaded', () => {
                this.statusChapter++;

            })
        }
    }
}
</script>
<style scoped>
    .element{
        position:fixed;
        left:120px;
        top:200px;
        background:red;
        z-index: 60;
    }
</style>