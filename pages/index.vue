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

<style lang="scss" scoped>
:root {
	font-family: Helvetica;
}

::-webkit-scrollbar {
	display: none;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	color: white;
	font-weight: 400;
	font-size: 16px;
	text-align: center;
	color: #000000;
}

body {
	background: greenyellow;
}

.b--page-a {
	width: 100%;
	height: 100vh;
	display: flex;
  overflow: hidden;
}

section {
	position: relative;
	height: 100vh;
	overflow: hidden;
	flex-shrink: 0;
	display: flex;
	color: magenta;
    border-right: 5px solid blue;
    width: fit-content;
    min-width: 100vw;
}

.b--page-a .b--page-a__item {
	justify-content: center;
    align-items: center;
}


.b--header-a{
    position: fixed;
    background:white;
    padding:$measure *2;
    left:$measure*3; top:$measure*3;
    right:$measure*3;
    z-index: 50;
}
.b--noise-a{
    position: fixed;
    left:0;
    top:0;
    height: 100vh;
    width:100%;
    z-index: 50;
    background-image: url('@/assets/img/noise.png');
    background-position: 0 0;
    pointer-events: none;
    // opacity: .4;
    animation: scratchy .253s  linear forwards infinite ;

}

// single story
.b--ss-a{
    position:relative;
    height: 100%;
    &__bg-items{
        position: relative;
        top: 0;
        left: 0;
        z-index: 3;
        width: auto;
        height: 100%;
        &__artwork{ // needed to see it with amaia
            position: relative;
            z-index: -1;
            display: block;
            height: 100%;
            width: auto;
        }
        &__flag{ // demo example
            position: absolute;
            top: 0;
            height: 100%;
            pointer-events: none;
            left: 14%;
        }
        & img{
            min-width: 500px;
            height: auto;
        }
    }  
    &__content{
        // here goes hole content
        position: absolute;
        top: 0;
        left: 0;
        z-index: 4;
        width: auto;
        height: 100%; 
    } 
    &__ft-items{
        position: absolute;
        left: 0;
        z-index: 5;
        height: 100%;
        width: 100%;
        top: 0;
        &__artwork{ // needed to see it with amaia
            position: relative;
            z-index: -1;
            display: block;
            height: 100%;
            width: 100%;
        }
    } 
} 
@keyframes scratchy {
	0% {
		background-position: 0 0;
	}
	25% {
		background-position: 0 0;
	}
	26% {
		background-position: 20px -20px;
	}
	50% {
		background-position: 20px -20px;
	}
	51% {
		background-position: 40px -40px;
	}
	75% {
		background-position: 40px -40px;
	}
	76% {
		background-position: 60px -60px;
	}
	99% {
		background-position: 60px -60px;
	}
	100% {
		background-position: 0 0;
	}
}

</style>