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
                :description="chapter.content"
            />
        </div>
        <!-- info chart -->
        <div class="b--chapter5-a__content b--chapter5-a__content--second">
          <div class="b--info-chapter-a" @click.prevent="toggleInfoChapter()">
              <div class="b--info-chapter-a__icon">i</div>
          </div>
          <div
              class="b--info-window-a"
              :class="{ 'b--info-window-a--is-visible': this.infoWindowStatus }"
          >
              <div class="b--info-window-a__content"> 
                  <p><a href="">Commission on the Status of Women</a> 14-25 March, New York, USA</p>
              </div>
          </div>
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
import CardF from './cards/CardF';
export default {
  components:{
    'v-card-f':CardF
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
      const query_content = groq`*[_type == "chapterTwo"][0]{
                "title" : title['${this.lang}'],
                "content" : content['${this.lang}'],
                "description" : description['${this.lang}']
            }`
      this.chapter = await this.$sanity.fetch(query_content)
      this.contentLoaded++

      // this.$nextTick(() => {
      //     // if we want to animate something later
      //     var tlSection5 = this.$gsap.timeline({
      //         scrollTrigger: {
      //             trigger: "#Scene5",
      //             scrub: 0,
      //             start: () =>
      //                 "top top-=" +
      //                 (document.querySelector("#Scene5").offsetLeft - window.innerWidth),
      //             end: () => "+=" + document.querySelector("#Scene5").offsetWidth,
      //             onEnter: () => {
      //                 // emits on in Story.vue
      //                 // window.location.href =  this.$route.path  + '#Scene5';
      //                 $nuxt.$emit('changeURL', { 'url'  : 'Scene5'})
      //                 $nuxt.$emit('changeCurrent', { 'item'  : 5})
      //             },
      //             onEnterBack: () => {
      //                 // emits on in Story.vue
      //                 // window.location.href =  this.$route.path  + '#Scene5';
      //                 $nuxt.$emit('changeURL', { 'url'  : 'Scene5'})
      //                 $nuxt.$emit('changeCurrent', { 'item'  : 5})
      //             }
      //         }
      //     });
      // })
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
              $nuxt.$emit('changeURL', { url: 'Scene5' })
              $nuxt.$emit('changeCurrent', { item: 5 })
            },
            onEnterBack: () => {
              // emits on in Story.vue
              // window.location.href =  this.$route.path  + '#Scene5';
              $nuxt.$emit('changeURL', { url: 'Scene5' })
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

