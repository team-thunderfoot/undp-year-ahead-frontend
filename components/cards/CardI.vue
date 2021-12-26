<template>
    <div class="b--card-i" :class="customClass">
        <div class="b--card-i__wrapper">
            <div class="b--card-i__wrapper__hd">
                <div class="b--card-i__wrapper__hd__media-wrapper">
                    <img
                    v-lazy="require(`@/assets/img/nav/${settings.logo}`)"
                    alt="undp"
                    title="undp"
                    class="b--card-i__wrapper__hd__media-wrapper__media"
                    />
                </div>
                <p class="b--card-i__wrapper__hd__title">{{chapter.poster_visit_title}} <a  target="_blank" rel="noopener noreferrer" class="b--card-i__wrapper__hd__title__link" :href="'https://' + chapter.poster_url">{{ chapter.poster_url}}</a></p>
            </div>
            <div class="b--card-i__wrapper__bd b--content-a">
               <div v-html="chapter.poster"></div>
            </div>
        </div>
        <div class="b--card-i__ft">
            <p class="b--card-i__text">{{chapter.copyright}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props : [
        'customClass',
        'chapter',
        'settings'
    ]
}
</script>