<template>
    <div class="b--progress-a">
        <a href="#" id="prev" ref="prev" @click.prevent="goTo('prev')" class="b--progress-a__arrow b--progress-a__arrow--prev" aria-label="prev">
            <img src="@/assets/img/arrow-left.png" alt="arrow left"/>
        </a>
        <a href="#" id="next" ref="next" @click.prevent="goTo('next')" class="b--progress-a__arrow b--progress-a__arrow--next" aria-label="next"> <img src="@/assets/img/arrow-right.png" alt="arrow right" /></a>
        <div class="b--progress-a b--progress-a--second" :class="{'b--progress-a--second--is-hidden' : !scrollIsVisible}">
            <div class="b--progress-a__arrow b--progress-a--second__artwork" aria-label="scroll">
                <img src="@/assets/img/arrow-top.png" alt="scroll" />
            </div>
            <span class="b--progress-a--second__title">Scroll</span>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>{
		return{
           maxStories : 15,
           currentItemMenu : false,
           navIsLoaded: true,
           scrollIsVisible: true
		}
	},
    props : [
        'sceneNumber',
        'urlWithParams',
        'currentItem',
        'isLoaded',
    ],
    methods :  {
        goTo(payload) {
			if(payload == 'next'){
                this.currentItemMenu = parseInt(this.currentItemMenu) + 1;
                var sceneName  = document.querySelector("#Scene" + this.currentItemMenu);
                
                var pos =  sceneName.offsetLeft;
                this.$gsap.to(window, {duration: 2, scrollTo: pos,  
                onStart: () => {
                    this.$refs.prev.style.pointerEvents = "none";
                    this.$refs.next.style.pointerEvents = "none";
                },
               onComplete: () => {
                    if(this.currentItemMenu > 1 ){
                        this.$refs.prev.classList.remove("disabled");
                        this.$refs.prev.style.pointerEvents = "all";
                        this.$refs.next.style.pointerEvents = "all";
                    }
                    if(this.currentItemMenu == this.maxStories){
                        this.$refs.prev.classList.remove("disabled");
                        this.$refs.next.classList.add("disabled");
                        this.$refs.next.style.pointerEvents = "none";
                    }
                }});
			}
            if(payload == 'prev'){
                this.currentItemMenu = this.currentItemMenu - 1;
				var sceneName  = document.querySelector("#Scene" + this.currentItemMenu);
                var pos =  sceneName.offsetLeft;
                this.$gsap.to(window, {duration: 4, scrollTo: pos,
                onStart: () => {
                    this.$refs.prev.style.pointerEvents = "none";
                    this.$refs.next.style.pointerEvents = "none";
                },
                onComplete: () => {
                    if(this.currentItemMenu == 1){
                        this.$refs.next.classList.remove("disabled");
                        this.$refs.prev.classList.add("disabled");
                    }
                    if(this.currentItemMenu < this.maxStories ){
                        this.$refs.next.classList.remove("disabled");
                    }
                    this.$refs.prev.style.pointerEvents = "all";
                    this.$refs.next.style.pointerEvents = "all";
                }});
			}
        },
        goToChapter(){
            if(this.urlWithParams){
                if(this.sceneNumber > 0 && this.sceneNumber < 16){
                    if(this.sceneNumber != '1'){
                        var sceneName  = document.querySelector('#Scene' + this.sceneNumber);
                        if(this.sceneNumber == 14){
                            var pos =  sceneName.offsetLeft - 100;
                        } else {
                            var pos =  sceneName.offsetLeft;
                        }
                        this.$gsap.to(window, {duration: 4, scrollTo: pos,
                            onStart: () => {
                                //  Emits on Update Story .vue 
                                this.currentItemMenu = this.sceneNumber;
                                if(this.currentItemMenu == this.maxStories){
                                    this.$refs.next.classList.add("disabled"); // disabled bottoms from the beggining
                                }
                                // $nuxt.$emit('navIsLoaded');
                                this.$refs.prev.style.pointerEvents = "none";
                                this.$refs.next.style.pointerEvents = "none";
                            },
                            onComplete: () => {
                                //do something after going to section
                                this.currentItemMenu = this.sceneNumber; // gets number of the url name (from #Scene4 takes the number 2)
                                this.$refs.prev.style.pointerEvents = "all";
                                this.$refs.next.style.pointerEvents = "all";
                                if(this.currentItemMenu == this.maxStories){
                                    this.$refs.next.classList.add("disabled"); // disabled bottoms from the beggining
                                    this.$refs.next.style.pointerEvents = "none";
                                }
                            
                            }
                        }); 
                    } else {
                        this.currentItemMenu = this.sceneNumber;
                        this.$refs.prev.classList.add("disabled"); // disabled bottoms from the beggining
                        this.$refs.prev.style.pointerEvents = "none";
                    }
                }else{
                    this.$router.push({
                        query: { scene:  '1' }
                    });
                }
                
            }else{
                //  Emits on Update Story .vue 
                $nuxt.$emit('navIsLoaded');
                if(this.currentItemMenu > 1 && this.currentItemMenu < this.maxStories ){
                    this.$refs.prev.classList.remove("disabled");
                    this.$refs.next.classList.remove("disabled");
                    this.$refs.prev.style.pointerEvents = "all";
                    this.$refs.next.style.pointerEvents = "all";
                }
                if(this.currentItemMenu == 1 ){
                    this.$refs.prev.classList.add("disabled"); // disabled bottoms from the beggining
                    this.$refs.prev.style.pointerEvents = "none";
                }
                if(this.currentItemMenu == this.maxStories ){
                    this.$refs.next.classList.add("disabled"); // disabled bottoms from the beggining
                    this.$refs.next.style.pointerEvents = "none";
                }
            }
		},
        handleScroll(event) {
            if(window.pageYOffset > 240) {
                this.scrollIsVisible = false;
            } else {
                this.scrollIsVisible = true;
            }
        }
    },
    watch: {
        currentItem(newValue, oldValue) {
            if(newValue >  1 && newValue < this.maxStories ){
                this.$refs.prev.classList.remove("disabled");
                this.$refs.next.classList.remove("disabled");
                this.$refs.prev.style.pointerEvents = "all";
                this.$refs.next.style.pointerEvents = "all";
            }
            if(newValue == 1 ){
                this.$refs.prev.classList.add("disabled"); // disabled bottoms from the beggining
                this.$refs.prev.style.pointerEvents = "none";
            }
            if(newValue == this.maxStories ){
                this.$refs.next.classList.add("disabled"); // disabled bottoms from the beggining
                this.$refs.next.style.pointerEvents = "none";
            }
            this.currentItemMenu = newValue;
        },
        
    },
    created() {
        if(process.client) {
            window.addEventListener('scroll', this.handleScroll);
        }
    },
    mounted(){
        if(process.client){
            this.currentItemMenu  = this.currentItem;
            this.goToChapter();
            $nuxt.$emit('navIsLoaded');
        }
    }
}
</script>