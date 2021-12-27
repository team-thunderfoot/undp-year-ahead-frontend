<template>
    <section class="b--page-a__item b--chapter14-a" id="Scene14" ref="Scene14" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img v-lazy="require(`@/assets/img/chapter-14/front-${this.lang}.png`)" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <!-- first position element, chapter title -->
                <div 
                    class="b--chapter14-a__content"
                    :class="'b--chapter14-a__content--' + `${this.lang}`"
                >
                    <v-card-f 
                        :title="chapter.intro_title"
                        :description="chapter.intro_description"
                        :customClass="'b--card-f--'+ `${this.lang}`"
                    />
                </div>
                <!-- second position element, quote -->
                <div class="b--chapter14-a__content b--chapter14-a__content--second">
                    <v-quote-a 
                        :chapter="chapter"
                        customClass="b--quote-a--third"
                    />
                </div>
                <!-- arrow -->
                <div class="b--chapter14-a__artwork">
                    <div class="b--motion-o" v-lazy:background-image="require(`@/assets/test_sprites/arrow.png`)"></div>
                </div>
                <!-- wheel -->
                <div class="b--chapter14-a__artwork b--chapter14-a__artwork--second">
                    <img
                        v-lazy="require(`@/assets/img/chapter-3/wheel.png`)"
                        alt="wheel"
                        title="wheel"
                    />
                </div>
                <!-- card-i -->
                <div class="b--chapter14-a__content b--chapter14-a__content--third">
                    <v-card-i
                    :customClass="'b--card-i--'+ `${this.lang}`"
                    :chapter="chapter"
                    :settings="settings"
                    />
                </div>
                <!-- social -->
                <div class="b--chapter14-a__content b--chapter14-a__content--fourth" :class="'b--chapter14-a__content--fourth--'+ `${this.lang}`">
                    <v-social-a :chapter="chapter"></v-social-a>
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" @load="handleLoad"  @error="handleLoad" src="@/assets/img/chapter-14/back.png">        
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
            totalContent: 2,
			contentLoaded : 0,
            chapter: null,
            settings : null
		}
	},
    props: ['scrollTween'],
    methods: {
        handleLoad(){
            this.contentLoaded++;
        },
        animate(){
            this.$nextTick(() => {
                this.startAnimation({
                    sceneID : 14,
                    scrub:0,
                    scrollTween : this.scrollTween
                })
            })
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
                this.animate();
            } 
        }
    },
    created() {
        this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
        var chapter = this.getLanguageData({lang : this.lang});
        this.chapter =  chapter.ChapterFourteen;
        var settings = this.getLanguageSettings({lang : this.lang});
        this.settings = settings.Nav;
        this.contentLoaded++
    }
}
</script>

