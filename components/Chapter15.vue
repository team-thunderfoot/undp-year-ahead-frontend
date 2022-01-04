<template>
    <section class="b--page-a__item b--chapter15-a" id="Scene15" ref="Scene15" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img :src="require(`@/assets/img/chapter-15/front-${this.lang}.png`)" alt="front" @load="handleLoad"
                @error="handleLoad"/>
            </div>
            <div class="b--ss-a__content">
                <!-- first position element, chapter title -->
                <div 
                    class="b--chapter15-a__content"
                    :class="'b--chapter15-a__content--' + `${this.lang}`"
                >
                    <v-card-f 
                        :title="chapter.intro_title"
                        :description="chapter.intro_description"
                        :customClass="'b--card-f--'+ `${this.lang}`"
                    />
                </div>
                <!-- second position element, quote -->
                <div class="b--chapter15-a__content b--chapter15-a__content--second">
                    <v-quote-a 
                        :chapter="chapter"
                        customClass="b--quote-a--third"
                    />
                </div>
                <!-- arrow -->
                <div class="b--chapter15-a__artwork">
                    <div class="b--motion-o" :style="'background-image: url(' + require(`@/assets/img/chapter-15/arrow.png`) + ')'"></div>
                </div>
                <!-- wheel -->
                <div class="b--chapter15-a__artwork b--chapter15-a__artwork--second">
                    <img
                        @load="handleLoad"
                        @error="handleLoad"
                        src="@/assets/img/chapter-4/wheel.png"
                        alt="wheel"
                        title="wheel"
                    />
                </div>
                <!-- card-i -->
                <div class="b--chapter15-a__content b--chapter15-a__content--third">
                    <v-card-i
                    :customClass="'b--card-i--'+ `${this.lang}`"
                    :chapter="chapter"
                    :settings="settings"
                    />
                </div>
                <!-- social -->
                <div class="b--chapter15-a__content b--chapter15-a__content--fourth" :class="'b--chapter15-a__content--fourth--'+ `${this.lang}`">
                    <v-social-a :chapter="chapter"></v-social-a>
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-15/back.png" alt="back">        
            </div>
        </div>
    </section>
</template>

<script>
import CardF from '@/components/cards/CardF';
import CardI from '@/components/cards/CardI';
import QuoteA from '@/components/quote/Quote';
import SocialA from '@/components/social/Social.vue';

import Parallax from '@/mixins/Parallax.js';
import Animation from '@/mixins/Animation.js';

export default {
    mixins: [Parallax,Animation],
    components:{
        'v-card-f':CardF,
        'v-card-i':CardI,
        'v-quote-a':QuoteA,
        'v-social-a':SocialA
    },
    data:()=>{
		return{
            totalContent: 4,
			contentLoaded : 0,
            chapter: null,
            settings : null
		}
	},
    props: ['scrollTween'],
    methods: {
        handleLoad(){
            this.contentLoaded++;
        }
    },
    watch: {
        contentLoaded(newValue, oldValue) {
            if(newValue == this.totalContent ) {
                // emits on in Story.vue
                $nuxt.$emit('assetLoaded');
            }
        },
         scrollTween(newValue, oldValue){
            if (newValue ) {
                this.startAnimation({
                    sceneID : 15,
                    scrollTween : this.scrollTween
                })
            } 
        }
    },
    created() {
        this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
        var chapter = this.getLanguageData({lang : this.lang});
        this.chapter =  chapter.ChapterFifteen;
        var settings = this.getLanguageSettings({lang : this.lang});
        this.settings = settings.Nav;
        this.contentLoaded++;
    }
}
</script>

