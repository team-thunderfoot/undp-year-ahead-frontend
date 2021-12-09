<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <v-chapter-1  @changeURL="changeURL" :positionBaseOnURL="positionBaseOnURL"/>
        <v-chapter-2  @changeURL="changeURL" :positionBaseOnURL="positionBaseOnURL"/>
        <v-chapter-3  @changeURL="changeURL" :positionBaseOnURL="positionBaseOnURL"/>
        <v-chapter-4  />
        <v-chapter-5  />
        <v-chapter-6  />
    </div>
</template>

<script>
import Chapter1 from '~/components/Chapter1.vue';
import Chapter2 from '~/components/Chapter2.vue';
import Chapter3 from '~/components/Chapter3.vue';
import Chapter4 from '~/components/Chapter4.vue';
import Chapter5 from '~/components/Chapter5.vue';
import Chapter6 from '~/components/Chapter6.vue';


export default {
    data:()=>{
		return{
            totalChapters:6,
			statusChapter : 0,
		}
	},
    props : [
        'positionBaseOnURL'
    ],
    components:{
        'v-chapter-1':Chapter1,
        'v-chapter-2':Chapter2,
        'v-chapter-3':Chapter3,
        'v-chapter-4':Chapter4,
        'v-chapter-5':Chapter5,
        'v-chapter-6':Chapter6,
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
                $nuxt.$emit('siteLoaded');
            })
        },
        changeURL(payload){
            window.location.hash = payload.url;
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