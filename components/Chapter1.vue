<template>
    <section class="b--page-a__item b--chapter1-a" id="Scene1" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img class="b--ss-a__ft-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-1/front.png" alt=""> 
            </div>
            <div class="b--ss-a__content">

                <!-- Intro Story -->
                <!-- first div position element -->
                <div class="b--chapter1-a__content " >
                    <div class="b--intro-a">
                        <div class="b--intro-a__artwork"></div>
                        <div class="b--intro-a__wrapper">
                            <h1 class="b--intro-a__wrapper__title">
                                {{chapter.title}}
                                <span class="b--intro-a__wrapper__title__badge">{{chapter.date}}</span>
                            </h1>
                            <h2 class="b--intro-a__wrapper__subtitle">{{chapter.description}}</h2>
                        </div>
                    </div>
                </div>
                <!-- Intro Story -->

                <div class="b--chapter1-a__content b--chapter1-a__content--second">
                    <div class="b--card-a">
                        <div class="b--card-a__artwork"></div>
                        <div class="b--card-a__wrapper b--content-a">
                            <SanityContent :blocks="chapter.content"  />
                        </div>
                    </div>
                </div>

                <div class="b--chapter1-a__artwork b--chapter1-a__artwork--second">
                    <div class="b--card-b">
                        <div class="b--card-b__artwork"></div>
                        <div class="b--card-b__wrapper">
                           <img class="b--card-b__wrapper__media" v-lazy="require(`@/assets/img/chapter-1/frame.gif`)"  alt="frame" title="frame">
                        </div>
                    </div>
                </div>

                <div class="b--chapter1-a__artwork b--chapter1-a__artwork--third">
                    <img v-lazy="require(`@/assets/img/chapter-1/browser.gif`)"  alt="browser" title="browser">
                </div>

                <div class="b--chapter1-a__artwork b--chapter1-a__artwork--fourth">
                    <div class="b--card-c">
                        <div class="b--card-c__bd">
                            <div class="b--card-c__bd__artwork"></div>
                            <div class="b--card-c__bd__media-wrapper">
                                 <img v-lazy="require(`@/assets/img/chapter-1/tv.gif`)"  alt="tv" title="tv" class="b--card-c__bd__media-wrapper__media">
                            </div>
                        </div>
                        <div class="b--card-c__ft">
                            <img class="b--card-c__ft__media" v-lazy="require(`@/assets/img/chapter-1/tv-set.png`)"  alt="tvset" title="tvset">
                        </div>
                    </div>
                </div>

                <div class="b--chapter1-a__item">
                    <div class="b--quote-a">
                        <div class="b--quote-a__content">
                            <SanityContent :blocks="chapter.quote"  />
                        </div>
                        <div class="b--quote-a__meta">
                            <h3 class="b--quote-a__meta__title">{{chapter.quotetitle}}</h3>
                            <h4 class="b--quote-a__meta__subtitle">{{chapter.quotedirector}}</h4>
                        </div>
                    </div>
                </div>

                <div class="b--chapter1-a__artwork b--chapter1-a__artwork--fifth">
                   <div class="b--motion-a">
                        <!-- bubble -->
                    </div>
                </div>


                <div class="b--chapter1-a__artwork b--chapter1-a__artwork--sixth">
                   <div class="b--motion-b">
                        <!-- Plant -->
                    </div>
                </div>

                <!-- content-third position -->
                <div class="b--chapter1-a__content b--chapter1-a__content--third">
                    <!-- card-e -->
                    <div class="b--card-e">
                        <h4 class="b--card-e__title">“Working Together, Restoring Trust”</h4>
                    </div>
                </div>

                <!-- content-fourth position -->
                <div class="b--chapter1-a__content b--chapter1-a__content--fourth">
                    <!-- text with bg -->
                    <div class="b--card-d">
                        <div class="b--card-d__wrapper">
                             <div class="b--card-d__wrapper__content b--content-a">
                                <p>Business, government and civil society leaders meet at the World Economic Forum to address economic, environmental, political and social challenges and the impact of COVID-19.</p>
                            </div>
                        </div>
                        <div class="b--card-d__media-wrapper">
                            <img class="b--card-d__media-wrapper__media" v-lazy="require(`@/assets/img/chapter-1/graphics.png`)"  alt="graphic" title="graphic">
                        </div>
                    </div>
                </div>

                <div class="b--chapter1-a__info">
                    <div class="b--info-chapter-a" @click.prevent="toggleInfoChapter()">
                        <div class="b--info-chapter-a__icon">
                            i
                        </div>
                    </div>
                    <div class="b--info-window-a" :class="{ 'b--info-window-a--is-visible': this.infoWindowStatus}" @click.prevent="this.infoWindowStatus == !this.infoWindowStatus">
                        <div class="b--info-window-a__content">
                            <SanityContent :blocks="chapter.info"  />
                        </div>
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
// Data import
import { groq } from '@nuxtjs/sanity';
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content';

import Vue from 'vue';
import infoWindow from '@/mixins/infoChapter.js';
Vue.mixin(infoWindow)

export default {
    mixins:['infoWindow'],
    data:()=>{
		return{
            totalContent:3,
			contentLoaded : 0,
            chapter : null,
            infoWindowStatus: false
		}
	},
    components:{
        SanityContent
    },
    methods: {
        async getContent(){
            this.lang = (this.$route.name == 'index') ? 'en' : this.$route.name;
            const query_content = groq`*[_type == "chapterOne"][0]{
                "title" : title['${this.lang}'],
                "date" : date['${this.lang}'],
                "description" : description['${this.lang}'],
                "content" : content['${this.lang}'],
                "quote" :  quote['${this.lang}'],
                "quotetitle" :  quotetitle['${this.lang}'],
                "quotedirector" :  quotedirector['${this.lang}'],
                "panel" :  panel['${this.lang}'],
                "info" : info['${this.lang}']
            }`;
            this.chapter = await this.$sanity.fetch(query_content);
            this.$nextTick(() => {
                // if we want to animate something later 
                let tlSection = this.$gsap.timeline({
                    scrollTrigger: {
                        trigger: "#Scene1",
                        scrub: 0,
                        start: () =>
                            "top top-=" +
                            (document.querySelector("#Scene1").offsetLeft - window.innerWidth),
                        end: () => "+=" + document.querySelector("#Scene1").offsetWidth,
                        onEnter: () => {
                            // emits on in Story.vue
                            $nuxt.$emit('changeURL', { 'url'  : 'Scene1'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 1})
                        },
                        onEnterBack: () => {
                            // emits on in Story.vue
                            $nuxt.$emit('changeURL', { 'url'  : 'Scene1'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 1})
                        }
                    }
                });
                this.contentLoaded++;
            })

        },
        handleLoad(){
            this.contentLoaded++;
        },
    },
    watch: {
        contentLoaded(newValue, oldValue) {
            if(newValue == this.totalContent ) {
                // emits on in Story.vue
                $nuxt.$emit('assetLoaded')
            }
        }
    },
    created(){
        if(process.client){
            this.getContent();   
        }
    },
}
</script>

