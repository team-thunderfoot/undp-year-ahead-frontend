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
              <video class="b--video-a" autoplay muted loop playsinline>
                <source src="@/assets/video/chapter-1/frame.mp4" type="video/mp4">
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
            <img
              class="b--video-b__artwork"
              v-lazy="require(`@/assets/img/chapter-1/browser-bar.svg`)"
              alt="browser bar"
              title="browser bar"
            />
            <!-- <svg class="b--video-b__artwork" viewBox="0 0 272 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M271.509 20.2353H0.740234V2.08661C0.740234 1.53424 0.959349 1.0045 1.34946 0.613922C1.73957 0.223338 2.26872 0.00390625 2.82041 0.00390625H269.429C269.98 0.00390625 270.509 0.223338 270.9 0.613922C271.29 1.0045 271.509 1.53424 271.509 2.08661V20.2353Z" fill="white"/>
              <path d="M17.7404 13.3874C17.0945 13.3874 16.4631 13.1956 15.9261 12.8363C15.389 12.477 14.9703 11.9663 14.7232 11.3688C14.476 10.7713 14.4114 10.1139 14.5374 9.4796C14.6634 8.84531 14.9744 8.26267 15.4311 7.80537C15.8879 7.34808 16.4699 7.03665 17.1034 6.91049C17.7369 6.78432 18.3935 6.84907 18.9903 7.09656C19.587 7.34405 20.0971 7.76316 20.4559 8.30088C20.8148 8.8386 21.0064 9.47081 21.0064 10.1175C21.0053 10.9844 20.6609 11.8155 20.0486 12.4284C19.4364 13.0414 18.6063 13.3863 17.7404 13.3874ZM17.7404 7.82655C17.2879 7.82655 16.8456 7.9609 16.4693 8.21264C16.093 8.46437 15.7996 8.82217 15.6264 9.24079C15.4532 9.65942 15.4079 10.12 15.4962 10.5645C15.5845 11.0089 15.8025 11.4171 16.1225 11.7375C16.4425 12.0579 16.8502 12.2761 17.294 12.3645C17.7379 12.4529 18.1981 12.4075 18.6162 12.2341C19.0343 12.0607 19.3916 11.7671 19.6431 11.3903C19.8945 11.0136 20.0286 10.5706 20.0286 10.1175C20.0286 9.50992 19.7876 8.9272 19.3585 8.49756C18.9293 8.06792 18.3473 7.82655 17.7404 7.82655Z" fill="#F99746"/>
              <path d="M40.8792 13.3874C40.2332 13.3874 39.6018 13.1956 39.0647 12.8363C38.5276 12.477 38.1091 11.9663 37.8619 11.3688C37.6147 10.7713 37.55 10.1139 37.676 9.4796C37.802 8.84531 38.1131 8.26267 38.5699 7.80537C39.0266 7.34808 39.6085 7.03665 40.242 6.91049C40.8755 6.78432 41.5323 6.84907 42.129 7.09656C42.7258 7.34405 43.2358 7.76316 43.5947 8.30088C43.9535 8.8386 44.1451 9.47081 44.1451 10.1175C44.144 10.9844 43.7995 11.8155 43.1873 12.4284C42.5751 13.0414 41.745 13.3863 40.8792 13.3874ZM40.8792 7.82655C40.4266 7.82655 39.9842 7.9609 39.6079 8.21264C39.2316 8.46437 38.9384 8.82217 38.7652 9.24079C38.592 9.65942 38.5467 10.12 38.635 10.5645C38.7233 11.0089 38.9411 11.4171 39.2612 11.7375C39.5812 12.0579 39.9889 12.2761 40.4328 12.3645C40.8766 12.4529 41.3367 12.4075 41.7548 12.2341C42.1729 12.0607 42.5303 11.7671 42.7817 11.3903C43.0331 11.0136 43.1674 10.5706 43.1674 10.1175C43.1663 9.51026 42.9249 8.92818 42.496 8.49878C42.0671 8.06938 41.4857 7.82765 40.8792 7.82655Z" fill="#F99746"/>
              <path d="M64.0061 13.3874C63.3602 13.3874 62.7287 13.1956 62.1917 12.8363C61.6546 12.477 61.236 11.9663 60.9889 11.3688C60.7417 10.7713 60.677 10.1139 60.803 9.4796C60.929 8.84531 61.2401 8.26267 61.6968 7.80537C62.1536 7.34808 62.7355 7.03665 63.369 6.91049C64.0025 6.78432 64.6591 6.84907 65.2559 7.09656C65.8526 7.34405 66.3627 7.76316 66.7215 8.30088C67.0804 8.8386 67.272 9.47081 67.272 10.1175C67.2709 10.9844 66.9265 11.8155 66.3142 12.4284C65.702 13.0414 64.872 13.3863 64.0061 13.3874ZM64.0061 7.82655C63.5536 7.82655 63.1112 7.9609 62.7349 8.21264C62.3586 8.46437 62.0652 8.82217 61.892 9.24079C61.7188 9.65942 61.6736 10.12 61.7619 10.5645C61.8502 11.0089 62.0681 11.4171 62.3881 11.7375C62.7081 12.0579 63.1159 12.2761 63.5597 12.3645C64.0036 12.4529 64.4637 12.4075 64.8818 12.2341C65.2999 12.0607 65.6572 11.7671 65.9087 11.3903C66.1601 11.0136 66.2943 10.5706 66.2943 10.1175C66.2932 9.51026 66.0517 8.92818 65.6228 8.49878C65.194 8.06938 64.6127 7.82765 64.0061 7.82655Z" fill="#F99746"/>
            </svg> -->
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
          alt="back"
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

