<template>
    <section class="b--page-a__item b--chapter12-a" id="Scene12" ref="Scene12"  v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img 
                @load="handleLoad"
                @error="handleLoad"
                ref="parallax-ft" 
                :style="{ left: '42%', position: 'absolute' }"
                :src="require(`@/assets/img/chapter-12/front-parallax-${this.lang}.png`)" alt="front" />
                <img
                    @load="handleLoad"
                    @error="handleLoad"
                    class="b--ss-a__ft-items__media"
                    alt="front"
                    src="@/assets/img/chapter-12/front-elements.png"
                />
            </div>
            <div class="b--ss-a__content">
                <!-- first position element, card -->
                <!-- move up with a modifier in the scss of the scene -->
                <div 
                    class="b--chapter12-a__content" 
                    :class="'b--chapter12-a__content--'+`${this.lang}`"
                    ref="boxContent" :style="{ left: '62%'}"
                >
                    <v-card-f 
                        :title="chapter.intro_title" 
                        :description="chapter.intro_description"
                        :customClass="'b--card-f--third b--card-f--'+ `${this.lang}`"
                    />
                </div>
                <!-- second position element, info -->
                <div class="b--chapter12-a__info" ref="infoChapter" :style="{ left: '92%'}">
                    <v-info-chapter :info="chapter"/>
                </div>
                <!-- boxes -->
                <div class="b--chapter12-a__media" :style="{ left: '77%'}" ref="boxes" >
                    <img class="b--media-a" src="@/assets/img/chapter-12/boxes.svg" alt="boxes" 
                        @load="handleLoad"
                        @error="handleLoad"/>
                    <!-- blink 2a -->
                    <div class="b--motion-h" :style="'background-image: url(' + require(`@/assets/img/chapter-12/blink_2a.png`) + ')'"></div>
                    <!-- blink 2b -->
                    <div class="b--motion-q" :style="'background-image: url(' + require(`@/assets/img/chapter-12/blink_2b.png`) + ')'"></div>
                </div>
                <!-- plant animation -->
                <div class="b--chapter12-a__artwork">
                    <div
                        class="b--motion-i"
                        :style="'background-image: url(' + require(`@/assets/img/chapter-12/plant_wind_3.png`) + ')'"
                    >
                    </div>
                </div>
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__parallax" 
                ref="parallax-bg" 
                @load="handleLoad"
                @error="handleLoad"
                :style="{ left: '420%' }"
                src="@/assets/img/chapter-12/back-parallax.png"
                alt="back parallax"> 
                <img class="b--ss-a__bg-items__back" 
                @load="handleLoad"  
                @error="handleLoad" 
                alt="back"
                src="@/assets/img/chapter-12/back.png">          
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
    mixins: [Parallax,Animation],
    components:{
        'v-card-f':CardF,
        'v-info-chapter' : InfoChapter,
    },    
    data:()=>{
		return{
            totalContent: 6,
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

        AsambleParallaxObjs() {
            var motion = [
                { obj: this.$refs['parallax-bg'], intensity: 55 },
                { obj: this.$refs['eyes1'], intensity: 8 },
                { obj: this.$refs['eyes2'], intensity: 8 },
                { obj: this.$refs['infoChapter'], intensity: 8 },
                { obj: this.$refs['parallax-ft'], intensity: 5 },
                { obj: this.$refs['boxes'], intensity: 8 },
                { obj: this.$refs['boxContent'], intensity: 8 },
            ]
            motion.forEach((item) => {
                this.parallaxMove({
                el: item.obj,
                intensity: item.intensity,
                duration: this.$refs['Scene12'].offsetWidth,
                containerAnimation: this.scrollTween,
                })
            })
        },
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
                //motion frontend and backend elements
                this.AsambleParallaxObjs()
                // mixin function
                this.startAnimation({
                    sceneID: 12,
                    scrub: 0,
                    scrollTween: this.scrollTween,
                })
            } 
        }
    },
    created() {
        this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
        var chapter = this.getLanguageData({lang : this.lang});
        this.chapter =  chapter.ChapterTwelve;
        this.contentLoaded++;
    }
}
</script>

