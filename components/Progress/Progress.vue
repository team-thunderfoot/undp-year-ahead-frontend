<template>
    <div class="b--progress-a">
        <!-- <a href="#" id="prev" ref="prev" @click.prevent="goTo('prev')" class="b--progress-a__arrow b--progress-a__arrow--prev"> </a> -->
        <ul class="b--progress-a__wrapper">
            <!-- <li class="b--progress-a__wrapper__item js--first" ref="first" @click.prevent="goTo('Scene1','first')">
                <span class="b--progress-a__wrapper__item__label"></span>
            </li>
            <li class="b--progress-a__wrapper__item js--second" ref="second" @click.prevent="goTo('Scene2','second')">
                <span class="b--progress-a__wrapper__item__label"></span>
            </li> -->

            <li class="b--progress-a__wrapper__item" :class="'js--' + item" :ref="item" @click.prevent="goTo('Scene' + i++, item)" v-for="(item, i) in progressItems" :key="i">
                <span class="b--progress-a__wrapper__item__label"></span>
            </li>
        </ul>
        <!-- <a href="#" id="next" ref="next" @click.prevent="goTo('next')" class="b--progress-a__arrow b--progress-a__arrow--next"> </a> -->
    </div>
</template>
<script>
export default {
    data:()=>{
		return{
           progressItems : []
		}
	},
    methods :  {
        goTo(scene, reference) {
            console.log('scene',scene);
            console.log('reference',reference);
			if(scene){
				var sceneName  = document.querySelector("#" + scene);
                var pos =  sceneName.offsetLeft;
                this.$gsap.to(window, {duration: 2, scrollTo: pos, onComplete: () => {
                    this.$refs[reference].classList.add("is-current");
                }});
			}
        }
    },
    mounted() {
        this.progressItems = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight' , 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];

    },
    afterMounted() {
        this.$refs.one.classList.add("is-current");

    }
}
</script>
<style lang="scss">
    @import '@/sass/framework/components/progress/progress-a.scss';
</style>