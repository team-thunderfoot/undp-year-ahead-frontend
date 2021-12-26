<template>
  <section
    class="b--page-a__item b--chapter1-a"
    id="Scene1"
    ref="Scene1"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__ft-items">
        <img v-lazy="require(`@/assets/img/chapter-1/front.png`)" alt="front" ref="parallax-1-ft" />
      </div>
      <div class="b--ss-a__content">
        <!-- Intro Story -->
        <!-- first div position element -->
        <div
          class="b--chapter1-a__content"
          :class="'b--chapter1-a__content--' + `${this.lang}`"
        >
          <div class="b--intro-a" :class="`b--intro-a--${this.lang}`">
            <div class="b--intro-a__artwork"></div>
            <div class="b--intro-a__wrapper">
              <h1 class="b--intro-a__wrapper__title">
                {{ chapter.intro_title }}
                <span class="b--intro-a__wrapper__title__badge">{{
                  chapter.intro_date
                }}</span>
              </h1>
              <h2 class="b--intro-a__wrapper__subtitle">
                {{ chapter.intro_description }}
              </h2>
            </div>
          </div>
        </div>
        <!-- Intro Story -->

        <div class="b--chapter1-a__content b--chapter1-a__content--second">
			<div class="b--card-a">
				<div class="b--card-a__artwork"></div>
				<div class="b--card-a__wrapper b--content-a">
				<vuescroll>
					<div v-html="chapter.content"></div>
				</vuescroll>
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
              <img
                class="b--card-b__wrapper__media"
                v-lazy="require(`@/assets/img/chapter-1/frame.gif`)"
                alt="frame"
                title="frame"
              />
            </div>
          </div>
        </div>

        <div
          class="b--chapter1-a__artwork b--chapter1-a__artwork--third"
          ref="browser"
        >  
          <img

            v-lazy="require(`@/assets/img/chapter-1/browser.gif`)"
            alt="browser"
            title="browser"
          />
        </div>

        <div class="b--chapter1-a__artwork b--chapter1-a__artwork--fourth">
          <div class="b--card-c">
            <div class="b--card-c__bd">
              <div class="b--card-c__bd__artwork"></div>
              <div class="b--card-c__bd__media-wrapper">
                <img
                  v-lazy="require(`@/assets/img/chapter-1/tv.gif`)"
                  alt="tv"
                  title="tv"
                  class="b--card-c__bd__media-wrapper__media"
                />
              </div>
            </div>
            <div class="b--card-c__ft">
              <img
                class="b--card-c__ft__media"
                v-lazy="require(`@/assets/img/chapter-1/tv-set.png`)"
                alt="tvset"
                title="tvset"
              />
            </div>
          </div>
        </div>

        <div class="b--chapter1-a__artwork b--chapter1-a__artwork--fifth">
          <div
            ref="parallax-1-bubble"
            class="b--motion-a"
            v-lazy:background-image="
              require(`@/assets/img/chapter-1/bubble-motion.png`)
            "
          >
            <!-- bubble -->
          </div>
        </div>

        <!-- content-fourth position -->
        <div class="b--chapter1-a__content b--chapter1-a__content--third">
          <!-- text with bg -->
          <div class="b--card-d">
            <div class="b--card-d__bd">
              <v-quote-a :chapter="chapter" />
            </div>
            <div class="b--card-d__artwork"></div>
          </div>
        </div>
      </div>
      <div class="b--ss-a__bg-items">
        <img
          class="b--ss-a__bg-items__artwork"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-1/back.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
// Data import
import InfoChapter from '@/components/infochapter/Infochapter'
import QuoteA from '@/components/quote/Quote'

import Animation from '@/mixins/Animation.js'
import vuescroll from 'vuescroll';

export default {
  mixins: [Animation],
  data: () => {
    return {
      totalContent: 2,
      contentLoaded: 0,
      chapter: null,
      infoWindowStatus: true,
    }
  },
  props: ['scrollTween'],
  components: {
    'v-info-chapter': InfoChapter,
    'v-quote-a': QuoteA,
    vuescroll,
  },
  methods: {
    handleLoad() {
      	this.contentLoaded++
    },
    animate() {
		this.$nextTick(() => {
			this.startAnimation({
				sceneID: 1,
				scrub: 0,
				scrollTween: this.scrollTween,
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
				// mixin function
				this.startAnimation({
				sceneID: 1,
				scrub: 0,
				scrollTween: this.scrollTween,
				})
			}
		},
	},
	created() {
		this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
		var chapter = this.getLanguageData({lang : this.lang});
		this.chapter = chapter.ChapterOne;
		this.contentLoaded++
  },
}
</script>

