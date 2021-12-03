<template>
    <div class="b--progress-a">
        <a href="#" id="prev" ref="prev" @click.prevent="goTo('prev')" class="b--progress-a__arrow b--progress-a__arrow--prev"> </a>
        <ul class="b--progress-a__wrapper">
            <li class="b--progress-a__wrapper__item" ref="first" @click.prevent="goTo('chapter1')">
                <span class="b--progress-a__wrapper__item__label"></span>
            </li>
            <li class="b--progress-a__wrapper__item" ref="second" @click.prevent="goTo('chapter2')">
                <span class="b--progress-a__wrapper__item__label"></span>
            </li>
            <li class="b--progress-a__wrapper__item" ref="third" @click.prevent="goTo('chapter3')">
                <span class="b--progress-a__wrapper__item__label"></span>
            </li>
            <li class="b--progress-a__wrapper__item" ref="fourth" @click.prevent="goTo('chapter4')">
                <span class="b--progress-a__wrapper__item__label"></span>
            </li>
        </ul>
        <a href="#" id="next" ref="next" @click.prevent="goTo('next')" class="b--progress-a__arrow b--progress-a__arrow--next"> </a>
    </div>
</template>
<script>
export default {
    methods :  {
        goTo(payload) {
           this.$emit('goToChapter', {"section" : payload})
        }
    }
}
</script>
