<template>
    <section class="b--page-a__item b--chapter10-a" id="Scene10" ref="Scene10" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__artwork">
                <img class="b--ss-a__artwork__media b--ss-a__artwork__media--left" src="@/assets/img/chapter-10/front_rock.png">
            </div>
            <div class="b--ss-a__ft-items">
                <img class="b--ss-a__ft-items__parallax" ref="parallax-ft" src="@/assets/img/chapter-10/front-parallax.png">
            </div>
            <!-- animation out of content, fisherman and plant needs more z-index than ft-items and ft-items needs more z-index than content -->
            <div class="b--chapter10-a__artwork">
                <div class="b--motion-f" v-lazy:background-image="
                    require(`@/assets/img/chapter-10/fisherman_spritesheet.png`)
                    ">
                </div>
            </div>
            <div class="b--chapter10-a__artwork b--chapter10-a__artwork--second">
                <div class="b--motion-g" v-lazy:background-image="
                    require(`@/assets/img/chapter-10/plant_wind_2.png`)
                    ">
                </div>
            </div>
            <div class="b--ss-a__content">
                <!-- chapter title -->
                <div class="b--chapter10-a__content" :class="'b--chapter10-a__content--'+`${this.lang}`">
                    <v-card-f 
                        :title="chapter.title"
                        :description="chapter.description"
                        :customClass="'b--card-f--third b--card-f--'+ `${this.lang}`"
                        :loadMoreBtn="chapter.load_more_button"
                        :loadMoreURL="chapter.load_more_url"
                        :loadMore="true"
                    />
                </div>
            </div>
            <div class="b--ss-a__bg-items">  
                <img class="b--ss-a__bg-items__parallax" ref="parallax-bg" src="@/assets/img/chapter-10/back-parallax.png" alt=""> 
                <img class="b--ss-a__bg-items__back" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-10/back.png">        
            </div>
        </div>
    </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity';
import CardF from '@/components/cards/CardF';

// import Parallax from '@/motion/Parallax';
import Vue from 'vue';
import Parallax from '@/mixins/Parallax.js';
import Animation from '@/mixins/Animation.js';
Vue.use(Parallax)

export default {
    mixins: [Parallax,Animation],
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
    props: ['scrollTween'],
    methods: {
        async getContent(){
            this.lang = (this.$route.name == 'index') ? 'en' : this.$route.name;
            const query_content = groq`*[_type == "chapterTen"][0]{
                "title" : title['${this.lang}'],
                "description" : description['${this.lang}'],
                "load_more_button" : load_more_button['${this.lang}'],
                "load_more_url" : load_more_url['${this.lang}']
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
                    sceneID : 10,
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

