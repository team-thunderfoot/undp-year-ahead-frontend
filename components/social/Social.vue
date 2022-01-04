<template>
    <div class="b--social-a" v-if="social">
        <h4 class="b--social-a__title">{{chapter.share_this_story}}</h4>
        <div class="b--social-a__list-group">
            <div class="b--social-a__list-group__item">
                <a :href="social.facebook.url" target="_blank" rel="noopener noreferrer"  aria-label="share by facebook">
                    <img :src="social.facebook.icon" alt="facebook">
                </a>
            </div>
            <div class="b--social-a__list-group__item" >
                <a :href="social.instagram.url" target="_blank" rel="noopener noreferrer"  aria-label="share by instagram">
                    <img :src="social.instagram.icon" alt="instagram">
                </a>
            </div>
            <div class="b--social-a__list-group__item">
                <a :href="social.linkedin.url" target="_blank" rel="noopener noreferrer"  aria-label="share by linkedin">
                    <img :src="social.linkedin.icon" alt="linkedin">
                </a>
            </div>
            <div class="b--social-a__list-group__item">
                <a :href="social.twitter.url" target="_blank" rel="noopener noreferrer"  aria-label="share by twitter">
                    <img :src="social.twitter.icon" alt="twitter">
                </a>
            </div>

        </div>
    </div>    
</template>
<script>
import LanguageData from '~/mixins/LanguageData';
export default {
    mixins: [LanguageData],
    data:()=>{
		return{
            social: null,
            lang : null
		}
	},
    props : [
        'chapter'
    ],
    methods : {
        getContent(){
            this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
            var settings = this.getLanguageSettings({lang : this.lang});
            var settings = settings.SocialIcons;
            if(settings){
                this.social = {
                    facebook: {
                        url: settings.facebook,
                        icon: require(`@/assets/img/social/facebook.svg`)
                    },
                    instagram: {
                        url: settings.instagram,
                        icon: require(`@/assets/img/social/instagram.svg`)
                    },
                    linkedin: {
                        url: settings.linkedin,
                        icon: require(`@/assets/img/social/linkedin.svg`),
                    },
                    twitter: {
                        url: settings.twitter,
                        icon: require(`@/assets/img/social/twitter.svg`)
                    }
                };
            }
        }
    },
    mounted(){
        if(process.client){
            this.getContent();
        }
    }
}
</script>
