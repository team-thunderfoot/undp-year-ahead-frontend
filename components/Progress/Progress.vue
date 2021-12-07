<template>
    <div class="b--progress-b" ref="progress">
        
    </div>
</template>
<script>
export default {
    data:()=>{
		return{
           progressItems : []
		}
	},
    methods :  {
        goTo(scene, reference) {
			if(scene){
				var sceneName  = document.querySelector("#" + scene);
                var pos =  sceneName.offsetLeft;
                this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
                    this.$refs[reference][0].classList.add("is-current");
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
        this.$refs.one.classList.add("is-current");
    }
}
</script>
<style lang="scss">
    @import '@/sass/framework/components/progress/progress-b.scss';
</style>