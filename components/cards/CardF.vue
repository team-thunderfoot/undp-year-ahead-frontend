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
                    <SanityContent :blocks="description" :serializers="serializers" />
                    <div v-if="loadMore">
                        <a class="b--card-a__wrapper__link" :href="loadMoreURL"> {{loadMoreBtn}} </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content';
import Links from '~/components/links/Links.vue';
const serializers = {
    marks : {
        link : Links
    }
};
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
    components: {
        SanityContent,
    },
    data: () => {
    return {
      serializers: serializers,
    }
  },
}
</script>

<style>

</style>