<template>
    <section class="b--page-a__item" id="Scene4" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img v-lazy="require(`@/assets/img/chapter-4/front.png`)" alt="front" />
            </div>
            <!-- <div class="b--ss-a__content">
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
            </div> -->
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-4/back.png">        
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
            //     // if we want to animate something later 
            //     var tlSection4 = this.$gsap.timeline({
            //         scrollTrigger: {
            //             trigger: "#Scene4",
            //             scrub: 0,
            //             start: () =>
            //                 "top top-=" +
            //                 (document.querySelector("#Scene4").offsetLeft - window.innerWidth),
            //             end: () => "+=" + document.querySelector("#Scene4").offsetWidth,
            //             onEnter: () => {
            //                 // emits on in Story.vue
            //                 // window.location.href =  this.$route.path  + '#Scene4';
            //                 $nuxt.$emit('changeURL', { 'url'  : 'Scene4'})
            //                 $nuxt.$emit('changeCurrent', { 'item'  : 4})
            //             },
            //             onEnterBack: () => {
            //                 // emits on in Story.vue
            //                 // window.location.href =  this.$route.path  + '#Scene4';
            //                 $nuxt.$emit('changeURL', { 'url'  : 'Scene4'})
            //                 $nuxt.$emit('changeCurrent', { 'item'  : 4})
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
                var tlSection4 = this.$gsap.timeline({
                    scrollTrigger: {
                        trigger: "#Scene4",
                        scrub: 0,
                        start: () =>
                            "top top-=" +
                            (document.querySelector("#Scene4").offsetLeft - window.innerWidth),
                        end: () => "+=" + document.querySelector("#Scene4").offsetWidth,
                        onEnter: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene4';
                            $nuxt.$emit('changeURL', { 'url'  : 'Scene4'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 4})
                        },
                        onEnterBack: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene4';
                            $nuxt.$emit('changeURL', { 'url'  : 'Scene4'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 4})
                        }
                    }
                });
            })
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

