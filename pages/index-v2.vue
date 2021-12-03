<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <!-- <div class="b--noise-a"></div> -->
        <!-- <div class="b--header-a">
            Sticky!
        </div> -->
        <section class="b--page-a__item" id="Scene1">
            <div class="b--ss-a"> 
                <h2 class="f--font-a">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quia, sint iure impedit soluta magnam eligendi reiciendis nihil. Dolorum doloremque ea accusamus saepe, magnam vitae! Modi molestias maxime harum hic?</h2>
                <!-- <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-1.png" alt=""> 
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-1.png" alt="">    
                </div> -->
            </div>
        </section>

        <section class="b--page-a__item" id="Scene2">
            <div class="b--ss-a">
                <h3 class="f--font-c"> another Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus commodi exercitationem, vitae consequatur nemo labore dolore, nesciunt quae laborum ab cupiditate, sit earum nihil officiis ipsa reprehenderit id reiciendis architecto?</h3>
                <!-- <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-2.png" alt=""> 
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-2.png" alt="">    
                </div> -->
            </div>
        </section>

     
        
        </div>
</template>

<script>
import ProgressNav from '@/components/ProgressNav.vue';
export default {
	data:()=>{
		return{
			currentItem : 0
		}
	},
    components : {
		'v-progress-nav' : ProgressNav,
	},
    methods:{
        getTotalWidth(){
            let width = 0;
            let Sections = document.querySelectorAll("section");
            Sections.forEach(el => width += el.offsetWidth);
            return width;
        },
		
    },
    created(){
        if(process.client){
            this.$nextTick(() => {

                    setTimeout(() => {
                        alert('start scrolling')
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
                    }, 1300);
                
            });    
        }
    }
}
</script>

<style lang="scss">
  @import '@/sass/index-v2.scss';
</style>