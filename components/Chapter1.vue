<template>
    <section class="b--page-a__item b--chapter1-a" id="Scene1">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <div class="b--chapter1-a__artwork">
                    <img src="@/assets/img/chapter-1/bubble.svg" alt="">
                </div>
                <img class="b--ss-a__ft-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-1/front.png" alt=""> 
            </div>
            <div class="b--ss-a__content"  v-if="chapter">
                <div class="b--chapter1-a__content">
                    <div class="b--card-a">
                        <h1 class="b--card-a__title">
                            {{chapter.title['en']}}
                        </h1>
                        <h2 class="b--card-a__badge">
                            {{chapter.date['en']}}
                        </h2>
                        <h3 class="b--card-a__subtitle">{{chapter.description['en']}}</h3>
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

export default {
    data:()=>{
		return{
            totalContent:3,
			contentLoaded : 0,
            chapter : null,
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
        createAnimation(){
            let tlSection = this.$gsap.timeline({
                scrollTrigger: {
                    trigger: "#Scene1",
                    scrub: 0,
                    start: () =>
                        "top top-=" +
                        (document.querySelector("#Scene1").offsetLeft - window.innerWidth),
                    end: () => "+=" + document.querySelector("#Scene1").offsetWidth,
                    onEnter: () => {
                        this.$emit('changeURL', { 'url'  : 'Scene1'})
                        document.querySelector(".js--one").classList.add("is-current");
                        // document.querySelector("#prev").classList.add("disabled");
                        
                    },
                    onEnterBack: () => {
                        this.$emit('changeURL', { 'url'  : 'Scene1'})
                        document.querySelector(".js--two").classList.remove("is-current");
                        // document.querySelector("#prev").classList.add("disabled");
                    }
                }
            });
        }
    },
    watch: {
        contentLoaded(newValue, oldValue) {
            if(newValue == this.totalContent ) {
                $nuxt.$emit('assetLoaded')
                this.createAnimation()
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

