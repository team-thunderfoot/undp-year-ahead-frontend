<template>
    <section class="b--page-a__item b--chapter3-a" id="Scene3" ref="Scene3" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img ref="parallax-3-ft" v-lazy="require(`@/assets/img/chapter-3/front.png`)" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <!-- flags left -->
                <div class="b--chapter3-a__artwork b--chapter3-a__artwork--fifth">
                    <div class="b--motion-b" v-lazy:background-image="
                        require(`@/assets/img/chapter-3/flags-left_spritesheet.png`)
                        ">
                    </div>
                </div>

                <!-- chapter title -->
                <div class="b--chapter3-a__content">
                    <v-card-f 
                        :title="chapter.title"
                        :description="chapter.description"
                        cardACustomClass="b--card-a--second"
                    />
                </div>

                <!-- info chart -->
                <div class="b--chapter3-a__content b--chapter3-a__content--second">
                    <v-info-chapter :info="chapter"/>
                </div>
                <!-- wheel -->
                <div class="b--chapter3-a__content b--chapter3-a__content--third">
                    <img
                        v-lazy="require(`@/assets/img/chapter-3/wheel.png`)"
                        alt="wheel"
                        title="wheel"
                    />
                </div>

                <!-- flags right -->
                <div class="b--chapter3-a__artwork b--chapter3-a__artwork--second">
                    <div class="b--motion-c" v-lazy:background-image="
                        require(`@/assets/img/chapter-3/flags-right_spritesheet.png`)
                        ">
                    </div>
                    
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-3/back.png" alt="back">        
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
    data:()=>{
		return{
            totalContent: 2,
			contentLoaded : 0,
            chapter: null
		}
	},
    props: ['scrollTween'],
    components:{
        'v-card-f':CardF,
        'v-info-chapter' : InfoChapter
    },
    methods: {
        async getContent(){
            this.lang = (this.$route.name == 'index') ? 'en' : this.$route.name;
            const query_content = groq`*[_type == "chapterThree"][0]{
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
                    sceneID : 3,
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
                var motion = [
                    {obj:this.$refs['parallax-3-ft'], intensity:.5},
                ]
                // motion.forEach(item => {
                //     this.parallaxMove({
                //         el: item.obj,
                //         intensity:item.intensity,
                //         duration: this.$refs['Scene3'].offsetWidth,
                //         containerAnimation:this.scrollTween,
                //         scrub:1,
                //     })  
                // });
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

