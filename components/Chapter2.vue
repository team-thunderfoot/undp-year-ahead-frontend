<template>
    <section class="b--page-a__item b--chapter2-a" id="Scene2" ref="Scene2"  v-if="chapter">
        <div class="b--ss-a">
            <div class="b--ss-a__ft-items">
                <img ref="parallax-2-ft" v-lazy="require(`@/assets/img/chapter-2/front.png`)" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <div class="b--chapter2-a__content">
                    <v-card-f 
                        :title="chapter.title"
                        :description="chapter.description"
                        customClass="b--card-f--second"
                    />
                </div>
                <div class="b--chapter2-a__content b--chapter2-a__content--second">
                    <div class="b--card-g" :class="'b--card-g--' + `${this.lang}`">
                        <div class="b--card-g__media-wrapper">
                            <img
                            v-lazy="require(`@/assets/img/chapter-2/dino.gif`)"
                            alt="tv"
                            title="tv"
                            class="b--card-g__media-wrapper__media"
                            />
                        </div>
                    </div>
                </div>
                <div class="b--chapter2-a__artwork">
                    <img
                        v-lazy="require(`@/assets/img/chapter-2/dino-orange.png`)"
                        alt="browser"
                        title="browser"
                    />
                </div>
                <div class="b--chapter2-a__artwork b--chapter2-a__artwork--second">
                    <img
                        v-lazy="require(`@/assets/img/chapter-2/dino-green.png`)"
                        alt="browser"
                        title="browser"
                    />
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-2/back-2.png" alt="back">        
            </div>
        </div>
    </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity';
import CardF from './cards/CardF';


// import Parallax from '@/motion/Parallax';
import Vue from 'vue';
import Parallax from '@/mixins/Parallax.js';
import Animation from '@/mixins/Animation.js';
Vue.use(Parallax)

export default {
    mixins: [Parallax,Animation],
    data:()=>{
		return{
            totalContent: 2,
			contentLoaded : 0,
            chapter: null
		}
    },
    props: ['scrollTween'],
    components:{
        'v-card-f':CardF
    },
    methods: {
        async getContent(){
            this.lang = (this.$route.name == 'index') ? 'en' : this.$route.name;
            const query_content = groq`*[_type == "chapterTwo"][0]{
                "title" : title['${this.lang}'],
                "description" : description['${this.lang}'],
            }`;
            this.chapter = await this.$sanity.fetch(query_content);
            this.contentLoaded++;
        },
        handleLoad(){
            this.contentLoaded++;
        },
        parallax(reference, intensity){
            var sceneID = 2;
            this.parallaxMove({
                sceneID : sceneID,
                containerAnimation:this.scrollTween,
                scrub:1,
                element:this.$refs[reference],
                intensity:intensity,
            })
        },
        animate(){
            this.$nextTick((e) => {
                this.startAnimation({
                    sceneID : 2,
                    scrub:0,
                })
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
        },
        scrollTween(newValue, oldValue){
            if (newValue ) {
                // this.parallax('parallax-2-ft');
            } 
        }
    },
    mounted(){
        if(process.client){
            this.getContent();
        }
    }
}
</script>

