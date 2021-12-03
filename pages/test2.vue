<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <!-- <div class="b--noise-a"></div> -->
        <div class="b--header-a">
            Sticky!
        </div>
        <section class="b--page-a__item" id="Scene1">
            <div class="b--ss-a"> 
                <h2>Irti Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo dignissimos libero adipisci aperiam earum distinctio maiores magnam suscipit vero possimus quos, repellendus sapiente temporibus qui illo nemo maxime consequuntur?</h2>
            </div>
        </section>

        <section class="b--page-a__item" id="Scene2">
            <div class="b--ss-a">
                <h3>Andres lorem lorem lorem</h3>
            </div>
        </section>

        <section class="b--page-a__item" id="Scene3">
            <div class="b--ss-a"> 
                <h2>Nerea Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo dignissimos libero adipisci aperiam earum distinctio maiores magnam suscipit vero possimus quos, repellendus sapiente temporibus qui illo nemo maxime consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus a veritatis fuga ducimus minus cumque quas aperiam mollitia libero distinctio rerum, ut ipsam optio atque. Culpa debitis dicta animi.</h2>
            </div>
        </section>

        <section class="b--page-a__item" id="Scene4">
            <div class="b--ss-a">
                <h3>Eli lorem lorem lorem lorem lorem</h3>
            </div>
        </section>
    </div>
</template>

