<template>
    <div class="b--progress-b">
        <a href="#" id="prev" ref="prev" @click.prevent="goTo('prev')" class="b--progress-b__arrow b--progress-b__arrow--prev"> </a>
        <a href="#" id="next" ref="next" @click.prevent="goTo('next')" class="b--progress-b__arrow b--progress-b__arrow--next"> </a>
    </div>
</template>
<script>
export default {
    data:()=>{
		return{
           progressItems : [],
           currentItem : 1,
           maxStories : 6
		}
	},
    methods :  {
        goTo(payload) {
			if(payload == 'next'){
                this.currentItem++;
                console.log(this.currentItem);
				var sceneName  = document.querySelector("#Scene" + this.currentItem);
                var pos =  sceneName.offsetLeft;
                this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
                    if(this.currentItem == this.maxStories){
                        this.$refs.prev.classList.remove("disabled");
                        this.$refs.next.classList.add("disabled");
                    }
                }});
			}
            if(payload == 'prev'){
                this.currentItem--;
                console.log(this.currentItem);
				var sceneName  = document.querySelector("#Scene" + this.currentItem);
                var pos =  sceneName.offsetLeft;
                this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
                    if(this.currentItem == 1){
                        this.$refs.next.classList.remove("disabled");
                        this.$refs.prev.classList.add("disabled");
                    }
                }});
			}
        },
        goToChapter(){
            var currentURL = window.location.href;
            var pathname = currentURL.split('/');	
            var chapter = false;
            if(pathname[pathname.length-1].includes("Scene")){
                var chapter =  pathname[pathname.length-1];
                var sceneName  = document.querySelector(chapter);
                var pos =  sceneName.offsetLeft;
                this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
                    //do something after going to section
                    this.$emit("positionBasedURL", true);
                }}); 
            }
		},
    },
    mounted() {
        this.progressItems = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight' , 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];
        this.$refs.prev.classList.add("disabled");
        this.goToChapter();
    }
}
</script>
<style lang="scss">
    @import '@/sass/framework/components/progress/progress-b.scss';
</style>