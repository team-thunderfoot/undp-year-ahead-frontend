<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <v-chapter-1  />
        <v-chapter-2  />
        <v-chapter-3  />
    </div>
</template>

<script>
import Chapter1 from '~/components/Chapter1.vue';
import Chapter2 from '~/components/Chapter2.vue';
import Chapter3 from '~/components/Chapter3.vue';


export default {
    data:()=>{
		return{
            totalChapters:3,
			statusChapter : 0
		}
	},
    components:{
        'v-chapter-1':Chapter1,
        'v-chapter-2':Chapter2,
        'v-chapter-3':Chapter3,
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
                            // Update Progress in Nav.vue 
                            var widthProgress = self.progress.toFixed(2) * 100;
                            $nuxt.$emit('updateProgressNav',{value:widthProgress})
                        }
                    }
                });
                $nuxt.$emit('siteLoaded')
            })
        },
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