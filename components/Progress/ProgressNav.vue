<template>
    <div class="b--progress-b">
        <a href="#" id="prev" ref="prev" @click.prevent="goTo('prev')" class="b--progress-a__arrow b--progress-a__arrow--prev"> </a>
        <!-- <ul class="b--progress-a__wrapper">
            <li class="b--progress-a__wrapper__item" :class="'js--' + item" :ref="item" @click.prevent="goTo('Scene' + parseInt(i + 1), item)" v-for="(item, i) in progressItems" :key="i">
                <span class="b--progress-a__wrapper__item__label"></span>
            </li>
        </ul> -->
        <a href="#" id="next" ref="next" @click.prevent="goTo('next')" class="b--progress-a__arrow b--progress-a__arrow--next"> </a>
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