<template>
    <div class="b--progress-a">
        <a href="#" id="prev" ref="prev" @click.prevent="goTo('prev')" class="b--progress-a__arrow b--progress-a__arrow--prev"> </a>
        <ul class="b--progress-a__wrapper">
            <li class="b--progress-a__wrapper__item" ref="first" @click.prevent="goTo('Scene1','first')">
                <span class="b--progress-a__wrapper__item__label"></span>
            </li>
            <li class="b--progress-a__wrapper__item" ref="second" @click.prevent="goTo('Scene2','second')">
                <span class="b--progress-a__wrapper__item__label"></span>
            </li>
        </ul>
        <a href="#" id="next" ref="next" @click.prevent="goTo('next')" class="b--progress-a__arrow b--progress-a__arrow--next"> </a>
    </div>
</template>
<script>
export default {
    methods :  {
        goTo(scene, reference) {
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
        console.log(this.$refs.first);
        this.$refs.first.classList.add("is-current");
    }
}
</script>
<style lang="scss">
    @import '@/sass/framework/components/progress/progress-a.scss';
</style>