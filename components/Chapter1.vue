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
                        <h1 class="b--intro-a__title">
                            {{chapter.title}}
                        </h1>
                        <h2 class="b--intro-a__badge">
                            {{chapter.date}}
                        </h2>
                        <h3 class="b--intro-a__subtitle">{{chapter.description}}</h3>
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
                           <img src="@/assets/img/chapter-1/frame.gif" alt="">
                        </div>
                    </div>
                </div>

                <div class="b--chapter1-a__artwork b--chapter1-a__artwork--third">
                    <img src="@/assets/img/chapter-1/browser.gif" alt="">
                </div>

                <div class="b--chapter1-a__artwork b--chapter1-a__artwork--fourth">
                    <div class="b--card-c">
                        <div class="b--card-c__bd">
                            <div class="b--card-c__bd__artwork"></div>
                            <div class="b--card-c__bd__media">
                                <img src="@/assets/img/chapter-1/tv.gif" alt="">
                            </div>
                        </div>
                        <div class="b--card-c__ft">
                            <img src="@/assets/img/chapter-1/tv-set.png">
                        </div>
                    </div>
                </div>

                <div class="b--chapter1-a__item">
                    <div class="b--quote-a">
                        <div class="b--quote-a__content">
                            "To make a difference to people's"
                        </div>
                        <div class="b--quote-a__meta">
                            <h3 class="b--quote-a__meta__title">Title</h3>
                            <h4 class="b--quote-a__meta__subtitle">Director of INDP Bureau for Policy and Programe Support</h4>
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

export default {
    data:()=>{
		return{
            totalContent:3,
			contentLoaded : 0,
            chapter : null,
		}
	},
    components:{
        SanityContent
    },
    methods: {
        async getContent(){
            this.lang = (this.$route.name == 'index') ? 'en' : this.$route.name;
            const query_content = groq`*[_type == "chapterOne"][0]{
                "title" : title['`+this.lang+`'],
                "date" : date['`+this.lang+`'],
                "description" : description['`+this.lang+`'],
                "content" : content['`+this.lang+`']
            }`;
            this.chapter = await this.$sanity.fetch(query_content);
            this.$nextTick(() => {
                // if we want to animate something later 
              
            })
            this.contentLoaded++;

        },
        handleLoad(){
            this.contentLoaded++;
        },
    },
    watch: {
        contentLoaded(newValue, oldValue) {
            if(newValue == this.totalContent ) {
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

