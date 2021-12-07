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
           currentItem : 1
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
                    if(this.currentItem == 2){
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
                var chapter = chapter.replace("#","");
                var chart = chapter.substring(chapter.length - 1); // get Last number of the string
				var currentItem = (Number.isInteger(chart)) ? chart : 1;// last character of the string is an integer
                var test = this.progressItems[currentItem - 1];
                this.goTo(chapter,test);
            }
		},
    },
    mounted() {
        this.progressItems = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight' , 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];
        this.goToChapter();
    },
    afterMounted() {
        this.$refs.prev.classList.add("disabled");
    }
}
</script>
<style lang="scss">
    @import '@/sass/framework/components/progress/progress-b.scss';
</style>