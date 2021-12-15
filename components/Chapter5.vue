<template>
  <section class="b--page-a__item" id="Scene5" v-if="chapter">
    <div class="b--ss-a">
      <div class="b--ss-a__ft-items">
        <img v-lazy="require(`@/assets/img/chapter-5/front.png`)" alt="front" />
      </div>
      <div class="b--ss-a__content">
        <!-- chapter title -->
        <div class="b--chapter5-a__content">
            <v-card-f 
                :title="chapter.title"
                :description="chapter.description"
                customClass="b--card-f--third"
            />
        </div>
        <!-- info chart -->
        <div class="b--chapter5-a__content b--chapter5-a__content--second">
           <v-info-chapter :info="chapter"/>
        </div>
      </div>
      <div class="b--ss-a__bg-items">
        <img
          class="b--ss-a__bg-items__artwork"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-5/back.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity';
import CardF from '@/components/cards/CardF';
import InfoChapter from '@/components/infochapter/Infochapter';

export default {
  components:{
    'v-card-f':CardF,
    'v-info-chapter' : InfoChapter
  },
  data: () => {
    return {
      totalContent: 2,
      contentLoaded: 0,
      chapter: null,
    }
  },
  methods: {
    async getContent() {
      this.lang = this.$route.name == 'index' ? 'en' : this.$route.name
      const query_content = groq`*[_type == "chapterFive"][0]{
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
    animate() {
      this.$nextTick(() => {
        // if we want to animate something later
        var tlSection5 = this.$gsap.timeline({
          scrollTrigger: {
            trigger: '#Scene5',
            scrub: 0,
            start: () =>
              'top top-=' +
              (document.querySelector('#Scene5').offsetLeft -
                window.innerWidth),
            end: () => '+=' + document.querySelector('#Scene5').offsetWidth,
            onEnter: () => {
              // emits on in Story.vue
              // window.location.href =  this.$route.path  + '#Scene5';
              $nuxt.$emit('changeURL', { url: '5' })
              $nuxt.$emit('changeCurrent', { item: 5 })
            },
            onEnterBack: () => {
              // emits on in Story.vue
              // window.location.href =  this.$route.path  + '#Scene5';
              $nuxt.$emit('changeURL', { url: '5' })
              $nuxt.$emit('changeCurrent', { item: 5 })
            },
          },
        })
      })
    },
  },
  watch: {
    contentLoaded(newValue, oldValue) {
      if (newValue == this.totalContent) {
        // emits on in Story.vue
        $nuxt.$emit('assetLoaded')
        this.animate()
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

