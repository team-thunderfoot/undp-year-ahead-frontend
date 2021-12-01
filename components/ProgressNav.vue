<template>
    <div class="b--progress-a__wrapper">
        <ul class="b--progress-a">
            <li v-bind:class="['b--progress-a__item width-percentage-' + refValue]" ref="firstP" > 
                <svg class="b--progress-a__item__icon"><use xlink:href="#checkmark-bold"/></svg>
                <span class="b--progress-a__item__title ProgressBar-stepLabel">Scene1</span>
            </li>
            <li class="active" v-bind:class="['b--progress-a__item width-percentage-' + refValue]" ref="secondP" >
                <svg class="b--progress-a__item__icon"><use xlink:href="#checkmark-bold"/></svg>
                <span class="b--progress-a__item__title ProgressBar-stepLabel">Scene2</span>
            </li>
            <!-- <li v-bind:class="['b--progress-a__item width-percentage-' + refValue]" ref="thirdP" >
                <svg class="b--progress-a__item__icon"><use xlink:href="#checkmark-bold"/></svg>
                <span class="b--progress-a__item__title ProgressBar-stepLabel">Scene3</span>
            </li> -->
        </ul>
    </div>
</template>
<script>
export default {
    mounted() {
        
    },
    props : [
        'refID',
        'refValue'
    ],
}
</script>