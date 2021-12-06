<template>
    <section class="b--page-a__item" id="Scene1">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <div class="b--bird-a">
                    <img src="@/assets/img/bird.png" alt="">
                </div>
                <img class="b--ss-a__ft-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/ft-chapter-1.png" alt=""> 
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
                <div class="b--card-b">
                    <p class="b--card-b__content"><strong>UN Biodiversity Conference (COP15)</strong> <br>
                    25 April - 8 May, Kunming, China</p>
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/bg-chapter-1.png" alt="">    
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data:()=>{
		return{
			 imgLoaded : 0
		}
	},
    methods: {
        handleLoad: function(){
            this.imgLoaded++;
            if(this.imgLoaded == 2) {
                $nuxt.$emit('assetLoaded')
                // alert('all image loaded')   
            }
        }
    }
}
</script>

