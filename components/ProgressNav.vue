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

<style lang="scss" scoped>
.b--progress-a {
    position: fixed;
    bottom: 10%;
    width: 100%;
    &__wrapper{
        list-style: none;
        display: flex;
        align-items: center;
        background-color: #be564b;
        border-radius: 100px;
        padding: 8px 16px;
        width: fit-content;
        margin: 0 auto;
        &__item{
            background-color: #f1cdbb;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            &:not(:last-child){
                margin-right: 32px;
            }
            &:hover{
                transform: scale(1.2);
            }
            &.is-current{
               transform: scale(2);

            }
        }
    }
}


</style>