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
                    url: "https://www.google.es",
                    icon: require(`@/assets/img/social/facebook.svg`)
                },
                instagram: {
                    url: "https://www.google.es",
                    icon: require(`@/assets/img/social/instagram.svg`)
                },
                linkedin: {
                    url: "https://www.google.es",
                    icon: require(`@/assets/img/social/linkedin.svg`),
                },
                twitter: {
                    url: "https://www.google.es",
                    icon: require(`@/assets/img/social/twitter.svg`)
                }
            }
        }
    }
}
</script>
