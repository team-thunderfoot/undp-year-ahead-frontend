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
          v-lazy="require(`@/assets/img/chapter-7/front-parallax.png`)"
        />
      </div>
      <div class="b--ss-a__content">
        <div 
          
          class="b--chapter7-a__content"
          :class="'b--chapter7-a__content--' + `${this.lang}`"
          ref="boxContent" :style="{ left: '50%' }"
        >
          <v-card-f
            :title="chapter.intro_title"
            :description="chapter.intro_description"
            :customClass="'b--card-f--second b--card-f--' + `${this.lang}`"
            cardACustomClass="b--card-a--second"
          />
        </div>
        <div class="b--chapter7-a__content b--chapter7-a__content--second" ref="documentLeft" :style="{ left: '68%' }">
          <v-card-h 
            :content="chapter.document_left"
            :class="'b--card-h--' + `${this.lang}`" 
            />
        </div>
        <div class="b--chapter7-a__content b--chapter7-a__content--third" ref="documentRight" :style="{ left: '80%' }">
          <v-card-h 
            :content="chapter.document_right"
            :class="'b--card-h--' + `${this.lang}`"  
          />
        </div>
      </div>
      <div class="b--ss-a__bg-items">
        <img
          :style="{ left: '2%' }"
          ref="parallax-bg"
          class="b--ss-a__bg-items__parallax"
          v-lazy="require(`@/assets/img/chapter-7/back-parallax.png`)"
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
import CardF from '@/components/cards/CardF'
import CardH from '@/components/cards/CardH'

import Vue from 'vue'
import Parallax from '@/mixins/Parallax.js'
import Animation from '@/mixins/Animation.js'
Vue.use(Parallax)
Vue.use(Animation)
import LanguageData from '~/mixins/LanguageData';

export default {
  mixins: [Parallax, Animation,LanguageData],
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
    handleLoad() {
      this.contentLoaded++
    },
    AsambleParallaxObjs() {
      var motion = [
        { obj: this.$refs['parallax-bg'], intensity: 4 },
        { obj: this.$refs['documentLeft'], intensity: 4 },
        { obj: this.$refs['documentRight'], intensity: 4 },
        { obj: this.$refs['parallax-ft'], intensity: 11 },
        { obj: this.$refs['boxContent'], intensity: 11 },
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
    this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
    var chapter = this.getLanguageData({lang : this.lang});
    this.chapter =  chapter.ChapterSeven;
    this.contentLoaded++
  }
}
</script>

