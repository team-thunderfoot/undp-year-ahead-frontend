<template>
    <section class="b--page-a__item b--chapter11-a" id="Scene11" ref="Scene11"  v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img v-lazy="require(`@/assets/img/chapter-11/front-parallax.png`)" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <!-- first position element, card -->
                <!-- move up with a modifier in the scss of the scene -->
                <div 
                    class="b--chapter11-a__content" 
                    :class="'b--chapter11-a__content--'+`${this.lang}`"
                >
                    <v-card-f 
                        :title="chapter.intro_title" 
                        :description="chapter.intro_description"
                        :customClass="'b--card-f--third b--card-f--'+ `${this.lang}`"
                    />
                </div>
                <!-- boxes -->
                <div class="b--chapter11-a__media">
                    <img v-lazy="require(`@/assets/img/chapter-11/boxes.svg`)" alt="boxes" />
                </div>
                <!-- second position element, info -->
                <div class="b--chapter11-a__info">
                    <v-info-chapter :info="chapter"/>
                </div>
                <!-- plant animation -->
                <div class="b--chapter11-a__artwork">
                    <div
                        class="b--motion-i"
                        v-lazy:background-image="
                        require(`@/assets/img/chapter-11/plant_wind_3.png`)
                        "
                    >
                    </div>
                </div>
                <!-- blink 2a -->
                <div class="b--chapter11-a__artwork b--chapter11-a__artwork--second">
                    <div class="b--motion-h" v-lazy:background-image="require(`@/assets/img/chapter-11/blink_2a.png`)"></div>
                </div>
                <!-- blink 2b -->
                <div class="b--chapter11-a__artwork b--chapter11-a__artwork--third">
                    <div class="b--motion-q" v-lazy:background-image="require(`@/assets/img/chapter-11/blink_2b.png`)"></div>
                </div> 
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__parallax" 
                ref="parallax-bg" 
                v-lazy="require(`@/assets/img/chapter-11/back-parallax.png`)"
                alt="back parallax"> 
                <img class="b--ss-a__bg-items__back" 
                @load="handleLoad"  
                @error="handleLoad" 
                alt="back"
                :src="require(`@/assets/img/chapter-11/back.png`)">          
            </div>
        </div>
    </section>
</template>

<script>
import CardF from '@/components/cards/CardF';
import InfoChapter from '@/components/infochapter/Infochapter';

import Parallax from '@/mixins/Parallax.js';
import Animation from '@/mixins/Animation.js';

export default {
    mixins: ['infoWindow',Parallax,Animation],
    components:{
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
    props: ['scrollTween'],
    methods: {
        handleLoad(){
            this.contentLoaded++;
        },
        animate(){
            this.$nextTick(() => {
                this.startAnimation({
                    sceneID : 11,
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
        this.chapter =  chapter.ChapterEleven;
        this.contentLoaded++
    }
}
</script>

