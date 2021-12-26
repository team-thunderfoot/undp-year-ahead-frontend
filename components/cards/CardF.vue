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
                <div class="b--card-a__wrapper b--content-a">
                    <div v-html="description"></div>
                    <div v-if="loadMore">
                        <a class="b--card-a__wrapper__link" :href="loadMoreURL"> {{loadMoreBtn}} </a>
                    </div>
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