<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <!-- <div class="b--noise-a"></div> -->
        <div class="b--header-a">
            Sticky!
        </div>
		<!-- SECTIONS -->
		<v-section refName="Scene1"/>
		<v-section refName="Scene2" />
		<v-section refName="Scene3" />
		<v-section refName="Scene4"/>

        <a href="#" id="prev" ref="prev" @click.prevent="goToChapter('prev')"> Prev </a>
        <v-progress-nav ref="processA" @goToChapter="goToChapter"/>
        <a href="#" id="next" ref="next" @click.prevent="goToChapter('next')"> Next </a>
        </div>
</template>

<script>
import ProgressNav from '@/components/ProgressNav.vue';
import Section from '@/components/Section.vue';

export default {
	data:()=>{
		return{
			currentItem : 1
		}
	},
    components : {
		'v-progress-nav' : ProgressNav,
		'v-section' : Section
	},
    methods:{
        getTotalWidth(){
            let width = 0;
            let Sections = document.querySelectorAll("section");
            Sections.forEach(el => width += el.offsetWidth);
            return width;
        },
		changeURL(chapter) {
			window.location.hash = chapter;
		},
		switchScenes(chapter) {
			if(chapter){
				switch (chapter) {
					case '#chapter1':
						// Get the element
						this.sceneID = "#Scene1";
						this.refTitle = 'first';
						break;
				
					case '#chapter2':
						this.sceneID = "#Scene2";
						this.refTitle = 'second';
						break;
					case '#chapter3':
						this.sceneID = "#Scene3";
						this.refTitle = 'third';
						break;

					case '#chapter4':
						this.sceneID = "#Scene4";
						this.refTitle = 'fourth';
						break;
				}

				let sceneName  = document.querySelector(this.sceneID);
				if(sceneName){
					var pos =  sceneName.offsetLeft;
					this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
						this.$refs.processA.$refs[this.refTitle].classList.add("is-current");
					}}); 
				}
			}
		},
        goToChapter(payload){
			if(!payload){
				var currentURL = window.location.href;
				var pathname = currentURL.split('/');	
				var chapter = false;
				if(pathname[pathname.length-1].includes("chapter")){
					var chapter =  pathname[pathname.length-1];
					var chart = chapter.substring(chapter.length - 1); // get Last number of the string
					this.currentItem = (Number.isInteger(chart)) ? chart : 1;// last character of the string is an integer
				}
			} else {
                if(payload == "next"){
					var chapter = "#chapter" + parseInt(this.currentItem + 1); // NEXT
                } else if(payload == 'prev'){
					var chapter = "#chapter" + parseInt(this.currentItem - 1); // PREV
				}else {
				    var chapter =  "#" + payload.section; // click on DOTs
                }
            }
			this.switchScenes(chapter);
		},
		swicthCurrentClassEnter() {
			
		}
    },
    mounted(){
        if(process.client){
            this.$nextTick(() => {
				//  Animation Page a
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

				//Animation Sections
				document.querySelectorAll("section").forEach( (element, index) => { 
					var indexName = parseInt(index + 1);
					let tlSection = this.$gsap.timeline({
						scrollTrigger: {
							trigger: "#Scene" + index,
							scrub: 0,
							start: () =>
								"top top-=" +
								(document.querySelector("#Scene" + indexName).offsetLeft - window.innerWidth),
							end: () => "+=" + document.querySelector("#Scene" + indexName).offsetWidth,
							onEnter: () => {
								this.currentItem = indexName;
								this.changeURL('chapter' + indexName);
								if(indexName == 1){//Scene1
									this.$refs.processA.$refs.first.classList.add("is-current");
									this.$refs.prev.classList.add('disabled');
								}else if(indexName == 2){//Scene2
									this.$refs.processA.$refs.second.classList.add("is-current");
								}else if(indexName == 3){//Scene3
									this.$refs.processA.$refs.third.classList.add("is-current");
								}else if(indexName == 4){//Scene4
									this.$refs.processA.$refs.fourth.classList.add("is-current");
								}
							},
							onEnterBack: () => {
								this.currentItem = indexName;
								this.changeURL('chapter' + indexName);
								if(indexName == 1){//Scene1
									this.$refs.processA.$refs.second.classList.remove("is-current");
									this.$refs.prev.classList.add('disabled');
								}else if(indexName == 2){//Scene2
									this.$refs.processA.$refs.third.classList.remove("is-current");
								}else if(indexName == 3){//Scene3
									this.$refs.processA.$refs.fourth.classList.remove("is-current");
								}
							}
						}
					});
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