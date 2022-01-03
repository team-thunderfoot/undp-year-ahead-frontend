<template>
    <div>
        <a class="b--brand-a" :href="nav.logo_url" target="_blank" rel="noopener noreferrer">
            <img :src="require(`@/assets/img/nav/${nav.logo}`)" alt="Undp Logo">
        </a>
        <div class="b--nav-a" v-if="nav">
            <div class="b--nav-a__ft-items">
                <div class="b--nav-a__ft-items__bd">
                    <a href="#" @click.prevent="goToStart()" class="b--nav-a__ft-items__bd__link">{{nav.nav_title}}</a>
                </div>
                <div class="b--nav-a__ft-items__ft">
                    <v-lang />
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
import Lang from '@/components/lang'
export default {
    components: {
        'v-lang': Lang,
    },
    methods : {
        getContent() {
            this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
            var settings = this.getLanguageSettings({lang : this.lang});
            this.nav = settings.Nav;
            this.social = settings.SocialIcons;
        },
        goToStart() {
            this.$router.push({path: this.$route.path, query: { scene:  1}})
            window.location  =  this.$route.path + "?scene=1";
        }
    },
    data:()=>{
		return{
            progressValue:0,
            nav : '',
            lang : ''
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