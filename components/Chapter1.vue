<template>
    <section class="b--page-a__item b--chapter1-a" id="Scene1" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <!-- <div class="b--chapter1-a__artwork">
                    <img src="@/assets/img/chapter-1/bubble.svg" alt="">
                </div> -->
                <img class="b--ss-a__ft-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-1/front.png" alt=""> 
            </div>
            <div class="b--ss-a__content">
                <div class="b--chapter1-a__content">
                    <div class="b--card-a">
                        <h1 class="b--card-a__title">
                            {{chapter.title}}
                        </h1>
                        <h2 class="b--card-a__badge">
                            {{chapter.date}}
                        </h2>
                        <h3 class="b--card-a__subtitle">{{chapter.description}}</h3>
                    </div>
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-1/back.png" alt="">    
            </div>
        </div>
    </section>
</template>

<script>
// Data import
import { groq } from '@nuxtjs/sanity';

export default {
    data:()=>{
		return{
            totalContent:3,
			contentLoaded : 0,
            chapter : null,
		}
	},
    methods: {
        async getContent(){
            this.lang = (this.$route.name == 'index') ? 'en' : this.$route.name;
            const query_content = groq`*[_type == "chapterOne"][0]{
                "title" : title['`+this.lang+`'],
                "date" : date['`+this.lang+`'],
                "description" : description['`+this.lang+`']
            }`;
            this.chapter = await this.$sanity.fetch(query_content);
            this.contentLoaded++;
            console.log(this.chapter);
        },
        handleLoad(){
            this.contentLoaded++;
        },
    },
    watch: {
        contentLoaded(newValue, oldValue) {
            if(newValue == this.totalContent ) {
                $nuxt.$emit('assetLoaded')
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

