<template>
    <div class="b--social-a" v-if="social">
        <h3 class="b--social-a__title">Share this Story</h3>
        <div class="b--social-a__list-group">
            <div class="b--social-a__list-group__item">
                <a :href=social.facebook.url target="_blank">
                    <img :src=social.facebook.icon>
                </a>
            </div>
            <div class="b--social-a__list-group__item">
                <a :href=social.instagram.url target="_blank">
                    <img :src=social.instagram.icon>
                </a>
            </div>
            <div class="b--social-a__list-group__item">
                <a :href=social.linkedin.url target="_blank">
                    <img :src=social.linkedin.icon>
                </a>
            </div>
            <div class="b--social-a__list-group__item">
                <a :href=social.twitter.url target="_blank">
                    <img :src=social.twitter.icon>
                </a>
            </div>

        </div>
    </div>    
</template>
<script>
import { groq } from '@nuxtjs/sanity';
export default {
    data:()=>{
		return{
            social: null,
            lang : ''
		}
	},
    methods : {
        async getContent(){
            this.lang = (this.$route.name == 'index') ? 'en' : this.$route.name;
           const query_content = groq`*[_type == "sitesettings"][0]{
                "facebook" : facebook['${this.lang}'],
                "instagram" : instagram,
                "twitter" : twitter['${this.lang}'],
                "linkedin" : linkedin,
            }`;
            this.social = await this.$sanity.fetch(query_content);
            this.social = {
                facebook: {
                    url: this.social.facebook,
                    icon: require(`@/assets/img/social/facebook.svg`)
                },
                instagram: {
                    url: this.social.instagram,
                    icon: require(`@/assets/img/social/instagram.svg`)
                },
                linkedin: {
                    url: this.social.linkedin,
                    icon: require(`@/assets/img/social/linkedin.svg`),
                },
                twitter: {
                    url: this.social.twitter,
                    icon: require(`@/assets/img/social/twitter.svg`)
                }
            };
        },
    },
    created(){
        if(process.client){
            this.getContent();
        }
    }
}
</script>
