<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <div class="b--noise-a"></div>
        <div class="b--nav-a"></div>
        <div class="b--lang-a">
            Lang
        </div>
        

        <section class="b--page-a__item" id="Scene1">
            <div class="b--ss-a"> 
                <div class="b--ss-a__ft-items">
                    <!-- <div class="b--bird-a">
                        <img src="@/assets/img/bird.png" alt="">
                    </div> -->
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-1.png" alt="" @load="onImgLoad"> 
                </div>
                <div class="b--ss-a__content">
                    <div class="b--card-a">
                        <div class="b--card-a__hd">
                            <h3 class="b--card-a__hd__title">
                                Ch1 Towards living in harmony with nature
                            </h3> 
                        </div>
						<div class="b--card-a__bd">
							<p class="b--card-a__bd__content">At the UN Biodiversity Conference (COP15), countries will adopt a new global framework to halt the extinction crisis and transform our relationship with the natural world.</p>
						</div>
                    </div>
					<div class="b--card-b">
						<p class="b--card-b__content"><strong>UN Biodiversity Conference (COP15)</strong> <br>
						25 April - 8 May, Kunming, China</p>
					</div>
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
                <div class="b--ss-a__content">
                    <div class="b--card-a">
                        <div class="b--card-a__hd">
                            <h3 class="b--card-a__hd__title">
                                Ch2 Towards living in harmony with nature
                            </h3> 
                        </div>
                    </div>
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
                <div class="b--ss-a__content">
                    <div class="b--card-a">
                        <div class="b--card-a__hd">
                            <h3 class="b--card-a__hd__title">Towards living in harmony with nature</h3> 
                        </div>
                    </div>
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
                <div class="b--ss-a__content">
                    <div class="b--card-a">
                        <div class="b--card-a__hd">
                            <h3 class="b--card-a__hd__title">
                                Ch4 Towards living in harmony with nature
                            </h3> 
                        </div>
                    </div>
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
								// markers: "true",
							}
                        });
                        

                    // let tlBird = this.$gsap.timeline({
                    //     scrollTrigger: {
                    //         trigger: ".b--bird-a",
                    //         scrub: true,
                    //         start: () =>
                    //             "top top-=" +
                    //             (document.querySelector(".b--bird-a").offsetLeft - window.innerWidth),
                    //         end: () => "+=" + document.querySelector(".b--bird-a").offsetWidth,
                    //     }
                    // });

                    // tlBird.to(document.querySelector('.b--bird-a'), {duration: 40, x:-100});

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
 
    }
}
</script>

<style lang="scss">
  @import '@/sass/index.scss';
</style>