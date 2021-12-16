<template>
    <section class="b--page-a__item b--chapter6-a" id="Scene6" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img v-lazy="require(`@/assets/img/chapter-6/front.png`)" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <!-- first position element, card -->
                <div class="b--chapter6-a__content">
                    <v-card-f 
                        :title="chapter.title" 
                        :description="chapter.description"
                        customClass="b--card-f--third"
                        cardACustomClass="b--card-a--second"
                    />
                </div>
                <!-- second position element, wheel -->
                <div class="b--chapter6-a__content b--chapter6-a__content--second">
                    <img
                        class="b--chapter6-a__content--second__media"
                        v-lazy="require(`@/assets/img/chapter-6/wheel.png`)"
                        alt="wheel"
                        title="wheel"
                    />
                </div>
                <!-- third position element, quote -->
                <div class="b--chapter6-a__content b--chapter6-a__content--third">
                    <v-quote-a 
                        :chapter="chapter"
                        customClass="b--quote-a--second"
                    />
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-6/back.png">        
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
            const query_content = groq`*[_type == "chapterSix"][0]{
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
            //     var tlSection6 = this.$gsap.timeline({
            //         scrollTrigger: {
            //             trigger: "#Scene6",
            //             scrub: 0,
            //             start: () =>
            //                 "top top-=" +
            //                 (document.querySelector("#Scene6").offsetLeft - window.innerWidth),
            //             end: () => "+=" + document.querySelector("#Scene6").offsetWidth,
            //             onEnter: () => {
            //                 // emits on in Story.vue
            //                 // window.location.href =  this.$route.path  + '#Scene6';
            //                 $nuxt.$emit('changeURL', { 'url'  : 'Scene6'})
            //                 $nuxt.$emit('changeCurrent', { 'item'  : 6})
            //             },
            //             onEnterBack: () => {
            //                 // emits on in Story.vue
            //                 // window.location.href =  this.$route.path  + '#Scene6';
            //                 $nuxt.$emit('changeURL', { 'url'  : 'Scene6'})
            //                 $nuxt.$emit('changeCurrent', { 'item'  : 6})
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
                var tlSection6 = this.$gsap.timeline({
                    scrollTrigger: {
                        trigger: "#Scene6",
                        scrub: 0,
                        start: () =>
                            "top top-=" +
                            (document.querySelector("#Scene6").offsetLeft - window.innerWidth),
                        end: () => "+=" + document.querySelector("#Scene6").offsetWidth,
                        onEnter: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene6';
                            $nuxt.$emit('changeURL', { 'url'  : '6'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 6})
                        },
                        onEnterBack: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene6';
                            $nuxt.$emit('changeURL', { 'url'  : '6'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 6})
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

