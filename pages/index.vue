<template>
    <div class="b--page-a">
        <!-- <div class="b--noise-a"></div> -->
        <div class="b--header-a">
            Sticky!
        </div>
        <div class="b--page-a__wrapper">
            <div class="b--page-a__wrapper__item b--ss-a" id="Scene1"> 
                <div class="b--ss-a__ft-items">
                    <div class="b--bird-a" v-rellax="rellax">
                        <img src="@/assets/img/bird.png" alt="">
                    </div>
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-1.png" alt=""> 
                </div>
                <div class="b--ss-a__content">
                    <div class="b--card-a">
                        <div class="b--card-a__hd">
                            <h3 class="b--card-a__hd__title">
                                Towards living in harmony with nature
                            </h3> 
                        </div>
                
                    </div>
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-1.png" alt="">    
                </div>
            </div>
            <div class="b--page-a__wrapper__item b--page-a__wrapper__item--second" id="Scene2">
                <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-2.png" alt=""> 
                </div>
                <!-- <div class="b--ss-a__content">
                    <div class="b--card-a">
                        <h3 class="b--card-a__title">Lorem</h3>
                    </div>
                </div> -->
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-2.png" alt="">    
                </div>
            </div>
            
			<div class="b--page-a__wrapper__item b--ss-a" id="Scene3"> 
                <div class="b--ss-a__ft-items">
                    <div class="b--bird-a" v-rellax="rellax">
                        <img src="@/assets/img/bird.png" alt="">
                    </div>
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-1.png" alt=""> 
                </div>
                <div class="b--ss-a__content">
                    <div class="b--card-a">
                        <div class="b--card-a__hd">
                            <h3 class="b--card-a__hd__title">
                                Towards living in harmony with nature
                            </h3> 
                        </div>
                
                    </div>
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-1.png" alt="">    
                </div>
            </div>
			<div class="b--page-a__wrapper__item b--page-a__wrapper__item--second" id="Scene4">
                <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-2.png" alt=""> 
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-2.png" alt="">    
                </div>
            </div>
        </div>
		{refValue}}
		<v-progress-nav :refValue="refValue" ref="processA"  @goToChapter="goToChapter"/>
    </div>
</template>

<script>
import ProgressNav from '@/components/ProgressNav.vue';

export default {
	components : {
		'v-progress-nav' : ProgressNav,
	},
	data: () => ({
		rellax: {speed: -2},
		refValue : 0
	}),
    methods:{
        getTotalWidth(){
			let width = 0;
			let Sections = document.querySelectorAll(".b--page-a__wrapper__item");
			Sections.forEach(el => width += el.offsetWidth);
			return width;
		},
		goToChapter(payload){
			if(!payload){
				var currentURL = window.location.href;
				var pathname = currentURL.split('/');	
				var payload = pathname[pathname.length-1].includes("chapter");		
			}
			
			if(payload){
				var chapter = (payload) ?  "#" + payload.section : pathname[pathname.length-1];
				switch (chapter) {
					case '#chapter1':
						// Get the element
						let scene1  = document.querySelector("#Scene1");
						if(scene1){
							var pos =  scene1.offsetLeft;
							this.$gsap.to(window, {duration: 2, scrollTo: pos }); 
						}
						
						break;
				
					case '#chapter2':
						let scene2  = document.querySelector("#Scene2");
						if(scene2){
							var pos =  scene2.offsetLeft;
							this.$gsap.to(window, {duration: 2, scrollTo: pos });
						}
						//ya estoy probando de todo, asi que no asustarse
						break;
					case '#chapter3':
						// Get the element
						let scene3  = document.querySelector("#Scene3");
						if(scene3){
							var pos =  scene3.offsetLeft;
							this.$gsap.to(window, {duration: 2, scrollTo: pos }); 
						}
						
						break;

					case '#chapter4':
						// Get the element
						let scene4  = document.querySelector("#Scene4");
						if(scene4){
							var pos =  scene4.offsetLeft;
							this.$gsap.to(window, {duration: 2, scrollTo: pos }); 
						}
						
						break;
					default:
						let sceneDefault  = document.querySelector("#Scene2");
						if(sceneDefault){
							var pos =  sceneDefault.offsetLeft;
							this.$gsap.to(window, {duration: 2, scrollTo: pos });
						}
						break; 
				}
			}
		},
    },
    created(){
        if(process.client){
			this.$nextTick(() => {

				this.$gsap.to(document.querySelectorAll(".b--page-a__wrapper"), { 
					x: () => -this.getTotalWidth() + window.innerWidth, 
					ease: "none", 
					scrollTrigger: {
						trigger: ".b--page-a",
						pin: true,
						start: 0,
						end: () => "+=" + (document.querySelector('.b--page-a__wrapper').scrollWidth - window.innerWidth),
						invalidateOnRefresh: true,
						scrub: true,
						markers: "true",
						// onUpdate: (self) => {
						// 	var widhtProgress = self.progress.toFixed(2) * 100;
						// 	document.querySelector('.b--progress-a').classList.syle = widhtProgress + 'px';
						// 	if(widhtProgress > 0 && widhtProgress <= 50){
						// 		this.$refs.processA.$refs.first.classList.add("is-current");

						// 		this.$refs.processA.$refs.second.classList.remove("is-current");
						// 		this.$refs.processA.$refs.second.classList.remove("is-complete");
						// 	}
						// 	if(widhtProgress > 50 && widhtProgress <= 70 ){
						// 		this.$refs.processA.$refs.first.classList.add("is-complete");
						// 		this.$refs.processA.$refs.second.classList.add("is-current");

						// 		this.$refs.processA.$refs.third.classList.remove("is-current");
						// 		this.$refs.processA.$refs.third.classList.remove("is-complete");
						// 	}
						// 	if(widhtProgress > 70 && widhtProgress <= 99 ){
						// 		this.$refs.processA.$refs.second.classList.add("is-complete");
						// 		this.$refs.processA.$refs.third.classList.add("is-current");

						// 		this.$refs.processA.$refs.fourth.classList.remove("is-current");
						// 		this.$refs.processA.$refs.fourth.classList.remove("is-complete");
						// 	}
						// 	if(widhtProgress > 99){
						// 		this.$refs.processA.$refs.third.classList.add("is-complete");
						// 		this.$refs.processA.$refs.fourth.classList.add("is-complete");
						// 	}
						// }
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
							console.log('entro a peces');
							this.$refs.processA.$refs.first.classList.add("is-current");
						},
						onEnterBack: () => {
							this.$refs.processA.$refs.first.classList.remove("is-complete");
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
							console.log('entro a peces');
							this.$refs.processA.$refs.first.classList.add("is-complete");
							this.$refs.processA.$refs.second.classList.add("is-current");
						},
						onEnterBack: () => {
							this.$refs.processA.$refs.second.classList.remove("is-complete");
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
							this.$refs.processA.$refs.second.classList.add("is-complete");
							this.$refs.processA.$refs.third.classList.add("is-current");
						},
						onEnterBack: () => {
							this.$refs.processA.$refs.third.classList.remove("is-complete");
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

			});
		}
    },
	mounted(){
		this.goToChapter();
	}
}
</script>

<style lang="scss">
  @import '@/sass/indexandres.scss';
  ::-webkit-scrollbar {
    display: none;
  }

</style>