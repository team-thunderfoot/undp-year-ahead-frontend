<template>
    <section class="b--page-a__item b--chapter3-a" id="Scene3" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <div class="b--chapter3-a__artwork">
                    <div class="b--motion-b" v-lazy:background-image="
                        require(`@/assets/img/chapter-3/flag.png`)
                        ">

                    </div>
                </div>
                <img v-lazy="require(`@/assets/img/chapter-3/front.png`)" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <div class="b--chapter3-a__content">
                    <v-card-f 
                        :title="chapter.title"
                        :description="chapter.content"
                    />
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
                var tlSection3 = this.$gsap.timeline({
                    scrollTrigger: {
                        trigger: "#Scene3",
                        scrub: 0,
                        start: () =>
                            "top top-=" +
                            (document.querySelector("#Scene3").offsetLeft - window.innerWidth),
                        end: () => "+=" + document.querySelector("#Scene3").offsetWidth,
                        onEnter: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene3';
                            $nuxt.$emit('changeURL', { 'url'  : 'Scene3'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 3})
                        },
                        onEnterBack: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene3';
                            $nuxt.$emit('changeURL', { 'url'  : 'Scene3'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 3})
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

