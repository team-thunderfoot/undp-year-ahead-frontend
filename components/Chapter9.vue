<template>
  <section
    class="b--page-a__item b--chapter9-a"
    id="Scene10"
    ref="Scene10"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__ft-items">
        
        <img
          @load="handleLoad"
          @error="handleLoad"
          class="b--ss-a__ft-items__parallax"
          src="@/assets/img/chapter-9/middle-parallax.png"
          alt="middle"
          ref="parallax-middle"
          :style="{ left: '245%' }"
        />
        <img
          @load="handleLoad"
          @error="handleLoad"
          class="b--ss-a__ft-items__parallax"
          ref="parallax-ft"
          src="@/assets/img/chapter-9/front-parallax.png"
          alt="front"
          :style="{ left: '129%' }"
        />
      </div>
      <div class="b--ss-a__content">
        <!-- first position element, card -->
        <!-- move up from the scss -->
        <div
          class="b--chapter9-a__content"
          :class="'b--chapter9-a__content--' + `${this.lang}`"
          ref="boxContent"
          :style="{ left: '152%' }"
        >
          <v-card-f
            :title="chapter.intro_title"
            :description="chapter.intro_description"
            :customClass="'b--card-f--second b--card-f--' + `${this.lang}`"
            cardACustomClass="b--card-a--second"
          />
        </div>
      </div>
      <!-- second position element, info -->
      <div class="b--ss-a__front-content">
        <div
          class="b--chapter9-a__info"
          ref="quoteContent"
          :style="{ left: '173%' }"
        >
          <v-info-chapter :info="chapter" />
        </div>
        <!-- animation algae 1 -->
        <div class="b--chapter9-a__artwork" ref="algae1" :style="{ left: '295%' }">
          <div
            class="b--motion-v"
            :style="'background-image: url(' + require(`@/assets/img/chapter-9/algae_1.png`) + ')'"
          ></div>
        </div>
        <!-- animation algae 2 -->
        <div class="b--chapter9-a__artwork b--chapter9-a__artwork--second" ref="algae2" :style="{ left: '278%' }">
          <div
            class="b--motion-w"
            :style="'background-image: url(' + require(`@/assets/img/chapter-9/algae_2.png`) + ')'"
          ></div>
        </div>
        <!-- animation algae 2 -->
        <div class="b--chapter9-a__artwork b--chapter9-a__artwork--third" ref="algae3" :style="{ left: '322%' }">
          <div
            class="b--motion-w"
            :style="'background-image: url(' + require(`@/assets/img/chapter-9/algae_2.png`) + ')'"
          ></div>
        </div>
        <!-- animation buble 1 -->
        <div class="b--chapter9-a__artwork b--chapter9-a__artwork--fourth" ref="bubble1" :style="{ left: '168%' }">
          <div
            class="b--motion-x"
            :style="'background-image: url(' + require(`@/assets/img/chapter-9/bubble_1.png`) + ')'"
          ></div>
        </div>
        <!-- animation buble 2 -->
        <div class="b--chapter9-a__artwork b--chapter9-a__artwork--fifth" ref="bubble2" :style="{ left: '186%' }">
          <div
            class="b--motion-x"
            :style="'background-image: url(' + require(`@/assets/img/chapter-9/bubble_2.png`) + ')'"
          ></div>
        </div>
        <!-- animation buble 3 -->
        <div class="b--chapter9-a__artwork b--chapter9-a__artwork--sixth" ref="bubble3" :style="{ left: '205%' }">
          <div
            class="b--motion-x"
            :style="'background-image: url(' + require(`@/assets/img/chapter-9/bubble_3.png`) + ')'"
          ></div>
        </div>
        <!-- animation buble 3 -->
        <div class="b--chapter9-a__artwork b--chapter9-a__artwork--seventh" ref="bubble4" :style="{ left: '148%' }">
          <div
            class="b--motion-x"
            :style="'background-image: url(' + require(`@/assets/img/chapter-9/bubble_3.png`) + ')'"
          ></div>
        </div>
      </div>
      <div class="b--ss-a__bg-items">
        <img
          class="b--ss-a__bg-items__back"
          @load="handleLoad"
          @error="handleLoad"
          alt="back"
          src="@/assets/img/chapter-9/back.png"
        />
        <img
          @load="handleLoad"
          @error="handleLoad"
          class="b--ss-a__bg-items__parallax"
          ref="parallax-bg"
          src="@/assets/img/chapter-9/back-parallax.png"
          alt="back-parallax"
          :style="{ left: '30%' }"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardF from '@/components/cards/CardF'
import InfoChapter from '@/components/infochapter/Infochapter'

import Parallax from '@/mixins/Parallax.js'
import Animation from '@/mixins/Animation.js'

export default {
  mixins: [Parallax, Animation],
  components: {
    'v-card-f': CardF,
    'v-info-chapter': InfoChapter,
  },
  data: () => {
    return {
      totalContent: 5,
      contentLoaded: 0,
      chapter: null,
      infoWindowStatus: true,
    }
  },
  props: ['scrollTween'],
  methods: {
    handleLoad() {
      this.contentLoaded++
    },
    AsambleParallaxObjs() {
      var motion = [
        { obj: this.$refs['parallax-bg'], intensity: 1 },
        { obj: this.$refs['parallax-middle'], intensity: 40 },
        { obj: this.$refs['parallax-ft'], intensity: 21 },
        { obj: this.$refs['algae1'], intensity: 40 },
        { obj: this.$refs['algae2'], intensity: 40 },
        { obj: this.$refs['algae3'], intensity: 40 },
        { obj: this.$refs['bubble1'], intensity: 21 },
        { obj: this.$refs['bubble2'], intensity: 21 },
        { obj: this.$refs['bubble3'], intensity: 21 },
        { obj: this.$refs['bubble4'], intensity: 21 },
        { obj: this.$refs['boxContent'], intensity: 21 },
        { obj: this.$refs['quoteContent'], intensity: 21 },
      ]
      motion.forEach((item) => {
        this.parallaxMove({
          el: item.obj,
          intensity: item.intensity,
          duration: this.$refs['Scene10'].offsetWidth,
          containerAnimation: this.scrollTween,
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
          sceneID: 10,
          scrub: 0,
          scrollTween: this.scrollTween,
        })
      }
    },
  },
  created() {
    // if(process.client){
      this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
      var chapter = this.getLanguageData({lang : this.lang});
      this.chapter =  chapter.ChapterNine;
      this.contentLoaded++
    // }
  }
}
</script>

