
<template>
    <div class="b--nav-a" v-if="nav">
        <div class="b--nav-a__ft-items">
            <div class="b--nav-a__ft-items__hd">
                <a :href="nav.logo_url" target="_blank" rel="noopener noreferrer"><img src="@/assets/img/en/undp_en.svg" alt="Undp Logo"></a>
            </div>
            <div class="b--nav-a__ft-items__bd">
                <p>{{nav.nav_title}}</p>
            </div>
            <div class="b--nav-a__ft-items__ft">
                <a class="b--nav-a__ft-items__ft__link" :href="nav.facebook" target="_blank" rel="noopener noreferrer">
                    <img class="b--nav-a__ft-items__ft__media" src="@/assets/img/facebook.svg" alt="Facebook">
                </a>
                <a class="b--nav-a__ft-items__ft__link" :href="nav.twitter" target="_blank" rel="noopener noreferrer">
                    <img class="b--nav-a__ft-items__ft__media" src="@/assets/img/twitter.svg" alt="Twitter">
                </a>
                <a class="b--nav-a__ft-items__ft__link" :href="nav.linkedin" target="_blank" rel="noopener noreferrer">
                    <img class="b--nav-a__ft-items__ft__media" src="@/assets/img/linkedin.svg" alt="Linkedin">
                </a>
            </div>
            <div class="b--nav-a__ft-items__artwork">
                <div class="b--nav-a__ft-items__artwork__item" :style="{ height: this.progressValue+'%' }" ></div>
            </div>
        </div>
        <div class="b--nav-a__bg-items"></div>
    </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
    methods : {
        async getContent() {
        this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
        const query_content = groq`*[_type == "sitesettings"][0]{
                "logo_url" : logo_url['${this.lang}'],
                "nav_title" : nav_title['${this.lang}'],

                "facebook" : facebook,
                "twitter" : twitter,
                "linkedin" : linkedin,

                

            }`
            this.nav = await this.$sanity.fetch(query_content)
        },
    },
    data:()=>{
		return{
            progressValue:0,
            nav : ''
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