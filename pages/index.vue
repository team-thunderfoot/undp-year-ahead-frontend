<template>
  <div id="HorizontalWrapper" class="b--site-a">

  <section class="b--site-a__item b--ss-a b--ss-a--second">
    <div>
        <h1 class="f--font-a">This is the Project Title</h1>
        <h2 class="f--font-b">A year ahead - test</h2>
    </div>
  </section>

  <section class="b--site-a__item b--ss-a" id="Scene1">
    <div class="b--ss-a__ft-items">
          <img class="b--ss-a__ft-items__artwork" src="https://mailchimp.com/annual-report/assets/brooklyn-community-foundation/foreground.png" alt="">
    </div>
    <div class="b--ss-a__bg-items">
       <div class="b--marker-b">
      <div class="b--marker-b__item">
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia asperiores magni fuga minima excepturi vitae! Voluptatem non odio suscipit molestias quo ullam alias odit assumenda facilis magni, doloribus dolor soluta.</p>
      </div>
    </div>
      <img class="b--ss-a__bg-items__artwork" src="https://mailchimp.com/annual-report/assets/brooklyn-community-foundation/background.png" alt="">
      <img class="b--ss-a__bg-items__flag" src="https://mailchimp.com/annual-report/assets/brooklyn-community-foundation/flag-1.gif" alt="">
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
	
	<div class="b--progress-a"></div>
  
</div>
</template>

<script>
/* Components */
// import gsap from 'gsap';
// import ScrollTrigger from "gsap/ScrollTrigger";

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
      // gsap.registerPlugin(ScrollTrigger);

      this.$nextTick(() => {
        const tl = this.$gsap.timeline();
        tl.to(document.querySelectorAll(".b--site-a__item"), { x: () => - this.getTotalWidth() + window.innerWidth, ease: "none", });

        this.$ScrollTrigger.create({
            animation: tl,
            trigger: ".b--site-a",
            pin: true,
            start: 0,
            end: () => "+=" + (document.querySelector('.b--site-a').scrollWidth - window.innerWidth),
            invalidateOnRefresh: true,
            scrub: true,
            markers: "true",
            onUpdate: (self) => {
              var widhtProgress = self.progress.toFixed(2) * 100;
              document.querySelector(".b--progress-a").style.width = widhtProgress + '%';
            }
        }) 

        this.$ScrollTrigger.create({
            trigger: "#Scene2",
            start:  "#Scene2",
            onEnter: () => alert('entro'),
        }) 
      });
    }
  },
}
</script>
<style lang="scss">
  @import '@/sass/index.scss';
  ::-webkit-scrollbar {
    display: none;
  }
	.b--progress-a {
		height: 10px;
		width: 0%;
		position: absolute;
		bottom: 0rem;
		background-color: red;
	}
</style>