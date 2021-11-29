<template>
  <div id="HorizontalWrapper" class="b--site-a">

  <section class="b--site-a__item b--ss-a b--ss-a--second">
    <div>
        <h1 class="f--font-a">This is the UNDP Project</h1>
        <h2 class="f--font-b">A year ahead</h2>
    </div>
  </section>

  <section class="b--site-a__item b--ss-a">
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

  <section class="b--site-a__item b--ss-a b--ss-a--third">
    <div class="item-slide">
      <h3>Narrow Section 1 </h3>
      <p>hola mundo desde un ancho particular</p>
    </div>
    <div class="item-slide">
      <h3>Narrow Section 2 </h3>
      <p>hola mundo desde un ancho particular</p>
      <p>otro mas</p>
    </div>
  </section>

  

   <!-- <section class="b--site-a__item">
    <div class="item-slide">
      <h3>Narrow Section</h3>
      <p>hola mundo desde un ancho particular</p>
      <p>otro mas</p>
    </div>
    <div class="item-slide">
      <h3>Narrow Section</h3>
      <p>hola mundo desde un ancho particular</p>
      <p>otro mas</p>
    </div>
  </section> -->

<!-- <section class="b--site-a__item">
    <div class="b--site-a__item__ft-item">
      <img src="https://mailchimp.com/annual-report/assets/brooklyn-community-foundation/foreground.png" alt="">
    </div>
     <div class="b--site-a__item__bg-item">
      <img src="https://mailchimp.com/annual-report/assets/brooklyn-community-foundation/background.png" alt="">
    </div>
  </section> -->


  <!-- <section class="b--site-a__item" id="SectionB">
    <div id="SectionBLeftBox">
      <h1>SectionB<br>width: 150vw;</h1>
    </div><img class="SectionBImag" src="https://source.unsplash.com/CudNrzbsyZw/1600x900" alt="">
  </section>

  <section class="b--site-a__item" id="SectionC">
    <div id="ImageWrap"><img src="https://source.unsplash.com/uEFombN3J5U/1600x900" alt=""></div>
    <h1>SectionC<br>width: 210vw;</h1>
  </section> -->

  
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
          console.log(this.getTotalWidth())
          gsap.to(document.querySelectorAll(".b--site-a__item"), { 
            x: () => -this.getTotalWidth() + window.innerWidth, 
            ease: "none", 
            scrollTrigger: {
                  trigger: ".b--site-a",
                  pin: true,
                  start: 0,
                  end: () => "+=" + (document.querySelector('.b--site-a').scrollWidth - window.innerWidth),
                  invalidateOnRefresh: true,
                  scrub: true,
                  markers: "true",
                  // onRefresh() {
                  //   let totalWidth = getTotalWidth(),
                  //       accumulatedWidth = 0,
                  //       progressArray = Sections.map(el => {
                  //         accumulatedWidth += el.offsetWidth;
                  //         return accumulatedWidth / totalWidth;
                  //       });
                  //   progressArray.unshift(0);
                  //   snap = gsap.utils.snap(progressArray);
                  // },
                  // snap: {
                  //     snapTo: value => snap(value),
                  //     duration: { min: 0.40, max: 0.70 },
                  //     delay: 0.01, ease: "sine.inOut",
                  // }
              }
          });



        });
      }

      
  }
}
</script>
<style lang="scss">
  @import '@/sass/index.scss';
  :root {
	  font-family: Helvetica;
  }

  ::-webkit-scrollbar {
    display: none;
  }


#HorizontalWrapper #SectionB {
	justify-content: flex-start;
	width: 150vw;
}

#HorizontalWrapper #SectionB #SectionBLeftBox {
	display: flex;
	position: absolute;
	z-index: 1;
	justify-content: center;
	align-items: center;
	background: #f8efe6;
	height: 100vh;
	width: 70vw;
}

#HorizontalWrapper #SectionB img {
	position: absolute;
	right: 0;
	height: 100vh;
}

#HorizontalWrapper #SectionC {
	justify-content: center;
	align-items: center;
	background: #f8efe6;
	width: 210vw;
}

#HorizontalWrapper #SectionC h1 {
	position: absolute;
}

#HorizontalWrapper #SectionC #ImageWrap {
	position: absolute;
	overflow: hidden;
	width: 60vw;
	height: 70vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

#HorizontalWrapper #SectionC #ImageWrap img {
	height: 100%;
}

#HorizontalWrapper #SectionD {
	justify-content: center;
	align-items: center;
	background: #f00000;
	width: 200vw;
}

#HorizontalWrapper #SectionD #SectionWrap {
	position: relative;
	width: calc(100vw - 10vw);
	height: calc(100vh - 10vw);
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
}

#HorizontalWrapper #SectionD #SectionWrap #ImageWrap {
	position: absolute;
	left: 0;
	overflow: hidden;
	width: 40%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

#HorizontalWrapper #SectionD #SectionWrap #ImageWrap img {
	width: 100%;
}

#HorizontalWrapper #SectionD #SectionWrap #TextWrap {
	position: absolute;
	right: 0;
	width: 60%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #f8efe6;
}

#HorizontalWrapper #SectionD #SectionWrap #TextWrap h1 {
	font-size: 5vw;
}

</style>