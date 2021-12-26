<template>
    <div>
        <a class="b--brand-a" :href="nav.logo_url" target="_blank" rel="noopener noreferrer">
            <img :src="require(`@/assets/img/nav/${nav.logo}`)" alt="Undp Logo">
        </a>
        <div class="b--nav-a" v-if="nav">
            <div class="b--nav-a__ft-items">
                <div class="b--nav-a__ft-items__bd">
                    <p>{{nav.nav_title}}</p>
                </div>
                <div class="b--nav-a__ft-items__ft">
                    <a class="b--nav-a__ft-items__ft__link" :href="social.facebook" target="_blank" rel="noopener noreferrer">
                        <img class="b--nav-a__ft-items__ft__link__media" src="@/assets/img/facebook.svg" alt="Facebook">
                    </a>
                    <a class="b--nav-a__ft-items__ft__link" :href="social.twitter" target="_blank" rel="noopener noreferrer">
                        <img class="b--nav-a__ft-items__ft__link__media" src="@/assets/img/twitter.svg" alt="Twitter">
                    </a>
                    <a class="b--nav-a__ft-items__ft__link" :href="social.linkedin" target="_blank" rel="noopener noreferrer">
                        <img class="b--nav-a__ft-items__ft__link__media" src="@/assets/img/linkedin.svg" alt="Linkedin">
                    </a>
                </div>
                <div class="b--nav-a__ft-items__artwork">
                    <div class="b--nav-a__ft-items__artwork__item" :style="{ height: this.progressValue+'%' }" ></div>
                </div>
            </div>
            <div class="b--nav-a__bg-items"></div>
        </div>
    </div>
</template>

<script>
import LanguageData from '~/mixins/LanguageData';
export default {
    mixins: [LanguageData],
    methods : {
        getContent() {
            this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
            var settings = this.getLanguageSettings({lang : this.lang});
            this.nav = settings.Nav;
            this.social = settings.SocialIcons;
        },
    },
    data:()=>{
		return{
            progressValue:0,
            nav : '',
            lang : '',
            social : ''
		}
	},
    created(){
        if(process.client){
            this.getContent();
            // emits on Story.vue
            this.$nuxt.$on('updateProgressNav', (payload) => {
                this.progressValue = payload.value;
            })
        }
    }
}
</script>