<template>
    <section class="b--page-a__item b--chapter12-a" id="Scene13" ref="Scene13" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__divider">
                <div class="b--chapter12-a__divider">
                    <img
                        class="b--chapter12-a__divider__media b--chapter12-a__divider__media--left"
                        v-lazy="require(`@/assets/img/chapter-12/11-12_tree.png`)"
                    />
                </div>
            </div>
            <div class="b--ss-a__ft-items">
                <img ref="parallax-ft" :style="{ left: '455%' }" class="b--ss-a__ft-items__parallax" v-lazy="require(`@/assets/img/chapter-12/front-parallax.png`)" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <!-- chapter title -->
                <div 
                    class="b--chapter12-a__content"
                    :class="'b--chapter12-a__content--' + `${this.lang}`"
                    ref="boxContent"  :style="{ left: '472%' }"
                >
                    <v-card-f 
                        :title="chapter.intro_title"
                        :description="chapter.intro_description"
                        :customClass="'b--card-f--third b--card-f--'+ `${this.lang}`"
                        cardACustomClass="b--card-a--second"
                    />
                </div>
                <!-- info chart -->
                <div class="b--chapter12-a__content b--chapter12-a__content--second"
                 ref="infoChapter"  :style="{ left: '500%' }"
                >
                    <v-info-chapter :info="chapter"/>
                </div>
            </div>
            <div class="b--chapter12-a__artwork">
                <div class="b--motion-j" v-lazy:background-image="
                require(`@/assets/img/chapter-12/blink_3.png`)
                ">
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__parallax"
                alt="back-parallax"
                ref="parallax-bg'"
                v-lazy="require(`@/assets/img/chapter-12/back-parallax.png`)"
                >        
                <img class="b--ss-a__bg-items__back" @load="handleLoad"  @error="handleLoad" :src="require(`@/assets/img/chapter-12/back.png`)" alt="back">        
            </div>
        </div>
    </section>
</template>

<script>
import CardF from '@/components/cards/CardF';
import InfoChapter from '@/components/infochapter/Infochapter';

import Parallax from '@/mixins/Parallax.js';
import Animation from '@/mixins/Animation.js';

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
        handleLoad(){
            this.contentLoaded++;
        },
        AsambleParallaxObjs() {
      var motion = [
        { obj: this.$refs['parallax-bg'], intensity: 1 },
        { obj: this.$refs['parallax-ft'], intensity: 55 },
        { obj: this.$refs['infoChapter'], intensity: 55 },
        { obj: this.$refs['boxContent'], intensity: 55 },
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene13'].offsetWidth,
          containerAnimation: this.scrollTween,
          scrub: true,
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
                    scrub:0,
                    scrollTween : this.scrollTween
                })
            } 
        }
    },
    created() {
        // if(process.client){
            this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
            var chapter = this.getLanguageData({lang : this.lang});
            this.chapter =  chapter.ChapterTwelve;
            this.contentLoaded++
        // }
    }
}
</script>

