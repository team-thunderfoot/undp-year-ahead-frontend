<template>
    <section class="b--page-a__item" id="Scene11" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img v-lazy="require(`@/assets/img/chapter-11/front.png`)" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <!-- first position element, card -->
                <div class="b--chapter11-a__content">
                    <v-card-f 
                        :title="chapter.title" 
                        :description="chapter.description"
                        customClass="b--card-f--third"
                    />
                </div>
                <!-- second position element, info -->
                <div class="b--chapter11-a__info">
                    <v-info-chapter :info="chapter"/>
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-11/back.png">        
            </div>
        </div>
    </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity';
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'
import CardF from '@/components/cards/CardF';
import InfoChapter from '@/components/infochapter/Infochapter';

export default {
    mixins: ['infoWindow'],
    components:{
        SanityContent,
        'v-card-f':CardF,
        'v-info-chapter' : InfoChapter,
    },    
    data:()=>{
		return{
            totalContent: 2,
			contentLoaded : 0,
            chapter: null,
            infoWindowStatus: true,
		}
	},
    methods: {
        async getContent(){
            this.lang = (this.$route.name == 'index') ? 'en' : this.$route.name;
            const query_content = groq`*[_type == "chapterEleven"][0]{
                "title" : title['${this.lang}'],
                "description" : description['${this.lang}'],
                
                "tooltip_label" : tooltip_label['${this.lang}'],
                "tooltip_link" : tooltip_link['${this.lang}'],
                "tooltip_date" : tooltip_date['${this.lang}']
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
                        trigger: "#Scene11",
                        scrub: 0,
                        start: () =>
                            "top top-=" +
                            (document.querySelector("#Scene11").offsetLeft - window.innerWidth),
                        end: () => "+=" + document.querySelector("#Scene11").offsetWidth,
                        onEnter: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene6';
                            $nuxt.$emit('changeURL', { 'url'  : '11'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 11})
                        },
                        onEnterBack: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene6';
                            $nuxt.$emit('changeURL', { 'url'  : '11'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 11})
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

