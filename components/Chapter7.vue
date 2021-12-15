<template>
    <section class="b--page-a__item b--chapter7-a" id="Scene7" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img v-lazy="require(`@/assets/img/chapter-7/front.png`)" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <div class="b--chapter7-a__content">
                    <v-card-f 
                        :title="chapter.title"
                        :description="chapter.description"
                        customClass="b--card-f--second"
                        cardACustomClass="b--card-a--second"
                    />
                </div>
                <div class="b--chapter7-a__content b--chapter7-a__content--second">
                     <v-card-h :content="chapter.document_left"/>
                </div>
                <div class="b--chapter7-a__content b--chapter7-a__content--third">
                    <v-card-h :content="chapter.document_right"/>
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-7/back.png">        
            </div>
        </div>
    </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity';
import CardF from '@/components/cards/CardF';
import CardH from '@/components/cards/CardH';

export default {
    components:{
        'v-card-f':CardF,
        'v-card-h':CardH
    },
    data:()=>{
		return{
            totalContent: 2,
			contentLoaded : 0,
            chapter: null,
		}
	},
    methods: {
        async getContent(){
            this.lang = (this.$route.name == 'index') ? 'en' : this.$route.name;
            const query_content = groq`*[_type == "chapterSeven"][0]{
                "title" : title['${this.lang}'],
                "description" : description['${this.lang}'],
                
                "document_left" : document_left['${this.lang}'],
                "document_right" : document_right['${this.lang}'],
            }`;
            this.chapter = await this.$sanity.fetch(query_content);
            this.contentLoaded++;
        },
        handleLoad(){
            this.contentLoaded++;
        },
        animate(){
            this.$nextTick(() => {
                // if we want to animate something later 
                var tlSection6 = this.$gsap.timeline({
                    scrollTrigger: {
                        trigger: "#Scene7",
                        scrub: 0,
                        start: () =>
                            "top top-=" +
                            (document.querySelector("#Scene7").offsetLeft - window.innerWidth),
                        end: () => "+=" + document.querySelector("#Scene7").offsetWidth,
                        onEnter: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene7';
                            $nuxt.$emit('changeURL', { 'url'  : '7'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 7})
                        },
                        onEnterBack: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene7';
                            $nuxt.$emit('changeURL', { 'url'  : '7'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 7})
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
                this.animate()
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

