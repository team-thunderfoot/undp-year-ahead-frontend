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
            :title="chapter.intro_title"
            :description="chapter.intro_description"
            :customClass="'b--card-f--third b--card-f--' + `${this.lang}`"
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
          alt="back"
          :src="require(`@/assets/img/chapter-6/back.png`)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardF from '@/components/cards/CardF'
import QuoteA from '@/components/quote/Quote'

import Animation from '@/mixins/Animation.js'

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
    this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
    var chapter = this.getLanguageData({lang : this.lang});
    this.chapter =  chapter.ChapterSix;
    this.contentLoaded++
  },
}
</script>

