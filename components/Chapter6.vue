<template>
  <section
    class="b--page-a__item b--chapter6-a"
    id="Scene6"
    ref="Scene6"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__ft-items">
        <img v-lazy="require(`@/assets/img/chapter-6/front.png`)" alt="front" />
      </div>
      <div class="b--ss-a__content">
        <!-- first position element, card -->
        <div 
          class="b--chapter6-a__content"
          :class="'b--chapter6-a__content--' + `${this.lang}`"
          >
          <v-card-f
            :title="chapter.title"
            :description="chapter.description"
            :customClass="'b--card-f--third b--card-f--' + `${this.lang}`"
            cardACustomClass="b--card-a--second"
          />
        </div>
        <!-- second position element, wheel -->
        <div class="b--chapter6-a__content b--chapter6-a__content--second">
          <img
            class="b--chapter6-a__content--second__media"
            v-lazy="require(`@/assets/img/chapter-6/wheel.png`)"
            alt="wheel"
            title="wheel"
          />
        </div>
        <!-- third position element, quote -->
        <div class="b--chapter6-a__content b--chapter6-a__content--third">
          <v-quote-a :chapter="chapter" customClass="b--quote-a--second" />
        </div>
      </div>
      <div class="b--ss-a__bg-items">
        <img
          class="b--ss-a__bg-items__artwork"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-6/back.png"
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
import Animation from '@/mixins/Animation.js'
Vue.use(Animation)

export default {
  mixins: [Animation],
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
      const query_content = groq`*[_type == "chapterSix"][0]{
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
        this.startAnimation({
          sceneID: 6,
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

