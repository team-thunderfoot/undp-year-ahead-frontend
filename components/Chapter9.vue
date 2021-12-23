<template>
  <section
    class="b--page-a__item b--chapter9-a"
    id="Scene9"
    ref="Scene9"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__ft-items">
        <img
          class="b--ss-a__ft-items__parallax"
          ref="parallax-ft"
          v-lazy="require(`@/assets/img/chapter-9/front-parallax.png`)"
          alt="front"
          :style="{ left: '40%' }"
        />
        <img
          class="b--ss-a__ft-items__parallax"
          v-lazy="require(`@/assets/img/chapter-9/middle-parallax.png`)"
          alt="middle"
          ref="parallax-middle"
          :style="{ left: '79.1%' }"
        />
      </div>
      <div class="b--ss-a__content">
        <!-- first position element, card -->
        <!-- move up from the scss -->
        <div
          class="b--chapter9-a__content"
          :class="'b--chapter9-a__content--' + `${this.lang}`"
          ref="boxContent"
          :style="{ left: '84.1%' }"
        >
          <v-card-f
            :title="chapter.title"
            :description="chapter.description"
            :customClass="'b--card-f--second b--card-f--' + `${this.lang}`"
            cardACustomClass="b--card-a--second"
          />
        </div>
        <!-- second position element, info -->
        <div
          class="b--chapter9-a__info"
          ref="quoteContent"
          :style="{ left: '104.1%' }"
        >
          <v-info-chapter :info="chapter" />
        </div>
      </div>
      <div class="b--ss-a__bg-items">
        <img
          class="b--ss-a__bg-items__back"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-9/back.png"
        />
        <img
          class="b--ss-a__bg-items__parallax"
          ref="parallax-bg"
          v-lazy="require(`@/assets/img/chapter-9/back-parallax.png`)"
          alt="back-parallax"
          :style="{ left: '20%' }"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'
import CardF from '@/components/cards/CardF'
import InfoChapter from '@/components/infochapter/Infochapter'

import Vue from 'vue'
import Parallax from '@/mixins/Parallax.js'
import Animation from '@/mixins/Animation.js'
Vue.use(Parallax)
Vue.use(Animation)

export default {
  mixins: ['infoWindow', Parallax, Animation],
  components: {
    SanityContent,
    'v-card-f': CardF,
    'v-info-chapter': InfoChapter,
  },
  data: () => {
    return {
      totalContent: 2,
      contentLoaded: 0,
      chapter: null,
      infoWindowStatus: true,
    }
  },
  props: ['scrollTween'],
  methods: {
    async getContent() {
      this.lang = this.$route.name == 'index' ? 'en' : this.$route.name
      const query_content = groq`*[_type == "chapterNine"][0]{
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
        { obj: this.$refs['parallax-bg'], intensity: 4 },
        { obj: this.$refs['parallax-ft'], intensity: 11 },
        { obj: this.$refs['parallax-middle'], intensity: 14 },
        { obj: this.$refs['boxContent'], intensity: 11 },
        { obj: this.$refs['quoteContent'], intensity: 11 },
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene9'].offsetWidth,
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
          sceneID: 9,
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

