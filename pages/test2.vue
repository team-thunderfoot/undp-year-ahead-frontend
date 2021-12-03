<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <!-- <div class="b--noise-a"></div> -->
        <div class="b--header-a">
            Sticky2!
        </div>
        <section class="b--page-a__item" id="Scene1">
            <div class="b--ss-a"> 
                <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-1.png" alt="" @load="onImgLoad"> 
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-1.png" alt="" @load="onImgLoad">    
                </div>
            </div>
        </section>

        <section class="b--page-a__item" id="Scene2">
            <div class="b--ss-a">
                <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-2.png" alt="" @load="onImgLoad"> 
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-2.png" alt="" @load="onImgLoad">    
                </div>
            </div>
        </section>

        <section class="b--page-a__item" id="Scene3">
            <div class="b--ss-a"> 
                <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-1.png" alt="" @load="onImgLoad"> 
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-1.png" alt="" @load="onImgLoad">    
                </div>
            </div>
        </section>

        <section class="b--page-a__item" id="Scene4">
            <div class="b--ss-a">
                <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-2.png" alt="" @load="onImgLoad"> 
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-2.png" alt="" @load="onImgLoad">    
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// import ProgressNav from '@/components/ProgressNav.vue';
export default {
	data:()=>{
		return{
			currentItem : 0,
			isLoaded : 0
		}
	},
    components : {
		// 'v-progress-nav' : ProgressNav,
	},
    methods:{
        getTotalWidth(){
            let width = 0;
            let Sections = document.querySelectorAll("section");
            Sections.forEach(el => width += el.offsetWidth);
            return width;
        },
		imagesAreLoaded () {
			console.log(this.isLoaded);
			if(this.isLoaded == 8) {
				console.log("loadee");
				if(process.client){
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

					});    
				}
			}
		},
		onImgLoad () {
			this.isLoaded = this.isLoaded + 1;
			this.imagesAreLoaded();
		}
		
		
    },
    mounted(){
        // if(process.client){
        //     this.$nextTick(() => {

        //         this.$gsap.to(document.querySelectorAll("section"), { 
        //         x: () => -this.getTotalWidth() + window.innerWidth, 
        //         ease: "none", 
        //         scrollTrigger: {
        //                 trigger: '.b--page-a',
        //                 pin: true,
        //                 start: 0,
        //                 end: () => "+=" + (document.querySelector('.b--page-a').scrollWidth - window.innerWidth),
        //                 scrub: true,
        //                 markers: "true",
        //             }
        //         });

        //     });    
        // }
    }
}
</script>

<style lang="scss">
  @import '@/sass/test2.scss';
</style>