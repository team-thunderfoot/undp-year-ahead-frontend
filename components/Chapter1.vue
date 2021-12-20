<template>
  <section class="b--page-a__item b--chapter1-a" id="Scene1" ref="Scene1" v-if="chapter">
    <div class="b--ss-a">
      <div class="b--ss-a__ft-items">
        <img
          class="b--ss-a__ft-items__artwork"
          ref="parallax-1-ft"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-1/front.png"
          alt=""
        />
        <!-- <div class="eli"></div> -->
      </div>
      <div class="b--ss-a__content">
        <!-- Intro Story -->
        <!-- first div position element -->
        <div class="b--chapter1-a__content">
          <div class="b--intro-a" :class="`b--intro-a--${this.lang}`">
            <div class="b--intro-a__artwork"></div>
            <div class="b--intro-a__wrapper">
              <h1 class="b--intro-a__wrapper__title">
                {{ chapter.title }}
                <span class="b--intro-a__wrapper__title__badge">{{
                  chapter.date
                }}</span>
              </h1>
              <h2 class="b--intro-a__wrapper__subtitle">
                {{ chapter.description }}
              </h2>
            </div>
          </div>
        </div>
        <!-- Intro Story -->

        <div class="b--chapter1-a__content b--chapter1-a__content--second">
          <div class="b--card-a">
            <div class="b--card-a__artwork"></div>
            <div class="b--card-a__wrapper b--content-a">
              <SanityContent :blocks="chapter.content" />
            </div>
          </div>
        </div>

        <div class="b--chapter1-a__artwork b--chapter1-a__artwork--second" ref="frameTv">
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

        <div class="b--chapter1-a__artwork b--chapter1-a__artwork--third" ref="browser">
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
              <v-quote-a :chapter="chapter"/>
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
import { groq } from '@nuxtjs/sanity'
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'

import InfoChapter from '@/components/infochapter/Infochapter';
import QuoteA from '@/components/quote/Quote';

// import Parallax from '@/motion/Parallax';
import Vue from 'vue';
import Parallax from '@/mixins/Parallax.js';
import Animation from '@/mixins/Animation.js';
Vue.use(Parallax)
Vue.use(Animation)

export default {
  mixins: [Parallax,Animation],
  data: () => {
    return {
      totalContent: 3,
      contentLoaded: 0,
      chapter: null,
      infoWindowStatus: true,
    }
  },
  props: ['scrollTween'],
  components: {
    SanityContent,
    'v-info-chapter' : InfoChapter,
    'v-quote-a' : QuoteA
  },
  methods: {

    async getContent() {
      this.lang = this.$route.name == 'index' ? 'en' : this.$route.name
      const query_content = groq`*[_type == "chapterOne"][0]{
                "title" : title['${this.lang}'],
                "date" : date['${this.lang}'],
                "description" : description['${this.lang}'],

                "content" : content['${this.lang}'],

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
    animate() {
      this.$nextTick(() => {
        this.startAnimation({
            sceneID : 1,
            scrub:0,
            scrollTween : this.scrollTween
          })
        })
    },
  },
  watch: {
    contentLoaded(newValue, oldValue) {
      if (newValue == this.totalContent) {
        // emits on in Story.vue
        $nuxt.$emit('assetLoaded')
        // this.animate()
      }
    },
    scrollTween(newValue, oldValue){
      if (newValue ) {

        // var motion = [
        //   {obj:this.$refs['parallax-1-ft'], intensity:.5},
        //   {obj:this.$refs['parallax-1-bubble'], intensity:.5},
        //   {obj:this.$refs['frameTv'], intensity:.3},
        //   {obj:this.$refs['browser'], intensity:.5},
        // ]
        // motion.forEach(item => {
        //   this.parallaxMove({
        //     el: item.obj,
        //     intensity:item.intensity,
        //     duration: this.$refs['Scene1'].offsetWidth,
        //     containerAnimation:this.scrollTween,
        //     scrub:1,
        //   })  
        // });
        this.animate();
      } 
    }
  },
  created() {
    if (process.client) {
      this.getContent();
    }
  },
}
</script>

