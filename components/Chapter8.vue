<template>
  <section
    class="b--page-a__item b--chapter8-a"
    id="Scene8"
    ref="Scene8"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__divider">
        <div class="b--chapter8-a__divider">
          <img
            class="b--chapter8-a__divider__media b--chapter8-a__divider__media--right"
            v-lazy="require(`@/assets/img/chapter-8/front_tree.png`)"
          />
        </div>
      </div>
      <div class="b--ss-a__ft-items">
        <img
          class="b--ss-a__ft-items__parallax"
          ref="parallax-ft"
          alt="front-parallax"
          v-lazy="require(`@/assets/img/chapter-8/front-parallax.png`)"
          :style="{ left: '190%' }"
        />
        <img
          class="
            b--ss-a__ft-items__parallax b--ss-a__ft-items__parallax--middle
          "
          ref="parallax-middle"
          alt="middle-parallax"
          v-lazy="require(`@/assets/img/chapter-8/middle-parallax.png`)"
          :style="{ left: '123%' }"
        />
      </div>
      <div class="b--ss-a__content">
        <!-- chapter title -->
        <div
          class="b--chapter8-a__content"
          :class="'b--chapter8-a__content--' + `${this.lang}`"
          ref="boxContent"
          :style="{ left: '109%' }"
        >
          <v-card-f
            :title="chapter.intro_title"
            :description="chapter.intro_description"
            :customClass="'b--card-f--second b--card-f--' + `${this.lang}`"
          />
        </div>
        <!-- info chart -->
        <div
          class="b--chapter8-a__content b--chapter8-a__content--second"
          ref="infoChapter"
          :style="{ left: '130%' }"
        >
          <v-info-chapter :info="chapter" />
        </div>
        <!-- plant animation -->
        <div
          class="b--chapter8-a__artwork"
          ref="plant"
          :style="{ left: '143%' }"
        >
          <div
            class="b--motion-e"
            v-lazy:background-image="
              require(`@/assets/img/chapter-8/plant_wind_1.png`)
            "
          ></div>
        </div>
        <!-- fishes animation -->
        <div
          class="b--chapter8-a__artwork b--chapter8-a__artwork--second"
          ref="fishes"
          :style="{ left: '160%' }"
        >
          <div
            class="b--motion-r"
            v-lazy:background-image="
              require(`@/assets/img/chapter-8/fishes-spritesheet.png`)
            "
          ></div>
        </div>
      </div>
      <div class="b--ss-a__bg-items">
        <img
          class="b--ss-a__bg-items__back"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-8/back.png"
        />
        <img
          class="b--ss-a__bg-items__parallax"
          ref="parallax-bg"
          v-lazy="require(`@/assets/img/chapter-8/back-parallax.png`)"
          alt="back parallax"
          :style="{ left: '1%' }"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardF from '@/components/cards/CardF'
import InfoChapter from '@/components/infochapter/Infochapter'

import Parallax from '@/mixins/Parallax.js'
import Animation from '@/mixins/Animation.js'

export default {
  mixins: [Parallax, Animation],
  components: {
    'v-card-f': CardF,
    'v-info-chapter': InfoChapter,
  },
  data: () => {
    return {
      totalContent: 2,
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
        { obj: this.$refs['parallax-ft'], intensity: 40 },
        { obj: this.$refs['parallax-middle'], intensity: 21 },
        { obj: this.$refs['boxContent'], intensity: 21 },
        { obj: this.$refs['infoChapter'], intensity: 21 },
        { obj: this.$refs['plant'], intensity: 21 },
        { obj: this.$refs['fishes'], intensity: 21 },
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene8'].offsetWidth,
          containerAnimation: this.scrollTween,
          scrub: 1,
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
          sceneID: 8,
          scrub: 0,
          scrollTween: this.scrollTween,
        })
      }
    },
  },
  created() {
    this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
    var chapter = this.getLanguageData({lang : this.lang});
    this.chapter =  chapter.ChapterEight;
    this.contentLoaded++
  }
}
</script>

