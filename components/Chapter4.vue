<template>
    <section class="b--page-a__item b--chapter4-a" id="Scene4" v-if="chapter">
        <!-- content is second to be above the front items with a bigger z-indez -->
        <div class="b--ss-a b--ss-a--second"> 
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
                <!-- <div class="b--card-a">
                    <div class="b--card-a__hd">
                        <h3 class="b--card-a__hd__title">
                            {{chapter.title}}
                        </h3> 
                    </div>
                    <div class="b--card-a__bd">
                        <p class="b--card-a__bd__content">
                            <SanityContent :blocks="chapter.description" />
                        </p>
                    </div>
                </div>
                <div class="b--card-b">
                    <p class="b--card-b__content">
                        <SanityContent :blocks="chapter.content" />
                    </p>
                </div> -->
                <!-- first position element, card -->
                <div class="b--chapter4-a__content">
                    <v-card-f 
                        :title="chapter.title" 
                        :description="chapter.description"
                    />
                </div>
                <!-- second position element, quote -->
                <div class="b--chapter4-a__content b--chapter4-a__content__second">
                <div class="b--quote-a b--quote-a--second">
                    <div class="b--quote-a__content">
                        <!-- {{ chapter.quote }} -->
                        “In a world where complex and multidimensional crisis has become the norm, the status quo for crisis response no longer an option.”  
                    </div>
                    <div class="b--quote-a__meta">
                    <h3 class="b--quote-a__meta__title">{{ chapter.quotetitle }}</h3>
                    <h4 class="b--quote-a__meta__subtitle">
                        <!-- {{ chapter.quotedirector }} -->
                         - Asako Okai, UNDP Crisis Bureau Director
                    </h4>
                    </div>
                </div>
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
import CardF from './cards/CardF';

export default {
        components:{
        'v-card-f':CardF
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
            const query_content = groq`*[_type == "chapterTwo"][0]{
                "title" : title['${this.lang}'],
                "content" : content['${this.lang}'],
                "description" : description['${this.lang}'],
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
                            $nuxt.$emit('changeURL', { 'url'  : 'Scene4'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 4})
                        },
                        onEnterBack: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene4';
                            $nuxt.$emit('changeURL', { 'url'  : 'Scene4'})
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

