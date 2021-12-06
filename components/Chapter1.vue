<template>
    <section class="b--page-a__item b--chapter1-a" id="Scene1">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <div class="b--chapter1-a__artwork">
                    <img src="@/assets/img/chapter-1/bubble.svg" alt="">
                </div>
                <img class="b--ss-a__ft-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-1/front.png" alt=""> 
            </div>
            <div class="b--ss-a__content">
                <div class="b--chapter1-a__content">
                    <div class="b--card-a">
                        <h1 class="b--card-a__title">
                            sustainable Development
                        </h1>
                        <h2 class="b--card-a__badge">
                            in 2022
                        </h2>
                        <h3 class="b--card-a__subtitle">What to watch in the year ahead</h3>
                    </div>
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-1/back.png" alt="">    
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data:()=>{
		return{
            totalAssets:2,
			imgLoaded : 0
		}
	},
    methods: {
        handleLoad: function(){
            this.imgLoaded++;
            if(this.imgLoaded == this.totalAssets) {
                $nuxt.$emit('assetLoaded')
            }
        }
    },
    created(){
        if(process.client){

        }
    }
}
</script>

