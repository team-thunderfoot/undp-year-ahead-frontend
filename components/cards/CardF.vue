<template>
    <div class="b--card-f" :class="customClass">
        <div class="b--card-f__hd">
            <!-- card-e -->
            <div class="b--card-e">
                <h4 class="b--card-e__title">{{title}}</h4>
            </div>
        </div>
        <div class="b--card-f__bd">
            <!-- card-a -->
            <div class="b--card-a" :class="cardACustomClass">
                <div class="b--card-a__artwork"></div>
                <div class="b--card-a__wrapper">
                    <div class="b--content-a" v-html="description"></div>
                    <a class="b--card-a__wrapper__link" v-if="loadMore" :href="loadMoreURL" target="_blank" rel="noopener noreferrer"> {{loadMoreBtn}} </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'title',
        'description', 
        'customClass', 
        'cardACustomClass',
        'loadMore',
        'loadMoreBtn',
        'loadMoreURL'
    ],
}
</script>

<style>

</style>