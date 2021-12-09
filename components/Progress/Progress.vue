<template>
    <div class="b--progress-a">
        <a href="#" id="prev" ref="prev" @click.prevent="goTo('prev')" class="b--progress-a__arrow b--progress-a__arrow--prev"> </a>
        <a href="#" id="next" ref="next" @click.prevent="goTo('next')" class="b--progress-a__arrow b--progress-a__arrow--next"> </a>
    </div>
</template>
<script>
export default {
    data:()=>{
		return{
           currentItem : 1,
           maxStories : 6
		}
	},
    props : [
        'urlName',
        'urlWithParams',
    ],
    methods :  {
        goTo(payload) {
			if(payload == 'next'){
                this.currentItem++;
				var sceneName  = document.querySelector("#Scene" + this.currentItem);
                var pos =  sceneName.offsetLeft;
                this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
                    if(this.currentItem == this.maxStories){
                        this.$refs.prev.classList.remove("disabled");
                        this.$refs.next.classList.add("disabled");
                    }
                    if(this.currentItem > 1 ){
                        this.$refs.prev.classList.remove("disabled");
                    }
                }});
			}
            if(payload == 'prev'){
                this.currentItem--;
				var sceneName  = document.querySelector("#Scene" + this.currentItem);
                var pos =  sceneName.offsetLeft;
                this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
                    if(this.currentItem == 1){
                        this.$refs.next.classList.remove("disabled");
                        this.$refs.prev.classList.add("disabled");
                    }
                    if(this.currentItem < 6 ){
                        this.$refs.next.classList.remove("disabled");
                    }
                }});
			}
        },
        goToChapter(){
            if(this.urlWithParams){
                var sceneName  = document.querySelector(this.urlName);
                var pos =  sceneName.offsetLeft;
                this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
                    //do something after going to section
                    this.$emit("positionBasedURL", true);
                    const words = this.urlName.split('Scene');
                    this.currentItem = words[1]; // gets number of the url name (from #Scene2 takes the number 2)
                    if(words[1] == 1){
                        this.$refs.prev.classList.add("disabled"); // disabled bottoms from the beggining
                    }
                    if(words[1] == this.maxStories){
                        this.$refs.next.classList.add("disabled"); // disabled bottoms from the beggining
                    }
                    $nuxt.$emit('isLoadedURL');
                }}); 
            }else{
                this.$refs.prev.classList.add("disabled"); // disabled bottoms from the beggining
            }
		},
    },
    mounted(){
        this.goToChapter();
    }
}
</script>
<style lang="scss">
    @import '@/sass/framework/components/progress/progress-a.scss';
</style>