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

                <div class="b--card-a">
                    <div class="b--card-a__hd">
                        <h3 class="b--card-a__hd__title">
                            chapter1
                        </h3> 
                    </div>
                    <div class="b--card-a__bd">
                        <p class="b--card-a__bd__content">chapter 0 Conference (COP15), countries will adopt a new global framework to halt the extinction crisis and transform our relationship with the natural world.</p>
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
    }
}
</script>

