<template>
  <section
    class="b--page-a__item b--chapter2-a"
    id="Scene3"
    ref="Scene3"
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
        <div
          class="b--chapter2-a__content"
          :class="'b--chapter2-a__content--' + `${this.lang}`"
          ref="boxContent"
          :style="{ left: '20%' }"
        >
          <v-card-f
            :title="chapter.intro_title"
            :description="chapter.intro_description"
            :customClass="'b--card-f--second b--card-f--' + `${this.lang}`"
          />
        </div>
        <div
          class="b--chapter2-a__content b--chapter2-a__content--second"
          :style="{ left: '47%' }"
          ref="TVfrankie"
        >
          <div class="b--card-g" :class="'b--card-g--' + `${this.lang}`">
            <div class="b--card-g__media-wrapper">
              <video class="b--video-a" autoplay muted loop playsinline>
                <source :src="require(`@/assets/video/chapter-2/dino2.mov`)" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
        <div
          class="b--chapter2-a__artwork"
          :style="{ left: '42%' }"
          ref="dino1"
        >
          <img
            @load="handleLoad"
            @error="handleLoad"
            src="@/assets/img/chapter-2/dino-orange.png"
            alt="browser"
            title="browser"
          />
        </div>
        <div
          class="b--chapter2-a__artwork b--chapter2-a__artwork--second"
          :style="{ left: '72%' }"
          ref="dino2"
        >
          <img
            @load="handleLoad"
            @error="handleLoad"
            src="@/assets/img/chapter-2/dino-green.png"
            alt="browser"
            title="browser"
          />
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
import CardF from './cards/CardF'

import Parallax from '@/mixins/Parallax.js'
import Animation from '@/mixins/Animation.js'

export default {
  mixins: [Parallax, Animation],
  data: () => {
    return {
      totalContent: 6,
      contentLoaded: 0,
      chapter: null,
    }
  },
  components: {
    'v-card-f': CardF,
  },
  props: ['scrollTween'],
  methods: {
    handleLoad() {
      this.contentLoaded++
    },
    AsambleParallaxObjs() {
      var motion = [
        { obj: this.$refs['parallax-bg'], intensity: 2 },
        { obj: this.$refs['dino1'], intensity: 2 },
        { obj: this.$refs['dino2'], intensity: 2 },
        { obj: this.$refs['TVfrankie'], intensity: 2 },
        { obj: this.$refs['parallax-ft'], intensity: 16 },
        { obj: this.$refs['boxContent'], intensity: 16 },
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene3'].offsetWidth,
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
    // if(process.client){
      this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
      var chapter = this.getLanguageData({lang : this.lang});
      this.chapter =  chapter.ChapterTwo;
      this.contentLoaded++
    // }
  },
}
</script>