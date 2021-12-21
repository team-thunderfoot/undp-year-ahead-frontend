<template>
    <section class="b--page-a__item b--chapter14-a" id="Scene14" ref="Scene14" v-if="chapter">
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
                        :customClass="'b--card-f--'+ `${this.lang}`"
                    />
                </div>
                <!-- second position element, quote -->
                <div class="b--chapter14-a__content b--chapter14-a__content--second">
                    <v-quote-a 
                        :chapter="chapter"
                        customClass="b--quote-a--third"
                    />
                </div>
                <!-- arrow -->
                <div class="b--chapter14-a__artwork">
                    <div class="b--motion-o" v-lazy:background-image="require(`@/assets/test_sprites/arrow.png`)"></div>
                </div>
                <!--wheel -->
                <div class="b--chapter14-a__artwork b--chapter14-a__artwork--second">
                    <img
                        v-lazy="require(`@/assets/img/chapter-3/wheel.png`)"
                        alt="wheel"
                        title="wheel"
                    />
                </div>
                <div class="b--chapter14-a__content b--chapter14-a__content--third">
                    <v-card-i />
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
import CardI from '@/components/cards/CardI';
import QuoteA from '@/components/quote/Quote';

// import Parallax from '@/motion/Parallax';
import Vue from 'vue';
import Parallax from '@/mixins/Parallax.js';
import Animation from '@/mixins/Animation.js';
Vue.use(Parallax)

export default {
    mixins: [Parallax,Animation],
    components:{
        'v-card-f':CardF,
        'v-card-i':CardI,
        'v-quote-a':QuoteA
    },
    data:()=>{
		return{
            totalContent: 2,
			contentLoaded : 0,
            chapter: null
		}
	},
    props: ['scrollTween'],
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
                this.startAnimation({
                    sceneID : 14,
                    scrub:0,
                    scrollTween : this.scrollTween
                })
            })
        }
    },
    watch: {
        contentLoaded(newValue, oldValue) {
            if(newValue == this.totalContent ) {
                // emits on in Story.vue
                $nuxt.$emit('assetLoaded');
            }
        },
         scrollTween(newValue, oldValue){
            if (newValue ) {
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

