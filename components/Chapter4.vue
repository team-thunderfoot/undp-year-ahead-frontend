<template>
  <section
    class="b--page-a__item b--chapter4-a"
    id="Scene5"
    ref="Scene5"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__divider">
        <div class="b--chapter4-a__divider">
          <img
           @load="handleLoad"
          @error="handleLoad"
            class="b--chapter4-a__divider__media b--chapter4-a__divider__media--right"
            alt="front_tree"
            src="@/assets/img/chapter-4/front_tree.png"
          />
          <img
           @load="handleLoad"
          @error="handleLoad"
            class="b--chapter4-a__divider__media b--chapter4-a__divider__media--left"
            alt="front_electric-cable"
            src="@/assets/img/chapter-4/front_electric-cable.png"
          />
        </div>
      </div>
      <div class="b--ss-a__ft-items">
        <img
         @load="handleLoad"
          @error="handleLoad"
          :style="{ left: '95%' }"
          class="b--ss-a__ft-items__parallax"
          ref="parallax-ft"
          alt="ront-parallax"
          src="@/assets/img/chapter-4/front-parallax.png"
        />
      </div>
      <div class="b--ss-a__content">
        <!-- first position element, card -->
        <div
          class="b--chapter4-a__content"
          ref="boxContent"
          :style="{ left: '95%' }"
          :class="'b--chapter4-a__content--' + `${this.lang}`"
        >
          <v-card-f
            :title="chapter.intro_title"
            :description="chapter.intro_description"
            :customClass="'b--card-f--second b--card-f--' + `${this.lang}`"
          />
        </div>
        <!-- second position element, quote -->
        <div
          class="b--chapter4-a__content b--chapter4-a__content--second"
          ref="quoteContent"
          :style="{ left: '75%' }"
        >
          <v-quote-a :chapter="chapter" customClass="b--quote-a--second" />
        </div>
      </div>

      <div class="b--ss-a__bg-items">
        <img
           @load="handleLoad"
          @error="handleLoad"
          class="b--ss-a__bg-items__parallax"
          ref="parallax-bg"
          src="@/assets/img/chapter-4/back-parallax.png"
          alt="back parallax"
        />
        <img
          class="b--ss-a__bg-items__back"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-4/back.png"
          alt="back"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardF from '@/components/cards/CardF'
import QuoteA from '@/components/quote/Quote'

import Parallax from '@/mixins/Parallax.js'
import Animation from '@/mixins/Animation.js'

export default {
  mixins: [Parallax, Animation],
  components: {
    'v-card-f': CardF,
    'v-quote-a': QuoteA,
  },
  data: () => {
    return {
      totalContent: 6,
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
        { obj: this.$refs['parallax-bg'], intensity: 1},
        { obj: this.$refs['quoteContent'], intensity: 1 },
        { obj: this.$refs['parallax-ft'], intensity: 40 },
        { obj: this.$refs['boxContent'], intensity: 40 },
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene5'].offsetWidth,
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
        // motion frontend and backend elements
        this.AsambleParallaxObjs()
        //mixin function
        this.startAnimation({
          sceneID: 5,
          scrub: 0,
          scrollTween: this.scrollTween,
        })
      }
    },
  },
  created() {
    // if(process.client){
      this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
      var chapter = this.getLanguageData({lang : this.lang});
      this.chapter =  chapter.ChapterFour;
      this.contentLoaded++;
    // }
  }
}
</script>

