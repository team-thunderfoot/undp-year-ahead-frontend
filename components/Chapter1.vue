<template>
  <section
    class="b--page-a__item b--chapter1-a"
    id="Scene1"
    ref="Scene1"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__ft-items">
        <img src="@/assets/img/chapter-1/front-parallax.png" alt="front" ref="parallax-ft" @load="handleLoad"
          @error="handleLoad" />
      </div>
      <div class="b--ss-a__content">
        <!-- Intro Story -->
        <!-- first div   position element -->
        <div
          class="b--chapter1-a__content"
          :class="'b--chapter1-a__content--' + `${this.lang}`"
        >
          <div class="b--intro-a" :class="`b--intro-a--${this.lang}`"   ref="intro" > 
            <div class="b--intro-a__artwork"></div>
            <div class="b--intro-a__wrapper">
              <h1 class="b--intro-a__wrapper__title">
                {{ chapter.intro_title }}
                <span class="b--intro-a__wrapper__title__badge">{{
                  chapter.intro_date
                }}</span>
              </h1>
              <h2 class="b--intro-a__wrapper__subtitle" v-html="chapter.intro_description"></h2>
            </div>
          </div>
        </div>
        <!-- Intro Story -->

        <div class="b--chapter1-a__content b--chapter1-a__content--second" ref="boxContent" >
            <div class="b--card-a" ref="CardA">
              <div class="b--card-a__artwork"></div>
              <div class="b--card-a__wrapper b--content-a">
                <div v-html="chapter.content"></div>
              </div>
            </div>
        </div>

        <div
          class="b--chapter1-a__artwork b--chapter1-a__artwork--second"
          ref="frameTv"
        >
          <div class="b--card-b">
            <div class="b--card-b__artwork"></div>
            <div class="b--card-b__wrapper">
              <video class="b--video-a" autoplay muted loop playsinline >
                <source src="@/assets/video/chapter-1/frame.mp4" type="video/mp4"  >
              </video>
            </div>
          </div>
        </div>

        <div
          class="b--chapter1-a__artwork b--chapter1-a__artwork--third"
          ref="browser"
        > 
          <div class="b--video-b">
            <video class="b--video-b__media" autoplay muted loop playsinline>
              <source src="@/assets/video/chapter-1/browser.mp4" type="video/mp4">
            </video>
            <div class="b--video-b__wrapper">
              <img
                @load="handleLoad"
                @error="handleLoad"
                class="b--video-b__wrapper__artwork"
                src="@/assets/img/chapter-1/browser-bar.svg"
                alt="browser bar"
                title="browser bar"
              />
            </div>
          </div>
        </div>

        <div class="b--chapter1-a__artwork b--chapter1-a__artwork--fourth">
          <div class="b--card-c">
            <div class="b--card-c__bd">
              <div class="b--card-c__bd__artwork"></div>
              <div class="b--card-c__bd__media-wrapper">
                <video class="b--video-a" autoplay muted loop playsinline>
                  <source src="@/assets/video/chapter-1/tv_1.mov" type="video/mp4">
                </video>
              </div>
            </div>
            <div class="b--card-c__ft">
              <img
                @load="handleLoad"
                @error="handleLoad"
                class="b--card-c__ft__media"
                src="@/assets/img/chapter-1/tv-set.png"
                alt="tvset"
                title="tvset"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="b--ss-a__bg-items">
        <img
          id="Scene1Image"
          class="b--ss-a__bg-items__back"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-1/back.png"
          alt="back"
        />
        <img
          @load="handleLoad"
          @error="handleLoad"
          class="b--ss-a__bg-items__parallax"
          src="@/assets/img/chapter-1/back-parallax.png"
          alt="back parallax"
          ref="parallax-bg"
        />
      </div>
    </div>
  </section>
</template>

<script>
// Data import
import Parallax from '@/mixins/Parallax.js'
import Animation from '@/mixins/Animation.js'

export default {
  mixins: [Parallax, Animation],
  data: () => {
    return {
      totalContent: 6,
      contentLoaded: 0,
      chapter: null,
      infoWindowStatus: true,
    }
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
        { obj: this.$refs['intro'], intensity: 21 },
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene1'].offsetWidth,
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
        // this.AsambleParallaxObjs()
				// mixin function
				// this.startAnimation({
				//   sceneID: 1,
				//   scrollTween: this.scrollTween,
        // })
			}
		},
	},
	created() {
    this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
    var chapter = this.getLanguageData({lang : this.lang});
    this.chapter = chapter.ChapterOne;
    this.contentLoaded++;
  },
}
</script>

