<template>
    <div class="b--social-a">
        <h3 class="b--social-a__title">Share this Story</h3>
        <div class="b--social-a__list-group">
            <div class="b--social-a__list-group__item" v-for="(item, index) in social" :key=index>
                <a :href=item.url target="_blank">
                    <img :src=item.icon>
                </a>
            </div>
        </div>

    </div>    
</template>
<script>

export default {
    data: () => {
        return {
            social: {
                facebook: {
                    url: "https://www.facebook.com/sharer/sharer.php?u=" + window.location.host,
                    icon: require(`@/assets/img/social/facebook.svg`)
                },
                instagram: {
                    url: "https://twitter.com/intent/tweet?url="+ window.location.host + "&text=Check%20out%20this%20UNDP%20Page",
                    icon: require(`@/assets/img/social/instagram.svg`)
                },
                linkedin: {
                    url: "http://www.linkedin.com/shareArticle?mini=true&url=" + window.location.host,
                    icon: require(`@/assets/img/social/linkedin.svg`),
                },
                twitter: {
                    url: "mailto:?subject=Check out this UNDP Page&amp;body=Check out this UNDP Page" + + window.location.host,
                    icon: require(`@/assets/img/social/twitter.svg`)
                }
            }
        }
    }
}
</script>
