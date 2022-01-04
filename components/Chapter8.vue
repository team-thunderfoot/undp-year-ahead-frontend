<template>
  <section
    class="b--page-a__item b--chapter8-a"
    id="Scene8"
    ref="Scene8"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__ft-items">
        <img
          @load="handleLoad"
          @error="handleLoad"
          :style="{ left: '68%' }"
          ref="parallax-ft"
          class="b--ss-a__ft-items__parallax"
          alt="front-parallax"
          src="@/assets/img/chapter-8/front-parallax.png"
        />
      </div>
      <div class="b--ss-a__content">
        <div 
          
          class="b--chapter8-a__content"
          :class="'b--chapter8-a__content--' + `${this.lang}`"
          ref="boxContent" :style="{ left: '88%' }"
        >
          <v-card-f
            :title="chapter.intro_title"
            :description="chapter.intro_description"
            :customClass="'b--card-f--second b--card-f--' + `${this.lang}`"
            cardACustomClass="b--card-a--second"
          />
        </div>
        <div class="b--chapter8-a__content b--chapter8-a__content--second" ref="documentLeft" :style="{ left: '68%' }">
          <v-card-h 
            :content="chapter.document_left"
            :class="'b--card-h--' + `${this.lang}`" 
            />
        </div>
        <div class="b--chapter8-a__content b--chapter8-a__content--third" ref="documentRight" :style="{ left: '80%' }">
          <v-card-h 
            :content="chapter.document_right"
            :class="'b--card-h--' + `${this.lang}`"  
          />
        </div>
      </div>
      <div class="b--ss-a__bg-items">
        <img
          @load="handleLoad"
          @error="handleLoad"
          :style="{ left: '2%' }"
          ref="parallax-bg"
          class="b--ss-a__bg-items__parallax"
          src="@/assets/img/chapter-8/back-parallax.png"
          alt="back parallax"
        />
        <img

          id="Scene8Image"
          class="b--ss-a__bg-items__back"
          @load="handleLoad"
          @error="handleLoad"
          alt="back"
          src="@/assets/img/chapter-8/back.png"
        />
      </div>
    </div>
  </section>
</template>

<script>

import Parallax from '@/mixins/Parallax.js'
import Animation from '@/mixins/Animation.js'

export default {
  mixins: [Parallax, Animation],
  components: {
    'v-card-f': () => import(/* webpackChunkName: "CardF" */ "@/components/cards/CardF"),
    'v-card-h': () => import(/* webpackChunkName: "CardH" */ "@/components/cards/CardH"),
  },
  data: () => {
    return {
      totalContent: 4,
      contentLoaded: 0,
      chapter: null,
    }
  },
  props: ['scrollTween'],
  methods: {
    handleLoad() {
      this.contentLoaded++
    },
    AsambleParallaxObjs() {
      var motion = [
        { obj: this.$refs['parallax-bg'], intensity: 4 },
        { obj: this.$refs['documentLeft'], intensity: 4 },
        { obj: this.$refs['documentRight'], intensity: 4 },
        { obj: this.$refs['parallax-ft'], intensity: 21 },
        { obj: this.$refs['boxContent'], intensity: 21 },
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene8'].offsetWidth,
          containerAnimation: this.scrollTween,
        })
      })
    },
  },
  watch: {
    contentLoaded(newValue, oldValue) {
      if (newValue == this.totalContent) {
        // emits on in Story.vue
        $nuxt.$emit('assetLoaded')
      }
    },
    scrollTween(newValue, oldValue) {
      if (newValue) {
    
        this.AsambleParallaxObjs();

        this.startAnimation({
            sceneID: 8,
            scrollTween: this.scrollTween,
        })

      }
    },
  },
  created() {
    this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
    var chapter = this.getLanguageData({lang : this.lang});
    this.chapter =  chapter.ChapterEight;
    this.contentLoaded++;
  }
}
</script>

