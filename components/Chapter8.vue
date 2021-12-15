<template>
    <section class="b--page-a__item" id="Scene8" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img v-lazy="require(`@/assets/img/chapter-8/front.png`)" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <!-- chapter title -->
                <div class="b--chapter8-a__content">
                    <v-card-f 
                        :title="chapter.title"
                        :description="chapter.content"
                    />
                </div>
                <!-- info chart -->
                <div class="b--chapter8-a__content b--chapter8-a__content--second">
                    <v-info-chapter :info="chapter"/>
                    <!-- <p><a href="">Commission on the Status of Women</a> 14-25 March, New York, USA</p> -->
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-8/back.png">        
            </div>
        </div>
    </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity';
import CardF from '@/components/cards/CardF';
import InfoChapter from '@/components/infochapter/Infochapter';

export default {
    components:{
        'v-card-f':CardF,
        'v-info-chapter' : InfoChapter
    },
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
            this.chapter.tooltip_link = '';
            this.chapter.tooltip_label = 'Commission on the Status of Women';
            this.chapter.tooltip_date = '14-25 March, New York, USA';
        },
        handleLoad(){
            this.contentLoaded++;
        },
        animate(){
            this.$nextTick(() => {
                // if we want to animate something later 
                var tlSection6 = this.$gsap.timeline({
                    scrollTrigger: {
                        trigger: "#Scene8",
                        scrub: 0,
                        start: () =>
                            "top top-=" +
                            (document.querySelector("#Scene8").offsetLeft - window.innerWidth),
                        end: () => "+=" + document.querySelector("#Scene8").offsetWidth,
                        onEnter: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene6';
                            $nuxt.$emit('changeURL', { 'url'  : '8'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 8})
                        },
                        onEnterBack: () => {
                            // emits on in Story.vue
                            // window.location.href =  this.$route.path  + '#Scene6';
                            $nuxt.$emit('changeURL', { 'url'  : '8'})
                            $nuxt.$emit('changeCurrent', { 'item'  : 8})
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

