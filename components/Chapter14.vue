<template>
    <section class="b--page-a__item b--chapter14-a" id="Scene14" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img v-lazy="require(`@/assets/img/chapter-14/front.png`)" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <!-- first position element, chapter title -->
                <div class="b--chapter14-a__content">
                    <v-card-f 
                        :title="chapter.title"
                        :description="chapter.description"
                    />
                </div>
                <!-- second position element, quote -->
                <div class="b--chapter14-a__content b--chapter4-a__content--second">
                    <v-quote-a 
                        :chapter="chapter"
                        customClass="b--quote-a--second"
                    />
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-14/back.png">        
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
            const query_content = groq`*[_type == "chapterFourteen"][0]{
                "title" : title['${this.lang}'],
                "description" : description['${this.lang}'],
                
                "quote" :  quote['${this.lang}'],
                "quote_author" :  quote_author['${this.lang}'],
                "quote_author_link" :  quote_author_link['${this.lang}'],
                "quote_author_description" :  quote_author_description['${this.lang}'],

                "tooltip_label" : tooltip_label['${this.lang}'],
                "tooltip_link" : tooltip_link['${this.lang}'],
                "tooltip_date" : tooltip_date['${this.lang}']
            }`;
            this.chapter = await this.$sanity.fetch(query_content);
            this.contentLoaded++;

    
        },
        handleLoad(){
            this.contentLoaded++;
        },
        animate(){
            this.$nextTick(() => {
                // if we want to animate something later 
                var tlSection6 = this.$gsap.timeline({
                    scrollTrigger: {
                        trigger: "#Scene14",
                        scrub: 0,
                        start: () =>
                            "top top-=" +
                            (document.querySelector("#Scene14").offsetLeft - window.innerWidth),
                        end: () => "+=" + document.querySelector("#Scene14").offsetWidth,
                        onEnter: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene6';
                            $nuxt.$emit('changeURL', { 'url'  : '14'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 14})
                        },
                        onEnterBack: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene6';
                            $nuxt.$emit('changeURL', { 'url'  : '14'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 14})
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
                this.animate()
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

