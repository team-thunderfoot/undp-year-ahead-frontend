<template>
    <section class="b--page-a__item b--chapter13-a" id="Scene13" ref="Scene13" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img v-lazy="require(`@/assets/img/chapter-13/front.png`)" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <!-- first position element, card -->
                <div class="b--chapter13-a__content">
                    <v-card-f 
                        :title="chapter.title" 
                        :description="chapter.description"
                        :customClass="'b--card-f--third b--card-f--'+ `${this.lang}`"
                        cardACustomClass="b--card-a--second"
                    />
                </div> 
                <div class="b--chapter13-a__artwork">
                    <div class="b--motion-m" v-lazy:background-image="
                    require(`@/assets/img/chapter-13/plant_water.png`)
                    ">
                    </div>
                </div>
                <div class="b--chapter13-a__artwork b--chapter13-a__artwork--second">
                    <div class="b--motion-n" v-lazy:background-image="
                    require(`@/assets/img/chapter-13/plant_water_2.png`)
                    ">
                    </div>
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

// import Parallax from '@/motion/Parallax';
import Vue from 'vue';
import Parallax from '@/mixins/Parallax.js';
import Animation from '@/mixins/Animation.js';
Vue.use(Parallax)

export default {
    mixins: [Parallax,Animation],
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
    props: ['scrollTween'],
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
                this.startAnimation({
                    sceneID : 13,
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

