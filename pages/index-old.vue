<template>
  <div id="HorizontalWrapper" class="b--site-a">

  <section class="b--site-a__item b--ss-a b--ss-a--second">
    <div>
        <h1 class="f--font-a">This is the Project Title</h1>
        <h2 class="f--font-b">A year ahead - test </h2>
    </div>
  </section>

  <section class="b--site-a__item b--ss-a" id="Scene1">
    <div class="b--ss-a__ft-items">
      <div class="b--bird-a">
        
      </div>  
      <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-1.png" alt="">
    </div>
    <div class="b--ss-a__bg-items">
      <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-1.png" alt="">
      <!-- <img class="b--ss-a__bg-items__flag" src="https://mailchimp.com/annual-report/assets/brooklyn-community-foundation/flag-1.gif" alt=""> -->
    </div>
   
    <div class="b--marker-a">
      <div class="b--marker-a__item">
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia asperiores magni fuga minima excepturi vitae! Voluptatem non odio suscipit molestias quo ullam alias odit assumenda facilis magni, doloribus dolor soluta.</p>
      </div>
    </div>

   
  </section>

  <section class="b--site-a__item b--ss-a b--ss-a--third" id="Scene2">
    <div class="item-slide">
      <h3>Narrow Section 1 </h3>
      <p>Hello World</p>
    </div>
    <div class="item-slide">
      <h3>Narrow Section 2 </h3>
      <p>Hello World</p>
    </div>
  </section>

  
</div>
</template>

<script>
/* Components */
import gsap from 'gsap';
export default {
  head() {
      return {
        title: 'Project Title English',
        meta: [
            { hid: 'title', name: 'title', content: 'Project Title' },
            { hid: 'description', name: 'description', content: 'this is meta description for EN page' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:image', property: 'og:image', content: 'https://teamthunderfoot.com/wp-content/uploads/2020/06/OG-Image-1.jpg'},
            { hid: 'og:title', property: 'og:title', content: 'Og Title English'},
            { hid: 'og:description', property: 'og:description', content: 'OG Description English'},
        ]
      }
  },
  data: () => ({
    seo:[
      {
        description: 'this is a test'
      }
    ]
  }),
  methods:{
    getTotalWidth(){
      let width = 0;
      let Sections = document.querySelectorAll(".b--site-a__item");
      Sections.forEach(el => width += el.offsetWidth);
      return width;
    }
  },
  created(){
      if(process.client){
        this.$nextTick(() => {
          gsap.to(document.querySelectorAll(".b--site-a__item"), { 
            x: () => - this.getTotalWidth() + window.innerWidth, 
            ease: "none", 
            scrollTrigger: {
                  trigger: ".b--site-a",
                  pin: true,
                  start: 0,
                  end: () => "+=" + (document.querySelector('.b--site-a').scrollWidth - window.innerWidth),
                  invalidateOnRefresh: true,
                  scrub: true,
                  markers: "true",
              }
          });



        });
      }

      
  }
}
</script>
<style lang="scss">
  @import '@/sass/index.scss';
  ::-webkit-scrollbar {
    display: none;
  }

</style>