<template>
  <section
    class="b--page-a__item b--chapter2-a"
    id="Scene2"
    ref="Scene2"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__ft-items">
        <img
          @load="handleLoad"
          @error="handleLoad"
          :style="{ left: '17%' }"
          class="b--ss-a__ft-items__parallax"
          ref="parallax-ft"
          src="@/assets/img/chapter-2/front-parallax.png"
          alt="front-parallax"
        />
      </div>
      <div class="b--ss-a__content">
        <!-- content-fourth position -->
        <div class="b--chapter2-a__content">
          <!-- text with bg -->
          <div class="b--card-e">
            <h4 class="b--card-e__title">{{ chapter.quote_system }}</h4>
          </div>
          <div class="b--card-d">
            <div class="b--card-d__bd">
              <v-quote-a :chapter="chapter" />
            </div>
            <div class="b--card-d__artwork"></div>
          </div>
        </div>

        <div class="b--chapter2-a__artwork">
          <div
            ref="bubble"
            class="b--motion-a"
            :style="'background-image: url(' + require(`@/assets/img/chapter-1/bubble-motion.png`) + ')'"
            
          >
            <!-- bubble -->
          </div>
        </div>

      </div>
      <div class="b--ss-a__bg-items">
        <img
          @load="handleLoad"
          @error="handleLoad"
          class="b--ss-a__bg-items__parallax"
          :style="{ left: '-6%' }"
          ref="parallax-bg"
          src="@/assets/img/chapter-2/back-parallax.png"
          alt="back parallax"
        />
        <img
         id="Scene3Image"
          class="b--ss-a__bg-items__back"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-2/back.png"
          alt="back"
        />
      </div>
    </div>
  </section>
</template>

<script>
import QuoteA from '@/components/quote/Quote'

import Parallax from '@/mixins/Parallax.js'
import Animation from '@/mixins/Animation.js'

export default {
  mixins: [Parallax, Animation],
  data: () => {
    return {
      totalContent: 4,
      contentLoaded: 0,
      chapter: null,
    }
  },
  components: {
    'v-quote-a': QuoteA,
  },
  props: ['scrollTween'],
  methods: {
    handleLoad() {
      this.contentLoaded++
    },
    AsambleParallaxObjs() {
      var motion = [
        { obj: this.$refs['parallax-bg'], intensity: 2 },
        { obj: this.$refs['parallax-ft'], intensity: 21 },
        { obj: this.$refs['boxContent'], intensity: 21 },
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene2'].offsetWidth,
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

        this.startAnimation({
          sceneID: 3,
          scrub: 0,
          scrollTween: this.scrollTween,
        })
      }
    },
  },
  created() {
    this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
    var chapter = this.getLanguageData({lang : this.lang});
    this.chapter =  chapter.ChapterTwo;
    this.contentLoaded++;
  },
}
</script>