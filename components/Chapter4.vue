<template>
    <section class="b--page-a__item b--chapter4-a" id="Scene4" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img 
                v-lazy="require(`@/assets/img/chapter-4/front.png`)"
                class="b--ss-a__ft-items__artwork"
                @load="handleLoad"
                @error="handleLoad" 
                alt="front" 
                />
            </div>
            <div class="b--ss-a__content">
                <!-- first position element, card -->
                <div class="b--chapter4-a__content">
                    <v-card-f 
                        :title="chapter.title" 
                        :description="chapter.description"
                        customClass="b--card-f--second"
                    />
                </div>
                <!-- second position element, quote -->
                <div class="b--chapter4-a__content b--chapter4-a__content--second">
                    <v-quote-a :chapter="chapter"/>
                </div>
                <!-- third position element, tent -->
                <div class="b--chapter4-a__artwork">
                <img 
                    v-lazy="require(`@/assets/img/chapter-4/tent.svg`)"
                    class="b--chapter4-a__artwork__media"
                    @load="handleLoad"
                    @error="handleLoad" 
                    alt="tent" 
                />
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-4/back.png">        
            </div>
        </div>
    </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity';
import CardF from '@/components/cards/CardF';
import QuoteA from '@/components/quote/Quote';

export default {
        components:{
        'v-card-f':CardF,
        'v-quote-a':QuoteA
    },
    data:()=>{
		return{
            totalContent: 2,
			contentLoaded : 0,
            chapter: null
		}
	},
    methods: {
        async getContent(){
            this.lang = (this.$route.name == 'index') ? 'en' : this.$route.name;
            const query_content = groq`*[_type == "chapterFour"][0]{
                "title" : title['${this.lang}'],
                "description" : description['${this.lang}'],

                "quote" :  quote['${this.lang}'],
                "quote_author" :  quote_author['${this.lang}'],
                "quote_author_link" :  quote_author_link['${this.lang}'],
                "quote_author_description" :  quote_author_description['${this.lang}'],
                
            }`;
            this.chapter = await this.$sanity.fetch(query_content);
            this.contentLoaded++;

            // this.$nextTick(() => {
            //     // if we want to animate something later 
            //     var tlSection4 = this.$gsap.timeline({
            //         scrollTrigger: {
            //             trigger: "#Scene4",
            //             scrub: 0,
            //             start: () =>
            //                 "top top-=" +
            //                 (document.querySelector("#Scene4").offsetLeft - window.innerWidth),
            //             end: () => "+=" + document.querySelector("#Scene4").offsetWidth,
            //             onEnter: () => {
            //                 // emits on in Story.vue
            //                 // window.location.href =  this.$route.path  + '#Scene4';
            //                 $nuxt.$emit('changeURL', { 'url'  : 'Scene4'})
            //                 $nuxt.$emit('changeCurrent', { 'item'  : 4})
            //             },
            //             onEnterBack: () => {
            //                 // emits on in Story.vue
            //                 // window.location.href =  this.$route.path  + '#Scene4';
            //                 $nuxt.$emit('changeURL', { 'url'  : 'Scene4'})
            //                 $nuxt.$emit('changeCurrent', { 'item'  : 4})
            //             }
            //         }
            //     });
            // })
        },
        handleLoad(){
            this.contentLoaded++;
        },
        animate(){
            this.$nextTick(() => {
                // if we want to animate something later 
                var tlSection4 = this.$gsap.timeline({
                    scrollTrigger: {
                        trigger: "#Scene4",
                        scrub: 0,
                        start: () =>
                            "top top-=" +
                            (document.querySelector("#Scene4").offsetLeft - window.innerWidth),
                        end: () => "+=" + document.querySelector("#Scene4").offsetWidth,
                        onEnter: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene4';
                            $nuxt.$emit('changeURL', { 'url'  : '4'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 4})
                        },
                        onEnterBack: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene4';
                            $nuxt.$emit('changeURL', { 'url'  : '4'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 4})
                        }
                    }
                });
            })
        }
    },
    watch: {
        contentLoaded(newValue, oldValue) {
            if(newValue == this.totalContent ) {
                // emits on in Story.vue
                $nuxt.$emit('assetLoaded');
                this.animate();
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

