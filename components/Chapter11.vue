<template>
  <section
    class="b--page-a__item b--chapter11-a"
    id="Scene11"
    ref="Scene11"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__divider">
        <div class="b--chapter11-a__divider">
          <img
          @load="handleLoad"
          @error="handleLoad"
            class="
              b--chapter11-a__divider__media
              b--chapter11-a__divider__media--left
            "
            src="@/assets/img/chapter-11/front_rock.png"
            alt="front_rock"
          />
        </div>
      </div>
      <div class="b--ss-a__ft-items">
        <img
          @load="handleLoad"
          @error="handleLoad"
          class="b--ss-a__ft-items__parallax"
          ref="parallax-ft"
          :style="{ left: '253%' }"
          alt="front-parallax"
          src="@/assets/img/chapter-11/front-parallax.png"
        />
        <img
          @load="handleLoad"
          @error="handleLoad"
          class="b--ss-a__ft-items__media"
          alt="front"
          src="@/assets/img/chapter-11/front-elements.png"
        />
      </div>
      <!-- animation out of content, fisherman and plant needs more z-index than ft-items and ft-items needs more z-index than content -->
      <div class="b--chapter11-a__artwork" ref="fisherman"  :style="{ left: '291%' }">
        <div
          class="b--motion-f"
           :style="'background-image: url(' + require(`@/assets/img/chapter-11/fisherman_spritesheet.png`) + ')'"
        ></div>
      </div>
      <!-- animation plants wind -->
      <div class="b--chapter11-a__artwork b--chapter11-a__artwork--second">
        <div
          class="b--motion-g"
          :style="'background-image: url(' + require(`@/assets/img/chapter-11/plant_wind_2.png`) + ')'"
        ></div>
      </div>
      <!-- animation boat -->
      <div class="b--chapter11-a__artwork b--chapter11-a__artwork--third" ref="boat" :style="{ left: '271%' }">
        <div
          class="b--motion-s"
           :style="'background-image: url(' + require(`@/assets/img/chapter-11/waves_boat.png`) + ')'"
        ></div>
      </div>
      <!-- animation fish 3 -->
      <div class="b--chapter11-a__artwork b--chapter11-a__artwork--fourth" ref="fish1" :style="{ left: '308%' }">
        <div
          class="b--motion-t"
           :style="'background-image: url(' + require(`@/assets/img/chapter-11/fish_3.png`) + ')'"
        ></div>
      </div>
      <!-- animation fish 4 -->
      <div class="b--chapter11-a__artwork b--chapter11-a__artwork--fifth" ref="fish2" :style="{ left: '277%' }">
        <div
          class="b--motion-u"
          :style="'background-image: url(' + require(`@/assets/img/chapter-11/fish_4.png`) + ')'"
        ></div>
      </div>
      <div class="b--ss-a__content">
        <!-- chapter title -->
        <div
          class="b--chapter11-a__content"
          :class="'b--chapter11-a__content--' + `${this.lang}`"
          ref="boxContent"  :style="{ left: '246%' }"
        >
          <v-card-f
            :title="chapter.intro_title"
            :description="chapter.intro_description"
            :customClass="'b--card-f--fourth b--card-f--' + `${this.lang}`"
            :loadMoreBtn="chapter.load_more_button"
            :loadMoreURL="chapter.load_more_url"
            :loadMore="true"
          />
        </div>
      </div>
      <div class="b--ss-a__bg-items">
        <img
          @load="handleLoad"
          @error="handleLoad"
          class="b--ss-a__bg-items__parallax"
          ref="parallax-bg"
          :style="{ left: '14%' }"
          src="@/assets/img/chapter-11/back-parallax.png"
          alt="back parallax"
        />
        <img
          class="b--ss-a__bg-items__back"
          @load="handleLoad"
          @error="handleLoad"
          alt="back"
          src="@/assets/img/chapter-11/back.png"
        />
        <img
          @load="handleLoad"
          @error="handleLoad"
          class="b--ss-a__bg-items__media"
          src="@/assets/img/chapter-11/front.png"
          alt="front"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardF from '@/components/cards/CardF'

import Parallax from '@/mixins/Parallax.js'
import Animation from '@/mixins/Animation.js'

export default {
  mixins: [Parallax, Animation],
  components: {
    'v-card-f': CardF,
  },
  data: () => {
    return {
      totalContent: 7,
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
        { obj: this.$refs['parallax-bg'], intensity: 1 },
        { obj: this.$refs['parallax-ft'], intensity: 35 },
        { obj: this.$refs['parallax-ft'], intensity: 35 },
        { obj: this.$refs['fisherman'], intensity: 35 },
        { obj: this.$refs['boat'], intensity: 35 },
        { obj: this.$refs['fish1'], intensity: 35 },
        { obj: this.$refs['fish2'], intensity: 35 },
        { obj: this.$refs['boxContent'], intensity: 35 },
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene11'].offsetWidth,
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
        //motion frontend and backend elements
        this.AsambleParallaxObjs()
        // mixin function
        this.startAnimation({
          sceneID: 11,
          scrollTween: this.scrollTween,
        })
      }
    },
  },
  created() {
    this.lang = this.$route.name == 'index' ? 'en' : this.$route.name
    var chapter = this.getLanguageData({ lang: this.lang })
    this.chapter = chapter.ChapterEleven;
    this.contentLoaded++;
  },
}
</script>

