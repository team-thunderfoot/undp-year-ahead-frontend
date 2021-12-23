<template>
  <section
    class="b--page-a__item b--chapter4-a"
    id="Scene4"
    ref="Scene4"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__divider">
        <div class="b--chapter4-a__divider">
          <img
            class="b--chapter4-a__divider__media b--chapter4-a__divider__media--right"
            v-lazy="require(`@/assets/img/chapter-4/front_tree.png`)"
          />
          <img
            class="b--chapter4-a__divider__media b--chapter4-a__divider__media--left"
            v-lazy="require(`@/assets/img/chapter-4/front_electric-cable.png`)"
          />
        </div>
      </div>
      <div class="b--ss-a__ft-items">
        <img
          :style="{ left: '45%' }"
          class="b--ss-a__ft-items__parallax"
          ref="parallax-ft"
          v-lazy="require(`@/assets/img/chapter-4/front-parallax.png`)"
        />
      </div>
      <div class="b--ss-a__content">
        <!-- first position element, card -->
        <div
          class="b--chapter4-a__content"
          ref="boxContent"
          :style="{ left: '55%' }"
          :class="'b--chapter4-a__content--' + `${this.lang}`"
        >
          <v-card-f
            :title="chapter.title"
            :description="chapter.description"
            :customClass="'b--card-f--second b--card-f--' + `${this.lang}`"
          />
        </div>
        <!-- second position element, quote -->
        <div
          class="b--chapter4-a__content b--chapter4-a__content--second"
          ref="quoteContent"
          :style="{ left: '85%' }"
        >
          <v-quote-a :chapter="chapter" customClass="b--quote-a--second" />
        </div>
      </div>

      <div class="b--ss-a__bg-items">
        <img
          :style="{ left: '10%' }"
          class="b--ss-a__bg-items__parallax"
          ref="parallax-bg"
          v-lazy="require(`@/assets/img/chapter-4/back-parallax.png`)"
          alt=""
        />
        <img
          class="b--ss-a__bg-items__back"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-4/back.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import CardF from '@/components/cards/CardF'
import QuoteA from '@/components/quote/Quote'


import Vue from 'vue'
import Parallax from '@/mixins/Parallax.js'
import Animation from '@/mixins/Animation.js'
Vue.use(Parallax)
Vue.use(Animation)

export default {
  mixins: [Parallax, Animation],
  components: {
    'v-card-f': CardF,
    'v-quote-a': QuoteA,
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
      const query_content = groq`*[_type == "chapterFour"][0]{
                "title" : title['${this.lang}'],
                "description" : description['${this.lang}'],

                "quote" :  quote['${this.lang}'],
                "quote_author" :  quote_author['${this.lang}'],
                "quote_author_link" :  quote_author_link['${this.lang}'],
                "quote_author_description" :  quote_author_description['${this.lang}'],
                
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
        { obj: this.$refs['quoteContent'], intensity: 6 },
        { obj: this.$refs['parallax-ft'], intensity: 21 },
        { obj: this.$refs['boxContent'], intensity: 21 },
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene4'].offsetWidth,
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
        // this.animate();
      }
    },
    scrollTween(newValue, oldValue) {
      if (newValue) {
        // motion frontend and backend elements
        this.AsambleParallaxObjs()
        //mixin function
        this.startAnimation({
          sceneID: 4,
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

