<template>
    <section class="b--page-a__item" id="Scene9" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img v-lazy="require(`@/assets/img/chapter-9/front.png`)" 
                alt="front"
                />
            </div>
            <div class="b--ss-a__content">
                <!-- first position element, card -->
                <!-- move up from the scss -->
                <div class="b--chapter9-a__content">
                    <v-card-f 
                        :title="chapter.title" 
                        :description="chapter.description"
                        customClass="b--card-f--second"
                        cardACustomClass="b--card-a--second"
                    />
                </div>
                <!-- second position element, info -->
                <div class="b--chapter9-a__info">
                    <v-info-chapter :info="chapter"/>
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-9/back.png">        
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
            const query_content = groq`*[_type == "chapterTwo"][0]{
                "title" : title['${this.lang}'],
                "content" : content['${this.lang}'],
                "description" : description['${this.lang}']
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
                        trigger: "#Scene9",
                        scrub: 0,
                        start: () =>
                            "top top-=" +
                            (document.querySelector("#Scene9").offsetLeft - window.innerWidth),
                        end: () => "+=" + document.querySelector("#Scene9").offsetWidth,
                        onEnter: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene6';
                            $nuxt.$emit('changeURL', { 'url'  : '9'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 9})
                        },
                        onEnterBack: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene6';
                            $nuxt.$emit('changeURL', { 'url'  : '9'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 9})
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

