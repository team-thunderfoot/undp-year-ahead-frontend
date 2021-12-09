<template>
    <section class="b--page-a__item" id="Scene3" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img class="b--ss-a__ft-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-3/front.png"> 
            </div>
            <div class="b--ss-a__content">
                <div class="b--card-a">
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
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-3/back.png">        
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
            this.lang = (this.$route.name == 'index') ? 'en' : this.$route.name;
            const query_content = groq`*[_type == "chapterTwo"][0]{
                "title" : title['`+this.lang+`'],
                "content" : content['`+this.lang+`'],
                "description" : description['`+this.lang+`']
            }`;
            this.chapter = await this.$sanity.fetch(query_content);
            this.$nextTick(() => {
                // if we want to animate something later 
                var tlSection = this.$gsap.timeline({
                    scrollTrigger: {
                        trigger: "#Scene3",
                        scrub: 0,
                        start: () =>
                            "top top-=" +
                            (document.querySelector("#Scene3").offsetLeft - window.innerWidth),
                        end: () => "+=" + document.querySelector("#Scene3").offsetWidth,
                        onEnter: () => {
                            console.log(this.isLoadedURLParam);
                            window.location.href =  this.$route.path  + '#Scene3';
                        },
                        onEnterBack: () => {
                            console.log(this.isLoadedURLParam);
                            window.location.href =  this.$route.path  + '#Scene3';
                        }
                    }
                });
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