<script>
// import ProgressNav from '@/components/ProgressNav.vue';
export default {
	data:()=>{
		return{
			currentItem : 0
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
		// changeURL(chapter) {
		// 	var currentURL = window.location.href;
		// 	window.location.hash = chapter;
		// },
        // goToChapter(payload){
		// 	if(!payload){
		// 		var currentURL = window.location.href;
		// 		var pathname = currentURL.split('/');	
		// 		if(pathname[pathname.length-1].includes("chapter")){
		// 			var chapter =  pathname[pathname.length-1];
		// 			var chart = chapter.substring(chapter.length - 1); 
		// 			if(Number.isInteger(chart)){
		// 				this.currentItem = chart;
		// 			}else{
		// 				this.currentItem = 1;
		// 			}
		// 		} else {
		// 			var chapter = false;
		// 		}
		// 	} else {
        //         if(payload == "prev" || payload == "next"){
        //             if(payload == 'next'){
		// 				var chapter =   "#chapter" + parseInt(this.currentItem + 1);
		// 			}else if(payload == 'prev'){
		// 				var chapter =   "#chapter" + parseInt(this.currentItem - 1);
		// 			}
        //         } else {
		// 		    var chapter =   "#" + payload.section;
        //         }
        //     }
		// 	console.log(chapter);
		// 	if(chapter){
		// 		switch (chapter) {
		// 			case '#chapter1':
		// 				// Get the element
		// 				let scene1  = document.querySelector("#Scene1");
		// 				if(scene1){
		// 					var pos =  scene1.offsetLeft;
		// 					this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
		// 						this.$refs.processA.$refs.first.classList.add("is-current");
		// 					}}); 
		// 				}
		// 				break;
				
		// 			case '#chapter2':
		// 				let scene2  = document.querySelector("#Scene2");
		// 				if(scene2){
		// 					var pos =  scene2.offsetLeft;
		// 					this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
		// 						this.$refs.processA.$refs.second.classList.add("is-current");
		// 					}});
		// 				}
		// 				break;
		// 			case '#chapter3':
		// 				// Get the element
		// 				let scene3  = document.querySelector("#Scene3");
		// 				if(scene3){
		// 					var pos =  scene3.offsetLeft;
		// 					this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
		// 						this.$refs.processA.$refs.third.classList.add("is-current");
		// 					}}); 
		// 				}
		// 				break;

		// 			case '#chapter4':
		// 				// Get the element
		// 				let scene4  = document.querySelector("#Scene4");
		// 				if(scene4){
		// 					var pos =  scene4.offsetLeft;
		// 					this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
		// 						this.$refs.processA.$refs.third.classList.add("is-complete");
		// 						this.$refs.processA.$refs.fourth.classList.add("is-current");
		// 					}}); 
		// 				}
		// 				break;
		// 		}
		// 	}
		// },
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

                // let tlSection1 = this.$gsap.timeline({
				// 	scrollTrigger: {
				// 		trigger: "#Scene1",
				// 		scrub: 0,
				// 		start: () =>
				// 			"top top-=" +
				// 			(document.querySelector("#Scene1").offsetLeft - window.innerWidth),
				// 		end: () => "+=" + document.querySelector("#Scene1").offsetWidth,
				// 		onEnter: () => {
				// 			this.$refs.processA.$refs.first.classList.add("is-current");
				// 			this.currentItem = 1;
				// 			this.changeURL('chapter1');
				// 			this.$refs.prev.classList.add('disabled');
				// 		},
				// 		onEnterBack: () => {
				// 			this.$refs.processA.$refs.second.classList.remove("is-current");
				// 			this.currentItem = 1;
				// 			this.changeURL('chapter1');
				// 			this.$refs.prev.classList.add('disabled');
				// 		}
				// 	}
				// });
				
				// let tlSection2 = this.$gsap.timeline({
				// 	scrollTrigger: {
				// 		trigger: "#Scene2",
				// 		scrub: 0,
				// 		start: () =>
				// 			"top top-=" +
				// 			(document.querySelector("#Scene2").offsetLeft - window.innerWidth),
				// 		end: () => "+=" + document.querySelector("#Scene2").offsetWidth,
				// 		onEnter: () => {
				// 			this.$refs.processA.$refs.second.classList.add("is-current");
				// 			this.currentItem = 2;
				// 			this.changeURL('chapter2');
				// 			this.$refs.prev.classList.remove('disabled');
				// 		},
				// 		onEnterBack: () => {
				// 			this.$refs.processA.$refs.third.classList.remove("is-current");
				// 			this.currentItem = 2;
				// 			this.changeURL('chapter2');
				// 		}
				// 	}
				// });

				// let tlSection3 = this.$gsap.timeline({
				// 	scrollTrigger: {
				// 		trigger: "#Scene3",
				// 		scrub: 0,
				// 		start: () =>
				// 			"top top-=" +
				// 			(document.querySelector("#Scene3").offsetLeft - window.innerWidth),
				// 		end: () => "+=" + document.querySelector("#Scene3").offsetWidth,
				// 		onEnter: () => {
				// 			this.$refs.processA.$refs.third.classList.add("is-current");
				// 			this.currentItem = 3;
				// 			this.changeURL('chapter3');
				// 		},
				// 		onEnterBack: () => {
				// 			this.currentItem = 3;
				// 			this.$refs.processA.$refs.fourth.classList.remove("is-current");
				// 			this.changeURL('chapter3');
				// 			this.$refs.next.classList.remove('disabled');
				// 		}
				// 	}
				// });

				// let tlSection4 = this.$gsap.timeline({
				// 	scrollTrigger: {
				// 		trigger: "#Scene4",
				// 		scrub: 0,
				// 		start: () =>
				// 			"top top-=" +
				// 			(document.querySelector("#Scene4").offsetLeft - window.innerWidth),
				// 		end: () => "+=" + document.querySelector("#Scene4").offsetWidth,
				// 		onEnter: () => {
				// 			this.$refs.processA.$refs.third.classList.add("is-complete");
				// 			this.$refs.processA.$refs.fourth.classList.add("is-current");
				// 			this.currentItem = 4;
				// 			this.changeURL('chapter4');
				// 			this.$refs.next.classList.add('disabled');
				// 		},
						
				// 	}
                // });
                
                // this.goToChapter();

            });    
        }
    }
}
</script>

<style lang="scss">
  @import '@/sass/test2.scss';
</style>