<template>
    <section class="b--page-a__item b--chapter13-a" id="Scene13" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <div class="b--chapter13-a__artwork b--chapter13-a__artwork--second">
                    <div class="b--motion-test">
                        <!-- Plant -->
                    </div>
                </div>
                <img v-lazy="require(`@/assets/img/chapter-13/front.png`)" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <!-- first position element, card -->
                <div class="b--chapter13-a__content">
                    <v-card-f 
                        :title="chapter.title" 
                        :description="chapter.description"
                        customClass="b--card-f--third"
                    />
                </div>          
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" 
                @load="handleLoad" 
                @error="handleLoad" 
                src="@/assets/img/chapter-13/back.png"
                >        
            </div>
        </div>
    </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity';
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'
import CardF from '@/components/cards/CardF';

export default {
    components:{
        SanityContent,
        'v-card-f':CardF,
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
            const query_content = groq`*[_type == "chapterThirdteen"][0]{
                "title" : title['${this.lang}'],
                "description" : description['${this.lang}']
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
                        trigger: "#Scene13",
                        scrub: 0,
                        start: () =>
                            "top top-=" +
                            (document.querySelector("#Scene13").offsetLeft - window.innerWidth),
                        end: () => "+=" + document.querySelector("#Scene13").offsetWidth,
                        onEnter: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene6';
                            $nuxt.$emit('changeURL', { 'url'  : '13'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 13})
                        },
                        onEnterBack: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene6';
                            $nuxt.$emit('changeURL', { 'url'  : '13'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 13})
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

