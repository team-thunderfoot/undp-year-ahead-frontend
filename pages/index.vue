<template>
    <div>
        <div class="b--noise-a"></div>
        <v-nav />
        <v-lang />
        <v-story />
    </div>
</template>

<script>
// import ProgressNav from '@/components/ProgressNav.vue';

// Components
import Nav from '@/components/Nav';
import Lang from '@/components/Lang';
import Story from '~/components/Story.vue';

export default {
	data:()=>{
		return{
			currentItem : 0,
			isLoaded : 0
		}
	},
    components : {
        'v-nav':Nav,
        'v-lang':Lang,
        'v-story':Story,
		// 'v-progress-nav' : ProgressNav,
	},
    methods:{
        // getTotalWidth(){
        //     let width = 0;
        //     let Sections = document.querySelectorAll("section");
        //     Sections.forEach(el => width += el.offsetWidth);
        //     return width;
        // },
		// imagesAreLoaded () {
		// 	console.log(this.isLoaded);
		// 	if(this.isLoaded == 8) {
		// 		console.log("loadee");
		// 		if(process.client){
		// 			this.$nextTick(() => {

		// 				this.$gsap.to(document.querySelectorAll("section"), { 
		// 				x: () => -this.getTotalWidth() + window.innerWidth, 
		// 				ease: "none", 
		// 				scrollTrigger: {
		// 						trigger: '.b--page-a',
		// 						pin: true,
		// 						start: 0,
		// 						end: () => "+=" + (document.querySelector('.b--page-a').scrollWidth - window.innerWidth),
		// 						scrub: true,
		// 						markers: "true",
		// 					}
        //                 });
                        
        //             let tlBird = this.$gsap.timeline({
        //                 scrollTrigger: {
        //                     trigger: ".b--bird-a",
        //                     scrub: true,
        //                     start: () =>
        //                         "top top-=" +
        //                         (document.querySelector(".b--bird-a").offsetLeft - window.innerWidth),
        //                     end: () => "+=" + document.querySelector(".b--bird-a").offsetWidth,
        //                 }
        //             });
        //             tlBird.to(document.querySelector('.b--bird-a'), {duration: 40, x:-100});
		// 			});    
		// 		}
		// 	}
		// },
		// onImgLoad () {
		// 	this.isLoaded = this.isLoaded + 1;
		// 	this.imagesAreLoaded();
		// }
    },
    mounted(){
 
    },
    // created(){
    //     if(process.client){
    //         this.$nuxt.$on('assetLoaded', () => {
    //             // Do Something
    //             alert('event working! :)')
    //         })
    //     }
       
    // }
}
</script>

<style lang="scss">
  @import '@/sass/index.scss';
</style>