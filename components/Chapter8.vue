<template>
    <section class="b--page-a__item b--chapter8-a" id="Scene8" ref="Scene8"  v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__artwork">
                <img class="b--ss-a__artwork__media b--ss-a__artwork__media--right" src="@/assets/img/chapter-8/front_tree.png">
            </div>
            <div class="b--ss-a__ft-items">
                <img class="b--ss-a__ft-items__parallax" ref="parallax-ft" src="@/assets/img/chapter-8/front-parallax.png">
                <img class="b--ss-a__ft-items__parallax b--ss-a__ft-items__parallax--middle" ref="parallax-ft" src="@/assets/img/chapter-8/middle-parallax.png">
            </div>
            <div class="b--ss-a__content">
                <!-- chapter title -->
                <div 
                    class="b--chapter8-a__content"
                    :class="'b--chapter8-a__content--' + `${this.lang}`"
                >
                    <v-card-f 
                        :title="chapter.title"
                        :description="chapter.description"
                        :customClass="'b--card-f--second b--card-f--'+ `${this.lang}`"
                    />
                </div>
                <!-- info chart -->
                <div class="b--chapter8-a__content b--chapter8-a__content--second">
                    <v-info-chapter :info="chapter"/>
                    <!-- <p><a href="">UN Biodiversity Conference (COP15)</a> 25 April - 8 May, Kunming, China</p> -->
                </div>
                <!-- plant animation -->
                <div class="b--chapter8-a__artwork">
                    <div
                        class="b--motion-e"
                        v-lazy:background-image="
                        require(`@/assets/img/chapter-8/plant_wind_1.png`)
                        "
                    ></div>
                </div> 
                <!-- fishes animation -->
                <div class="b--chapter8-a__artwork b--chapter8-a__artwork--second">
                    <div
                        class="b--motion-r"
                        v-lazy:background-image="
                        require(`@/assets/img/chapter-8/fishes_spritesheet.png`)
                        "
                    ></div>
                </div>      
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__parallax" ref="parallax-bg" src="@/assets/img/chapter-8/back-parallax.png" alt=""> 
                <img class="b--ss-a__bg-items__back" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-8/back.png">       
            </div>
        </div>
    </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity';
import CardF from '@/components/cards/CardF';
import InfoChapter from '@/components/infochapter/Infochapter';

// import Parallax from '@/motion/Parallax';
import Vue from 'vue';
import Parallax from '@/mixins/Parallax.js';
import Animation from '@/mixins/Animation.js';
Vue.use(Parallax)

export default {
    mixins: [Parallax,Animation],
    components:{
        'v-card-f':CardF,
        'v-info-chapter' : InfoChapter
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
            const query_content = groq`*[_type == "chapterEight"][0]{
                "title" : title['${this.lang}'],
                "description" : description['${this.lang}'],
                
                "tooltip_label" : tooltip_label['${this.lang}'],
                "tooltip_link" : tooltip_link['${this.lang}'],
                "tooltip_date" : tooltip_date['${this.lang}']
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
                    sceneID : 8,
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

