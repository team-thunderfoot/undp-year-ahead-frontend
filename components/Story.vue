<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <v-chapter-1 />
        <v-chapter-2 />
        <div class="element">
            {{this.statusChapter}}
        </div>

    </div>
</template>

<script>
import Chapter1 from '~/components/Chapter1.vue';
import Chapter2 from '~/components/Chapter2.vue';
export default {
    data:()=>{
		return{
            totalChapters:2,
			statusChapter : 0
		}
	},
    components:{
        'v-chapter-1':Chapter1,
        'v-chapter-2':Chapter2
    },
    watch: {
        statusChapter(newValue, oldValue) {
            if(newValue == this.totalChapters){
                setTimeout(() => {
                    this.asambleStory()
                }, 200);
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

            })
        } 
    },
    created(){
        if(process.client){
            this.$nuxt.$on('assetLoaded', () => {
                // Do Something
                this.statusChapter++;
                console.log('va')
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