<template>
  <section
    class="b--page-a__item b--chapter4-a"
    id="Scene4"
    ref="Scene4"
    v-if="chapter"
  >
    <div class="b--ss-a">
      <div class="b--ss-a__ft-items">
        <img src="@/assets/img/chapter-4/front.png" alt="front"  @load="handleLoad"
          @error="handleLoad"/>
      </div>
      <div class="b--ss-a__content">
        <!-- flags left -->
        <div class="b--chapter4-a__artwork b--chapter4-a__artwork--fifth">
          <div
            class="b--motion-b"
            :style="'background-image: url(' + require(`@/assets/img/chapter-4/flags-left_spritesheet.png`) + ')'"
          ></div>
        </div>

        <!-- chapter title -->
        <div 
        class="b--chapter4-a__content"
        :class="'b--chapter4-a__content--' + `${this.lang}`"
        >
          <v-card-f
            :title="chapter.intro_title"
            :description="chapter.intro_description"
            cardACustomClass="b--card-a--second"
            :customClass="'b--card-f--' + `${this.lang}`"
          />
        </div>

        <!-- info chart -->
        <div class="b--chapter4-a__content b--chapter4-a__content--second">
          <v-info-chapter :info="chapter" />
        </div>
        <!-- wheel -->
        <div class="b--chapter4-a__content b--chapter4-a__content--third">
          <img
            src="@/assets/img/chapter-4/wheel.png"
            alt="wheel"
            title="wheel"
             @load="handleLoad"
          @error="handleLoad"
          />
        </div>
        <!-- flags right -->
        <div class="b--chapter4-a__artwork b--chapter4-a__artwork--second">
          <div
            class="b--motion-c"
            :style="'background-image: url(' + require(`@/assets/img/chapter-4/flags-right_spritesheet.png`) + ')'"
          ></div>
        </div>
      </div>
      <div class="b--ss-a__bg-items">
        <img

          id="Scene4Image"
          class="b--ss-a__bg-items__artwork"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-4/back.png"
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
      totalContent: 4,
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
      this.chapter =  chapter.ChapterFour;
      this.contentLoaded++
    // }
  },
}
</script>

