<template>
    <section class="b--page-a__item b--chapter14-a" id="Scene14" ref="Scene14" v-if="chapter">
        <div class="b--ss-a"> 
            <div class="b--ss-a__divider">
                <div class="b--chapter14-a__divider">
                <img
                    @load="handleLoad"
                    @error="handleLoad"
                    class="b--chapter14-a__divider__media b--chapter14-a__divider__media--right"
                    src="@/assets/img/chapter-13/13-14_tree.png"
                    alt="13-14_tree"
                />
                </div>
            </div>
            <div class="b--ss-a__middle-items">
                <img
                @load="handleLoad"
                @error="handleLoad"
                :style="{ left: '358%'}"
                class="b--ss-a__middle-items__parallax"
                src="@/assets/img/chapter-13/middle-parallax.png"
                alt="middle"
                ref="parallax-middle"
                
                />
            </div>
            <div class="b--ss-a__ft-items">
                <img @load="handleLoad"
                @error="handleLoad" :style="{ left: '578%'}" class="b--ss-a__ft-items__parallax" ref="parallax-ft" src="@/assets/img/chapter-13/front-parallax.png" alt="front" />
            </div>
            <div class="b--ss-a__content">
                <!-- first position element, card -->
                <div 
                class="b--chapter14-a__content"
                :class="'b--chapter14-a__content--' + `${this.lang}`"
                ref="boxContent"
                :style="{ left: '362%'}"
                >
                    <v-card-f 
                        :title="chapter.intro_title" 
                        :description="chapter.intro_description"
                        :customClass="'b--card-f--third b--card-f--'+ `${this.lang}`"
                        cardACustomClass="b--card-a--second"
                    />
                </div> 
                <div class="b--chapter14-a__artwork" ref="plantwater1" :style="{ left: '390%'}">
                    <div class="b--motion-m" :style="'background-image: url(' + require(`@/assets/img/chapter-13/plant_water.png`) + ')'">
                    </div>
                </div>
                <div class="b--chapter14-a__artwork b--chapter14-a__artwork--second" ref="plantwater2" :style="{ left: '435%'}">
                    <div class="b--motion-n"  :style="'background-image: url(' + require(`@/assets/img/chapter-13/plant_water_2.png`) + ')'">
                    </div>
                </div>
                <div class="b--chapter14-a__artwork b--chapter14-a__artwork--third" ref="lines1" :style="{ left: '448%'}">
                    <div class="b--motion-k" :style="'background-image: url(' + require(`@/assets/img/chapter-13/lines_spritesheet.png`) + ')'">
                    </div>
                </div>  
                <div class="b--chapter14-a__artwork b--chapter14-a__artwork--fourth" ref="lines2" :style="{ left: '390%'}">
                    <div class="b--motion-k" v-lazy:background-image="
                    require(`@/assets/img/chapter-13/lines_spritesheet.png`)
                    ">
                    </div>
                </div>       
            </div>
            
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__parallax" @load="handleLoad"
                @error="handleLoad"
                alt="back-parallax"
                ref="parallax-bg"
                :style="{ left: '9%' }"
                src="@/assets/img/chapter-13/back-parallax.png"
                >  
                <img class="b--ss-a__bg-items__back" 
                @load="handleLoad" 
                @error="handleLoad" 
                alt="back"
                src="@/assets/img/chapter-13/back.png"
                >        
            </div>
        </div>
    </section>
</template>

<script>
import CardF from '@/components/cards/CardF';

import Parallax from '@/mixins/Parallax.js';
import Animation from '@/mixins/Animation.js';

export default {
    mixins: [Parallax,Animation],
    components:{
        'v-card-f':CardF,
    }, 
    data:()=>{
		return{
            totalContent: 6,
			contentLoaded : 0,
            chapter: null
		}
	},
    props: ['scrollTween'],
    methods: {
        handleLoad(){
            this.contentLoaded++;
        },
        AsambleParallaxObjs() {
            var motion = [
                { obj: this.$refs['parallax-bg'], intensity: 1 },
                { obj: this.$refs['parallax-ft'], intensity: 65},
                { obj: this.$refs['parallax-middle'], intensity: 40},
                { obj: this.$refs['plantwater1'], intensity: 40},
                { obj: this.$refs['plantwater2'], intensity: 40},
                { obj: this.$refs['lines1'], intensity: 40},
                { obj: this.$refs['lines2'], intensity: 40},
                { obj: this.$refs['boxContent'], intensity: 40},
            ]
            motion.forEach((item) => {
                this.parallaxMove({
                el: item.obj,
                intensity: item.intensity,
                duration: this.$refs['Scene14'].offsetWidth,
                containerAnimation: this.scrollTween,
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
                //motion frontend and backend elements
                this.AsambleParallaxObjs()
                // mixin function
                this.startAnimation({
                    sceneID: 14,
                    scrub: 0,
                    scrollTween: this.scrollTween,
                })
            } 
        }
    },
    created() {
        // if(process.client){
            this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
            var chapter = this.getLanguageData({lang : this.lang});
            this.chapter =  chapter.ChapterFourteen;
            this.contentLoaded++
        // }
    }
}
</script>

