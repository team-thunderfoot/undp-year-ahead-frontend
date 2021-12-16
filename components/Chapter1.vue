<template>
  <section class="b--page-a__item b--chapter1-a" id="Scene1" v-if="chapter">
    <div class="b--ss-a">
      <div class="b--ss-a__ft-items">
        <img
          class="b--ss-a__ft-items__artwork"
          @load="handleLoad"
          @error="handleLoad"
          src="@/assets/img/chapter-1/front.png"
          alt=""
        />
        <div class="eli"></div>
      </div>
      <div class="b--ss-a__content">
        <!-- Intro Story -->
        <!-- first div position element -->
        <div class="b--chapter1-a__content">
          <div class="b--intro-a">
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

        <div class="b--chapter1-a__artwork b--chapter1-a__artwork--second">
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

        <div class="b--chapter1-a__artwork b--chapter1-a__artwork--third">
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

        <!-- <div class="b--chapter1-a__item">
          <v-quote-a :chapter="chapter"/>
        </div> -->

        <div class="b--chapter1-a__artwork b--chapter1-a__artwork--fifth">
          <div
            class="b--motion-a"
            v-lazy:background-image="
              require(`@/assets/img/chapter-1/bubble-motion.png`)
            "
          >
            <!-- bubble -->
          </div>
        </div>

        <!-- content-third position -->
        <!-- <div class="b--chapter1-a__content b--chapter1-a__content--third"> -->
          <!-- card-e -->
          <!-- <div class="b--card-e">
            <h4 class="b--card-e__title">
             {{chapter.panel_title}}
            </h4>
          </div>
        </div>  -->

        <!-- content-fourth position -->
        <div class="b--chapter1-a__content b--chapter1-a__content--fourth">
          <!-- text with bg -->
          <div class="b--card-d">
            <div class="b--card-d__bd">
              <v-quote-a :chapter="chapter"/>
            </div>
            <div class="b--card-d__artwork"></div>
          </div>
        </div>

        <div class="b--chapter1-a__info">
            <v-info-chapter :info="chapter"/>
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

export default {
  mixins: ['infoWindow'],
  data: () => {
    return {
      totalContent: 3,
      contentLoaded: 0,
      chapter: null,
      infoWindowStatus: true,
    }
  },
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

                "panel_title" :  panel_title['${this.lang}'],
                "blackboard_content" : blackboard_content['${this.lang}'],

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
        let tlSection = this.$gsap.timeline({
          scrollTrigger: {
            trigger: '#Scene1',
            scrub: 0,
            // containerAnimation: scrollTween,
            start: () =>
              'top top-=' +
              (document.querySelector('#Scene1').offsetLeft -
                window.innerWidth),
            end: () => '+=' + document.querySelector('#Scene1').offsetWidth,
            onEnter: () => {
              // emits on in Story.vue
              $nuxt.$emit('changeURL', { url: '1' })
              $nuxt.$emit('changeCurrent', { item: 1 })
            },
            onEnterBack: () => {
              // emits on in Story.vue
              $nuxt.$emit('changeURL', { url: '1' })
              $nuxt.$emit('changeCurrent', { item: 1 })
            },
          },
        })
       
        // let tlParallax = this.$gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".eli",
        //         scrub: true,
        //         start: () =>
        //             "top top-=" +
        //             (document.querySelector(".eli").offsetLeft - window.innerWidth),
        //         end: () => "+=" + document.querySelector(".eli").offsetWidth,
        //         onEnter: () => {
        //           // alert('entro');
        //         },
        //         onLeave: () => {
        //           // alert('salgo')
        //         }
        //     }
        // });
        // tlParallax.to(document.querySelector('.eli'), {duration: 40, x:-100});

        // let tlParallax = this.$gsap.timeline({ 
        //     id:'testEli',
        //     scrollTrigger: {
        //         trigger: ".eli",
        //         scrub: true,
        //         markers: "true",
        //         start: "top top",
        //         end: "bottom top",
                
        //         // start: () => "0px top",
        //         // end: () => "120px 180px"
                
        //     }
        // });
        // tlParallax.to(document.querySelector('.eli'), { x:-300});
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
<style scoped>
  .eli{
    background:rgba(187, 146, 146, 0.384);
    position:absolute;
    bottom:0;
    left:40%;
    width:500px;
    height: 500px;
    z-index: 5;;
  }
</style>
