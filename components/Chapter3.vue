<template>
  <section
    class="b--page-a__item b--chapter3-a"
    id="Scene4"
    ref="Scene4"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__ft-items">
        <img v-lazy="require(`@/assets/img/chapter-3/front.png`)" alt="front" />
      </div>
      <div class="b--ss-a__content">
        <!-- flags left -->
        <div class="b--chapter3-a__artwork b--chapter3-a__artwork--fifth">
          <div
            class="b--motion-b"
            v-lazy:background-image="
              require(`@/assets/img/chapter-3/flags-left_spritesheet.png`)
            "
          ></div>
        </div>

        <!-- chapter title -->
        <div 
        class="b--chapter3-a__content"
        :class="'b--chapter3-a__content--' + `${this.lang}`"
        >
          <v-card-f
            :title="chapter.intro_title"
            :description="chapter.intro_description"
            cardACustomClass="b--card-a--second"
            :customClass="'b--card-f--' + `${this.lang}`"
          />
        </div>

        <!-- info chart -->
        <div class="b--chapter3-a__content b--chapter3-a__content--second">
          <v-info-chapter :info="chapter" />
        </div>
        <!-- wheel -->
        <div class="b--chapter3-a__content b--chapter3-a__content--third">
          <img
            v-lazy="require(`@/assets/img/chapter-3/wheel.png`)"
            alt="wheel"
            title="wheel"
          />
        </div>
        <!-- flags right -->
        <div class="b--chapter3-a__artwork b--chapter3-a__artwork--second">
          <div
            class="b--motion-c"
            v-lazy:background-image="
              require(`@/assets/img/chapter-3/flags-right_spritesheet.png`)
            "
          ></div>
        </div>
      </div>
      <div class="b--ss-a__bg-items">
        <img
          class="b--ss-a__bg-items__artwork"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-3/back.png"
          alt="back"
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
        // mixin function
        this.startAnimation({
          sceneID: 4,
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
      this.chapter =  chapter.ChapterThree;
      this.contentLoaded++
    // }
  },
}
</script>

