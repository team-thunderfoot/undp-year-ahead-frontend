<template>
    <section class="b--page-a__item b--chapter11-a" id="Scene11" ref="Scene11"  v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img ref="parallax-ft" 
                :style="{ left: '66%', position: 'absolute' }"
                v-lazy="require(`@/assets/img/chapter-11/front-parallax.png`)" alt="front" />
                <img
                    class="b--ss-a__ft-items__media"
                    alt="front"
                    v-lazy="require(`@/assets/img/chapter-11/front-elements.png`)"
                />
            </div>
            <div class="b--ss-a__content">
                <!-- first position element, card -->
                <!-- move up with a modifier in the scss of the scene -->
                <div 
                    class="b--chapter11-a__content" 
                    :class="'b--chapter11-a__content--'+`${this.lang}`"
                    ref="boxContent" :style="{ left: '62%'}"
                >
                    <v-card-f 
                        :title="chapter.intro_title" 
                        :description="chapter.intro_description"
                        :customClass="'b--card-f--third b--card-f--'+ `${this.lang}`"
                    />
                </div>
                <!-- boxes -->
                <div class="b--chapter11-a__media" :style="{ left: '77%'}" ref="boxes" >
                    <img class="b--media-a" v-lazy="require(`@/assets/img/chapter-11/boxes.svg`)" alt="boxes" />
                </div>
                <!-- second position element, info -->
                <div class="b--chapter11-a__info" ref="infoChapter" :style="{ left: '92%'}">
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
                <div class="b--chapter11-a__artwork b--chapter11-a__artwork--second" :style="{ left: '85%'}" ref="eyes1" >
                    <div class="b--motion-h" v-lazy:background-image="require(`@/assets/img/chapter-11/blink_2a.png`)"></div>
                </div>
                <!-- blink 2b -->
                <div class="b--chapter11-a__artwork b--chapter11-a__artwork--third" :style="{ left: '108.4%'}" ref="eyes2" >
                    <div class="b--motion-q" v-lazy:background-image="require(`@/assets/img/chapter-11/blink_2b.png`)"></div>
                </div> 
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__parallax" 
                ref="parallax-bg" 
                :style="{ left: '170%' }"
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
    mixins: [Parallax,Animation],
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

        AsambleParallaxObjs() {
            var motion = [
                { obj: this.$refs['parallax-bg'], intensity: 21 },
                { obj: this.$refs['eyes1'], intensity: 8 },
                { obj: this.$refs['eyes2'], intensity: 8 },
                { obj: this.$refs['infoChapter'], intensity: 8 },
                { obj: this.$refs['parallax-ft'], intensity: 8 },
                { obj: this.$refs['boxes'], intensity: 8 },
                { obj: this.$refs['boxContent'], intensity: 8 },
            ]
            motion.forEach((item) => {
                this.parallaxMove({
                el: item.obj,
                intensity: item.intensity,
                duration: this.$refs['Scene11'].offsetWidth,
                containerAnimation: this.scrollTween,
                scrub: true,
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
                    sceneID: 11,
                    scrub: 0,
                    scrollTween: this.scrollTween,
                })
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

