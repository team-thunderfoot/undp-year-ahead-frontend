<template>
  <section
    class="b--page-a__item b--chapter5-a"
    id="Scene5"
    ref="Scene5"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__ft-items">
        <img
          class="b--ss-a__ft-items__parallax"
          ref="parallax-ft"
          :style="{ left: '35%' }"
          v-lazy="require(`@/assets/img/chapter-5/front-parallax.png`)"
        />
      </div>
      <div class="b--ss-a__content">
        <!-- chapter title -->
        <div
          class="b--chapter5-a__content"
          :class="'b--chapter5-a__content--' + `${this.lang}`"
          :style="{ left: '40%' }"
          ref="boxContent"
        >
          <v-card-f
            :title="chapter.title"
            :description="chapter.description"
            :customClass="'b--card-f--third b--card-f--' + `${this.lang}`"
            cardACustomClass="b--card-a--second"
          />
        </div>
        <!-- info chart -->
        <div
          class="b--chapter5-a__content b--chapter5-a__content--second"
          ref="infochapter"
          :style="{ left: '65%' }"
        >
          <v-info-chapter :info="chapter" />
        </div>
        <!-- women -->
        <div class="b--chapter5-a__media" ref="woman" :style="{ left: '77%' }">
          <img
            v-lazy="require(`@/assets/img/chapter-5/women.svg`)"
            alt="women"
          />
        </div>
        <!-- first blink animation -->
        <div class="b--chapter5-a__artwork" ref="eyes1" :style="{ left: '82.5%' }">
          <div
            class="b--motion-d"
            v-lazy:background-image="
              require(`@/assets/img/chapter-5/blink-1A_spritesheet.png`)
            "
          ></div>
        </div>
        <!-- second blink animation -->
        <div class="b--chapter5-a__artwork b--chapter5-a__artwork--second" ref="eyes2" :style="{ left: '112.6%' }">
          <div
            class="b--motion-p"
            v-lazy:background-image="
              require(`@/assets/img/chapter-5/Blink-1B_spritesheet.png`)
            "
          ></div>
        </div>
      </div>
      <div class="b--ss-a__bg-items">
        <img
          class="b--ss-a__bg-items__parallax"
          :style="{ left: '4%' }"
          ref="parallax-bg"
          v-lazy="require(`@/assets/img/chapter-5/back-parallax.png`)"
          alt=""
        />
        <img
          class="b--ss-a__bg-items__back"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-5/back.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import CardF from '@/components/cards/CardF'
import InfoChapter from '@/components/infochapter/Infochapter'

import Vue from 'vue'
import Parallax from '@/mixins/Parallax.js'
import Animation from '@/mixins/Animation.js'
Vue.use(Parallax)
Vue.use(Animation)

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
    async getContent() {
      this.lang = this.$route.name == 'index' ? 'en' : this.$route.name
      const query_content = groq`*[_type == "chapterFive"][0]{
                "title" : title['${this.lang}'],
                "description" : description['${this.lang}'],

                "tooltip_label" : tooltip_label['${this.lang}'],
                "tooltip_link" : tooltip_link['${this.lang}'],
                "tooltip_date" : tooltip_date['${this.lang}']
            }`
      this.chapter = await this.$sanity.fetch(query_content)
      this.contentLoaded++
    },
    handleLoad() {
      this.contentLoaded++
    },
    AsambleParallaxObjs() {
      var motion = [
        { obj: this.$refs['parallax-bg'], intensity: 6 },
        { obj: this.$refs['parallax-ft'], intensity: 17 },
        { obj: this.$refs['infochapter'], intensity: 17 },
        { obj: this.$refs['boxContent'], intensity: 17 },
        { obj: this.$refs['woman'], intensity: 17 },
        { obj: this.$refs['eyes1'], intensity: 17 },
        { obj: this.$refs['eyes2'], intensity: 17 },

        // {obj:this.$refs['boxContent'], intensity:11},
        // {obj:this.$refs['quoteContent'], intensity:4},
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene5'].offsetWidth,
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
        // motion frontend and backend elements
        this.AsambleParallaxObjs()
        // mixin function
        this.startAnimation({
          sceneID: 5,
          scrub: 0,
          scrollTween: this.scrollTween,
        })
      }
    },
  },
  created() {
    if (process.client) {
      this.getContent()
    }
  },
}
</script>

