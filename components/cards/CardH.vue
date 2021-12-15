<template>
    <div class="b--card-h">
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
                    <p><strong>Human Development</strong> Report 2022 will focus on “Shaping our Future in a World in Transformation”.</p>
                    <!-- <SanityContent :blocks="content" /> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : [
        'content'
    ]
}
</script>