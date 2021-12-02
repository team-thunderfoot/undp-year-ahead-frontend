<template>
    <div class="b--progress-a">
        <ul class="b--progress-a__wrapper">
            <li class="b--progress-a__wrapper__item" ref="first" @click.prevent="goTo('chapter1')">
                <svg class="b--progress-a__wrapper__item__icon"><use xlink:href="#checkmark-bold"/></svg>
                <span class="b--progress-a__wrapper__item__label"></span>
            </li>
            <li class="b--progress-a__wrapper__item" ref="second" @click.prevent="goTo('chapter2')">
                <svg class="b--progress-a__wrapper__item__icon"><use xlink:href="#checkmark-bold"/></svg>
                <span class="b--progress-a__wrapper__item__label"></span>
            </li>
            <li class="b--progress-a__wrapper__item" ref="third" @click.prevent="goTo('chapter3')">
                <svg class="b--progress-a__wrapper__item__icon"><use xlink:href="#checkmark-bold"/></svg>
                <span class="b--progress-a__wrapper__item__label"></span>
            </li>
            <li class="b--progress-a__wrapper__item" ref="fourth" @click.prevent="goTo('chapter4')">
                <svg class="b--progress-a__wrapper__item__icon"><use xlink:href="#checkmark-bold"/></svg>
                <span class="b--progress-a__wrapper__item__label"></span>
            </li>
        </ul>
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
