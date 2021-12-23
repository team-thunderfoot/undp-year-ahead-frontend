<template>
    <div class="b--card-h" :class="customClass">
        <div class="b--card-h__back-items">
            <img
            v-lazy="require(`@/assets/img/card-h-bg.png`)"
            alt="tv"
            title="tv"
            class="b--card-h__back-items__media"
            />
        </div>
        <div class="b--card-h__front-items">
            <div class="b--card-h__front-items__wrapper">
                <div class="b--card-h__front-items__wrapper__content">
                    <!-- <SanityContent :blocks="content" :serializers="serializers"/> -->
                    <div v-html="content"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content';
import SanityLinks from '~/mixins/sanityLinks';
export default {
    mixins: [SanityLinks],
    props : [
        'content',
        'lang',
        'customClass'
    ],
    components: {
        SanityContent,
    },
    created(){
        this.serializers = this.getSerialize();
    }
}
</script>