<template>
  <section
    class="b--page-a__item b--chapter7-a"
    id="Scene7"
    ref="Scene7"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__ft-items">
        <img
          :style="{ left: '28%' }"
          ref="parallax-ft"
          class="b--ss-a__ft-items__parallax"
          src="@/assets/img/chapter-7/front-parallax.png"
        />
      </div>
      <div class="b--ss-a__content">
        <div 
          class="b--chapter7-a__content"
          :class="'b--chapter7-a__content--' + `${this.lang}`"
        >
          <v-card-f
            :title="chapter.title"
            :description="chapter.description"
            :customClass="'b--card-f--second b--card-f--' + `${this.lang}`"
            cardACustomClass="b--card-a--second"
          />
        </div>
        <div class="b--chapter7-a__content b--chapter7-a__content--second">
          <v-card-h :content="chapter.document_left" />
        </div>
        <div class="b--chapter7-a__content b--chapter7-a__content--third">
          <v-card-h :content="chapter.document_right" />
        </div>
      </div>
      <div class="b--ss-a__bg-items">
        <img
          :style="{ left: '25%' }"
          ref="parallax-bg"
          class="b--ss-a__bg-items__parallax"
          src="@/assets/img/chapter-7/back-parallax.png"
          alt=""
        />
        <img
          class="b--ss-a__bg-items__back"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-7/back.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import CardF from '@/components/cards/CardF'
import CardH from '@/components/cards/CardH'

// import Parallax from '@/motion/Parallax';
import Vue from 'vue'
import Parallax from '@/mixins/Parallax.js'
import Animation from '@/mixins/Animation.js'
Vue.use(Parallax)
Vue.use(Animation)

export default {
  mixins: [Parallax, Animation],
  components: {
    'v-card-f': CardF,
    'v-card-h': CardH,
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
      const query_content = groq`*[_type == "chapterSeven"][0]{
                "title" : title['${this.lang}'],
                "description" : description['${this.lang}'],
                
                "document_left" : document_left['${this.lang}'],
                "document_right" : document_right['${this.lang}'],
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
       
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene7'].offsetWidth,
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
        this.AsambleParallaxObjs();

        this.startAnimation({
          sceneID: 7,
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

