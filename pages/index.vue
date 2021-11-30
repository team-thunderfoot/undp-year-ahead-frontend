<template>
	<div id="HorizontalWrapper" class="b--site-a">
		<div class="b--site-a__wrapper">
			<section class="b--site-a__wrapper__item b--ss-a b--ss-a--second">
				<div>
					<h1 class="f--font-a">This is the Project Title</h1>
					<h2 class="f--font-b">A year ahead - test</h2>
				</div>
			</section>

			<section class="b--site-a__wrapper__item b--ss-a" id="Scene1">
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

			<section class="b--site-a__wrapper__item b--ss-a b--ss-a--third" id="Scene2">
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
		
		<div class='b--progress-a progress-bar-vertical'>
			<div class='b--progress-a--button progress-now-vertical right'></div>
		</div>
		<nav>
			<div>one</div>
			<div>two</div>
			<div>three</div>
		</nav>
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
			let Sections = document.querySelectorAll(".b--site-a__wrapper__item");
			Sections.forEach(el => width += el.offsetWidth);
			return width;
		},
		navigate() {
			console.log("aaa");
			let Sections = this.$gsap.utils.toArray(".b--site-a__wrapper__item");
			this.$gsap.set(Sections, {x: 0});
			console.log(Sections);
			let nav = this.$gsap.utils.toArray("nav div");
			let  getMaxWidth = () => Sections.reduce((val, section) => val + section.offsetWidth, 0);
			console.log(getMaxWidth());
			let maxWidth = getMaxWidth();
			let scrollSpeed = 4;
			let snapProgress;
			let lastScrollTween = 0;
  			let position = 0;
			let distance = maxWidth - window.innerWidth;
	  
			Sections.forEach((el, i) => {
				console.log(position);
				let progress = position;
				position += el.offsetWidth / distance;
				nav[i].onclick = (e) => { // link clicks should trigger a scroll tween to the appropriate spot
					snapProgress = progress; // save the current progress so that if we can return it in the directionalSnap() when called right after the scrollTo tween is done (because ScrollTrigger would normally look at the velocity and snap, causing it to overshoot to the next section)
					lastScrollTween = Date.now(); // for checking in the directionalSnap() if there was a recent scrollTo that finished, in which case we'd skip the snapping (well, return the current snapProgress)
					this.$gsap.to(window, {scrollTo: maxWidth / scrollSpeed * progress, duration: 1, overwrite: "auto"});
				};
			});
		}
	},
  	created(){
		if(process.client){
		// gsap.registerPlugin(ScrollTrigger);

			this.$nextTick(() => {
				const tl = this.$gsap.timeline();
				tl.to(document.querySelectorAll(".b--site-a__wrapper__item"), { x: () => - this.getTotalWidth() + window.innerWidth, ease: "none", });

				this.$ScrollTrigger.create({
					animation: tl,
					trigger: ".b--site-a",
					pin: true,
					start: 0,
					end: () => "+=" + (document.querySelector('.b--site-a__wrapper').scrollWidth - window.innerWidth),
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
					// onEnter: () => alert('entro'),
				}) 

				setTimeout(() => {
					this.navigate();
				}, 3000);
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