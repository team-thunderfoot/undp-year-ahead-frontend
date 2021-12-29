<template>
    <div>
        <a class="b--brand-a" :href="nav.logo_url" target="_blank" rel="noopener noreferrer">
            <img :src="require(`@/assets/img/nav/${nav.logo}`)" alt="Undp Logo">
        </a>
        <div class="b--nav-a" v-if="nav">
            <div class="b--nav-a__ft-items">
                <div class="b--nav-a__ft-items__bd">
                    <a href="#" @click.prevent="goToStart()"><p>{{nav.nav_title}}</p></a>
                </div>
                <div class="b--nav-a__ft-items__ft">
                    <a class="b--nav-a__ft-items__ft__link" :href="social.facebook" target="_blank" rel="noopener noreferrer">
                        <img class="b--nav-a__ft-items__ft__link__media b--nav-a__ft-items__ft__link__media--facebook" src="@/assets/img/social/facebook-black.svg" alt="Facebook">
                    </a>
                    <a class="b--nav-a__ft-items__ft__link" :href="social.instagram" target="_blank" rel="noopener noreferrer">
                        <img class="b--nav-a__ft-items__ft__link__media b--nav-a__ft-items__ft__link__media--instagram" src="@/assets/img/social/instagram-black.svg" alt="Instagram">
                    </a>
                    <a class="b--nav-a__ft-items__ft__link" :href="social.linkedin" target="_blank" rel="noopener noreferrer">
                        <img class="b--nav-a__ft-items__ft__link__media b--nav-a__ft-items__ft__link__media--linkedin" src="@/assets/img/social/linkedin-black.svg" alt="Linkedin">
                    </a>
                    <a class="b--nav-a__ft-items__ft__link" :href="social.twitter" target="_blank" rel="noopener noreferrer">
                        <img class="b--nav-a__ft-items__ft__link__media b--nav-a__ft-items__ft__link__media--twitter" src="@/assets/img/social/twitter-black.svg" alt="Twitter">
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
export default {
    methods : {
        getContent() {
            this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
            var settings = this.getLanguageSettings({lang : this.lang});
            this.nav = settings.Nav;
            this.social = settings.SocialIcons;
        },
        goToStart() {
            var sceneName  = document.querySelector("#Scene1");
            var pos =  sceneName.offsetLeft;
            this.$gsap.to(window, {duration: 4, scrollTo: pos});
            this.$router.push({path: this.$route.path, query: { scene:  1}})
        }
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