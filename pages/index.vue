<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <!-- <div class="b--noise-a"></div> -->
        <div class="b--header-a">
            Sticky!
        </div>
        <section class="b--page-a__item" id="Scene1">
            <div class="b--ss-a"> 
                <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-1.png" alt=""> 
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-1.png" alt="">    
                </div>
            </div>
        </section>

        <section class="b--page-a__item" id="Scene2">
            <div class="b--ss-a">
                <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-2.png" alt=""> 
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-2.png" alt="">    
                </div>
            </div>
        </section>

         <section class="b--page-a__item" id="Scene3">
            <div class="b--ss-a"> 
                <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-1.png" alt=""> 
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-1.png" alt="">    
                </div>
            </div>
        </section>

        <section class="b--page-a__item" id="Scene4">
            <div class="b--ss-a">
                <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-2.png" alt=""> 
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-2.png" alt="">    
                </div>
            </div>
        </section>
        <v-progress-nav ref="processA"  @goToChapter="goToChapter"/>
        </div>
</template>

<script>
import ProgressNav from '@/components/ProgressNav.vue';
export default {
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
        goToChapter(payload){
			if(!payload){
				var currentURL = window.location.href;
				var pathname = currentURL.split('/');	
				if(pathname[pathname.length-1].includes("chapter")){
					var chapter =  pathname[pathname.length-1];
				} else {
					var chapter = false;
				}
			} else {
				var chapter =   "#" + payload.section;
            }
            alert(chapter)
			
			if(chapter){
				switch (chapter) {
					case '#chapter1':
						// Get the element
						let scene1  = document.querySelector("#Scene1");
						if(scene1){
							var pos =  scene1.offsetLeft;
							this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
								this.$refs.processA.$refs.first.classList.add("is-current");

							}}); 
						}
						break;
				
					case '#chapter2':
						let scene2  = document.querySelector("#Scene2");
						if(scene2){
							var pos =  scene2.offsetLeft;
							this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
								this.$refs.processA.$refs.second.classList.add("is-current");
							}});
						}
						break;
					case '#chapter3':
						// Get the element
						let scene3  = document.querySelector("#Scene3");
						if(scene3){
							var pos =  scene3.offsetLeft;
							this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
								this.$refs.processA.$refs.third.classList.add("is-current");
							}}); 
						}
						break;

					case '#chapter4':
						// Get the element
						let scene4  = document.querySelector("#Scene4");
						if(scene4){
							var pos =  scene4.offsetLeft;
							this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
								this.$refs.processA.$refs.third.classList.add("is-complete");
								this.$refs.processA.$refs.fourth.classList.add("is-current");
							}}); 
						}
						break;
				}
			}
		},
    },
    created(){
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

                let tlSection1 = this.$gsap.timeline({
					scrollTrigger: {
						trigger: "#Scene1",
						scrub: 0,
						start: () =>
							"top top-=" +
							(document.querySelector("#Scene1").offsetLeft - window.innerWidth),
						end: () => "+=" + document.querySelector("#Scene1").offsetWidth,
						onEnter: () => {
							this.$refs.processA.$refs.first.classList.add("is-current");
						},
						onEnterBack: () => {
							this.$refs.processA.$refs.second.classList.remove("is-current");
						}
					}
				});
				
				let tlSection2 = this.$gsap.timeline({
					scrollTrigger: {
						trigger: "#Scene2",
						scrub: 0,
						start: () =>
							"top top-=" +
							(document.querySelector("#Scene2").offsetLeft - window.innerWidth),
						end: () => "+=" + document.querySelector("#Scene2").offsetWidth,
						onEnter: () => {
							this.$refs.processA.$refs.second.classList.add("is-current");
						},
						onEnterBack: () => {
							this.$refs.processA.$refs.third.classList.remove("is-current");
						}
					}
				});

				let tlSection3 = this.$gsap.timeline({
					scrollTrigger: {
						trigger: "#Scene3",
						scrub: 0,
						start: () =>
							"top top-=" +
							(document.querySelector("#Scene3").offsetLeft - window.innerWidth),
						end: () => "+=" + document.querySelector("#Scene3").offsetWidth,
						onEnter: () => {
							this.$refs.processA.$refs.third.classList.add("is-current");
						},
						onEnterBack: () => {
							this.$refs.processA.$refs.fourth.classList.remove("is-current");
						}
					}
				});

				let tlSection4 = this.$gsap.timeline({
					scrollTrigger: {
						trigger: "#Scene4",
						scrub: 0,
						start: () =>
							"top top-=" +
							(document.querySelector("#Scene4").offsetLeft - window.innerWidth),
						end: () => "+=" + document.querySelector("#Scene4").offsetWidth,
						onEnter: () => {
							this.$refs.processA.$refs.third.classList.add("is-complete");
							this.$refs.processA.$refs.fourth.classList.add("is-current");
						},
						
					}
                });
                
                this.goToChapter();

            });    
        }
    }
}
</script>

<style lang="scss">
  @import '@/sass/index.scss';
</style>