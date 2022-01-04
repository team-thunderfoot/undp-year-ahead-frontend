<template>
    <section class="b--page-a__item b--chapter13-a" id="Scene13" ref="Scene13" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__divider">
                <div class="b--chapter13-a__divider">
                    <img
                        @load="handleLoad"
                        @error="handleLoad"
                        class="b--chapter13-a__divider__media b--chapter13-a__divider__media--left"
                        src="@/assets/img/chapter-13/11-12_tree.png"
                        alt="11-12_tree"
                    />
                </div>
            </div>
            <div class="b--ss-a__ft-items">
                <img ref="parallax-ft" :style="{ left: '335%' }" class="b--ss-a__ft-items__parallax" 
                    @load="handleLoad"
                    @error="handleLoad" src="@/assets/img/chapter-13/front-parallax.png" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <!-- chapter title -->
                <div 
                    class="b--chapter13-a__content"
                    :class="'b--chapter13-a__content--' + `${this.lang}`"
                    ref="boxContent"  :style="{ left: '352%' }"
                >
                    <v-card-f 
                        :title="chapter.intro_title"
                        :description="chapter.intro_description"
                        :customClass="'b--card-f--third b--card-f--'+ `${this.lang}`"
                        cardACustomClass="b--card-a--second"
                    />
                </div>
                <!-- info chart -->
                <div class="b--chapter13-a__content b--chapter13-a__content--second"
                 ref="infoChapter"  :style="{ left: '375%' }"
                >
                    <v-info-chapter :info="chapter"/>
                </div>
            </div>
            <div class="b--chapter13-a__artwork">
                <div class="b--motion-j" :style="'background-image: url(' + require(`@/assets/img/chapter-13/blink_3.png`) + ')'">
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__parallax"
                @load="handleLoad"
                @error="handleLoad"
                alt="back-parallax"
                ref="parallax-bg'"
                src="@/assets/img/chapter-13/back-parallax.png"
                >        
                <img class="b--ss-a__bg-items__back" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-13/back.png" alt="back">        
            </div>
        </div>
    </section>
</template>

<script>

import Parallax from '@/mixins/Parallax.js';
import Animation from '@/mixins/Animation.js';

export default {
    mixins: [Parallax,Animation],
    components:{
        'v-card-f': () => import(/* webpackChunkName: "CardF" */ "@/components/cards/CardF"),
        'v-info-chapter': () => import(/* webpackChunkName: "InfoChapter" */ "@/components/infochapter/Infochapter")        
    },
    data:()=>{
		return{
            totalContent: 5,
			contentLoaded : 0,
            chapter: null
		}
	},
    props: ['scrollTween'],
    methods: {
        handleLoad(){
            this.contentLoaded++;
        },
        AsambleParallaxObjs() {
      var motion = [
        { obj: this.$refs['parallax-bg'], intensity: 1 },
        { obj: this.$refs['parallax-ft'], intensity: 40},
        { obj: this.$refs['infoChapter'], intensity: 40},
        { obj: this.$refs['boxContent'], intensity: 40},
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene13'].offsetWidth,
          containerAnimation: this.scrollTween,
        })
      })
    },
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
                //motion frontend and backend elements
                this.AsambleParallaxObjs()
                // mixin function
                this.startAnimation({
                    sceneID : 13,
                    scrollTween : this.scrollTween
                })
            } 
        }
    },
    created() {
        this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
        var chapter = this.getLanguageData({lang : this.lang});
        this.chapter =  chapter.ChapterThirdteen;
        this.contentLoaded++;
    }
}
</script>

