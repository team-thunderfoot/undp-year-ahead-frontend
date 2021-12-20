<template>
    <div class="b--card-h" :class="'b--card-b--' + `${this.lang}`">
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
                    <SanityContent :blocks="content" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : [
        'content',
        'lang'
    ]
}
</script>