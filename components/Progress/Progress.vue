<template>
    <div class="b--progress-a">
        <a href="#" id="prev" ref="prev" @click.prevent="goTo('prev')" class="b--progress-a__arrow b--progress-a__arrow--prev">
            <img src="@/assets/img/arrow-left.png" />
        </a>
        <a href="#" id="next" ref="next" @click.prevent="goTo('next')" class="b--progress-a__arrow b--progress-a__arrow--next"> <img src="@/assets/img/arrow-right.png" /></a>
    </div>
</template>
<script>
export default {
    data:()=>{
		return{
           maxStories : 6,
           currentItemMenu : false
		}
	},
    props : [
        'urlName',
        'urlWithParams',
        'currentItem'
    ],
    methods :  {
        goTo(payload) {
			if(payload == 'next'){
                console.log(this.currentItemMenu);
                this.currentItemMenu = this.currentItemMenu + 1;
				var sceneName  = document.querySelector("#Scene" + this.currentItemMenu);
                var pos =  sceneName.offsetLeft;
                this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
                    if(this.currentItemMenu == this.maxStories){
                        this.$refs.prev.classList.remove("disabled");
                        this.$refs.next.classList.add("disabled");
                    }
                    if(this.currentItemMenu > 1 ){
                        this.$refs.prev.classList.remove("disabled");
                    }
                }});
			}
            if(payload == 'prev'){
                console.log(this.currentItemMenu);
                this.currentItemMenu = this.currentItemMenu - 1;
				var sceneName  = document.querySelector("#Scene" + this.currentItemMenu);
                var pos =  sceneName.offsetLeft;
                this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
                    if(this.currentItemMenu == 1){
                        this.$refs.next.classList.remove("disabled");
                        this.$refs.prev.classList.add("disabled");
                    }
                    if(this.currentItemMenu < 6 ){
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
                    const words = this.urlName.split('Scene');
                    this.currentItemMenu = words[1]; // gets number of the url name (from #Scene2 takes the number 2)
                    if(this.currentItemMenu == 1){
                        this.$refs.prev.classList.add("disabled"); // disabled bottoms from the beggining
                    }
                    if(this.currentItemMenu == this.maxStories){
                        this.$refs.next.classList.add("disabled"); // disabled bottoms from the beggining
                    }
                }}); 
            }else{
                console.log(this.currentItemMenu);
                if(this.currentItemMenu > 1 && this.currentItemMenu < 6 ){
                    this.$refs.prev.classList.remove("disabled");
                    this.$refs.next.classList.remove("disabled");
                }
                if(this.currentItemMenu == 1 ){
                    this.$refs.prev.classList.add("disabled"); // disabled bottoms from the beggining
                }
                if(this.currentItemMenu == 6 ){
                    this.$refs.next.classList.add("disabled"); // disabled bottoms from the beggining
                }
            }
		},
    },
    watch: {
        currentItem(newValue, oldValue) {
            if(newValue >  1 && newValue < 6 ){
                this.$refs.prev.classList.remove("disabled");
                this.$refs.next.classList.remove("disabled");
            }
            if(newValue == 1 ){
                this.$refs.prev.classList.add("disabled"); // disabled bottoms from the beggining
            }
            if(newValue == 6 ){
                this.$refs.next.classList.add("disabled"); // disabled bottoms from the beggining
            }
            this.currentItemMenu = newValue;
        },
    },
    mounted(){
        this.currentItemMenu  = this.currentItem;
        this.goToChapter();
    }
}
</script>
<style lang="scss">
    @import '@/sass/framework/components/progress/progress-a.scss';
</style>