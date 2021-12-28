<template>
  <section
    class="b--page-a__item b--chapter10-a"
    id="Scene10"
    ref="Scene10"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__divider">
        <div class="b--chapter10-a__divider">
          <img
            class="
              b--chapter10-a__divider__media
              b--chapter10-a__divider__media--left
            "
            v-lazy="require(`@/assets/img/chapter-10/front_rock.png`)"
          />
          <!-- <img
            class="b--chapter10-a__divider__media b--chapter10-a__divider__media--right"
            v-lazy="require(`@/assets/img/chapter-10/10-11_rock-stairs.png`)"
          /> -->
        </div>
      </div>
      <div class="b--ss-a__ft-items">
        <img
          class="b--ss-a__ft-items__parallax"
          ref="parallax-ft"
          :style="{ left: '253%' }"
          alt="front-parallax"
          v-lazy="require(`@/assets/img/chapter-10/front-parallax.png`)"
        />
        <img
          class="b--ss-a__ft-items__media"
          alt="front"
          v-lazy="require(`@/assets/img/chapter-10/front-elements.png`)"
        />
      </div>
      <!-- animation out of content, fisherman and plant needs more z-index than ft-items and ft-items needs more z-index than content -->
      <div class="b--chapter10-a__artwork" ref="fisherman"  :style="{ left: '291%' }">
        <div
          class="b--motion-f"
          v-lazy:background-image="
            require(`@/assets/img/chapter-10/fisherman_spritesheet.png`)
          "
        ></div>
      </div>
      <div class="b--chapter10-a__artwork b--chapter10-a__artwork--second">
        <div
          class="b--motion-g"
          v-lazy:background-image="
            require(`@/assets/img/chapter-10/plant_wind_2.png`)
          "
        ></div>
      </div>
      <div class="b--ss-a__content">
        <!-- chapter title -->
        <div
          class="b--chapter10-a__content"
          :class="'b--chapter10-a__content--' + `${this.lang}`"
          ref="boxContent"  :style="{ left: '248%' }"
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
          class="b--ss-a__bg-items__parallax"
          ref="parallax-bg"
          :style="{ left: '14%' }"
          v-lazy="require(`@/assets/img/chapter-10/back-parallax.png`)"
          alt="back parallax"
        />
        <img
          class="b--ss-a__bg-items__back"
          @load="handleLoad"
          @error="handleLoad"
          alt="back"
          src="@/assets/img/chapter-10/back.png"
        />
        <img
            class="b--ss-a__bg-items__media"
          v-lazy="require(`@/assets/img/chapter-10/front.png`)"
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
        { obj: this.$refs['parallax-ft'], intensity: 35 },
        { obj: this.$refs['parallax-ft'], intensity: 35 },
        { obj: this.$refs['fisherman'], intensity: 35 },
        { obj: this.$refs['boxContent'], intensity: 35 },
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene10'].offsetWidth,
          containerAnimation: this.scrollTween,
          scrub: true,
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
          sceneID: 10,
          scrub: 0,
          scrollTween: this.scrollTween,
        })
      }
    },
  },
  created() {
    this.lang = this.$route.name == 'index' ? 'en' : this.$route.name
    var chapter = this.getLanguageData({ lang: this.lang })
    this.chapter = chapter.ChapterTen
    this.contentLoaded++
  },
}
</script>

