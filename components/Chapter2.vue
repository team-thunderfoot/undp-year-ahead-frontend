<template>
    <section class="b--page-a__item" id="Scene2" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img v-lazy="require(`@/assets/img/chapter-2/front.png`)" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <!-- card-f -->
                <div class="b--card-f">
                    <div class="b--card-f__hd">
                        <!-- card-e -->
                        <div class="b--card-e">
                            <h4 class="b--card-e__title">“Working Together, Restoring Trust”</h4>
                        </div>
                    </div>
                    <div class="b--card-f__bd">
                        <!-- card-a -->
                        <div class="b--card-a">
                            <div class="b--card-a__artwork"></div>
                            <div class="b--card-a__wrapper b--content-a">
                                <p><a href="">Frankie the Dinosaur</a> brings his climate action appeal to Davos at a high-level event on fossil fuel subsidies reform.</p>
                                <p><a href="">Watch Frankie’s message to humanity</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="b--card-a">
                    <div class="b--card-a__hd">
                        <h3 class="b--card-a__hd__title">
                            {{chapter.title}}
                        </h3> 
                    </div>
                    <div class="b--card-a__bd">
                        <p class="b--card-a__bd__content">
                            <SanityContent :blocks="chapter.description" />
                        </p>
                    </div>
                </div>
                <div class="b--card-b">
                    <p class="b--card-b__content">
                        <SanityContent :blocks="chapter.content" />
                    </p>
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-2/back.png">        
            </div>
        </div>
    </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity';
export default {
    data:()=>{
		return{
            totalContent: 2,
			contentLoaded : 0,
            chapter: null
		}
	},
    methods: {
        async getContent(){
            this.lang = (this.$route.name == 'index') ? 'en' : this.$route.name;
            const query_content = groq`*[_type == "chapterTwo"][0]{
                "title" : title['${this.lang}'],
                "content" : content['${this.lang}'],
                "description" : description['${this.lang}']
            }`;
            this.chapter = await this.$sanity.fetch(query_content);
            this.contentLoaded++;
            // this.$nextTick(() => {
            //         // if we want to animate something later 
            //     var tlSection2 = this.$gsap.timeline({
            //         scrollTrigger: {
            //             trigger: "#Scene2",
            //             scrub: 1,
            //             start: () =>
            //                 "top top-=" +
            //                 (document.querySelector("#Scene2").offsetLeft - window.innerWidth),
            //             end: () => "+=" + document.querySelector("#Scene2").offsetWidth,
            //             onEnter: () => {
            //                 // emits on in Story.vue
            //                 $nuxt.$emit('changeURL', { 'url'  : 'Scene2'})
            //                 $nuxt.$emit('changeCurrent', { 'item'  : 2})
            //                 // window.location.href =  this.$route.path  + '#Scene2';
            //             },
            //             onEnterBack: () => {
            //                 // emits on in Story.vue
            //                 $nuxt.$emit('changeURL', { 'url'  : 'Scene2'})
            //                 $nuxt.$emit('changeCurrent', { 'item'  : 2})
            //                 // window.location.href =  this.$route.path  + '#Scene2';
            //             }
            //         }
            //     });
            // })
        },
        handleLoad(){
            this.contentLoaded++;
        },
        animate(){
            this.$nextTick(() => {
                    // if we want to animate something later 
                var tlSection2 = this.$gsap.timeline({
                    scrollTrigger: {
                        trigger: "#Scene2",
                        scrub: 1,
                        start: () =>
                            "top top-=" +
                            (document.querySelector("#Scene2").offsetLeft - window.innerWidth),
                        end: () => "+=" + document.querySelector("#Scene2").offsetWidth,
                        onEnter: () => {
                            // emits on in Story.vue
                            $nuxt.$emit('changeURL', { 'url'  : 'Scene2'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 2})
                            // window.location.href =  this.$route.path  + '#Scene2';
                        },
                        onEnterBack: () => {
                            // emits on in Story.vue
                            $nuxt.$emit('changeURL', { 'url'  : 'Scene2'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 2})
                            // window.location.href =  this.$route.path  + '#Scene2';
                        }
                    }
                });
            });
        }
    },
    watch: {
        contentLoaded(newValue, oldValue) {
            if(newValue == this.totalContent ) {
                // emits on in Story.vue
                $nuxt.$emit('assetLoaded');
                this.animate();
            }
        }
    },
    created(){
        if(process.client){
            this.getContent();
        }
    }
}
</script>

