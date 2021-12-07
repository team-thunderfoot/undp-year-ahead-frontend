<template>
    <section class="b--page-a__item" id="Scene2" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img class="b--ss-a__ft-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-2/front.png"> 
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
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-2/back.png">        
            </div>
        </div>
    </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity';
export default {
    data:()=>{
		return{
            totalContent: 3,
			contentLoaded : 0,
            chapter: null
		}
	},
    methods: {
        async getContent(){
            const query_content = groq`*[_type == "chapterOne"][0]{
                title,
                date,
                description
            }`;
            this.chapter = await this.$sanity.fetch(query_content);
            this.contentLoaded++;
        },
        handleLoad(){
            this.contentLoaded++;
        },
    },
    watch: {
        contentLoaded(newValue, oldValue) {
            if(newValue == this.totalContent ) {
                $nuxt.$emit('assetLoaded');
            }
        }
    },
    created(){
        if(process.client){
            this.getContent();
        }
    }
}
</script>

