<template>
    <div>
        <div class="b--noise-a"></div>
        <v-nav v-if="isLoaded" />
         <v-story :isLoaded="isLoaded" />
        <div class="b--preloader-a" :class="{'b--preloader-a--is-hidden':isLoaded}">
            <div class="b--preloader-a__wrapper">
                <div class="b--preloader-a__wrapper__artwork"></div>
            </div>
        </div>
    </div>
</template>

<script>
// Components
import Nav from '@/components/Nav';
import Story from '~/components/Story';

import Vue from 'vue';
import LanguageData from '~/mixins/LanguageData';
Vue.mixin(LanguageData);

export default {
	data:()=>{
		return{
			isLoaded : false,
		}
	},
    components : {
        'v-nav':Nav,
        'v-story':Story,
	},
    created(){
        if(process.client){
            // Event from Story.vue
            this.$nuxt.$on('siteLoaded', () => {
                this.isLoaded = true;
            })
        }
    },
    head() {
        return {
            title: 'Nouvelle année, nouveau plan',
            meta: [
                { hid: 'title', name: 'title', content: 'Nouvelle année, nouveau plan' },
                { hid: 'description', name: 'description', content: 'Développement durable en 2022' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:image', property: 'og:image', content: require(`@/assets/img/settings/meta_pnud_fr.jpeg`)},
                { hid: 'og:title', property: 'og:title', content: 'Nouvelle année, nouveau plan'},
                { hid: 'og:description', property: 'og:description', content: 'Développement durable en 2022'},
            ],
            htmlAttrs: {
                lang: 'fr'
            },
            link: [
                {
                    rel: 'canonical',
                    href: 'https://produndp2022.netlify.app' + this.$route.path
                }
            ]
        }
    },
}
</script>
<style lang="scss">
    @import '@/sass/index.scss';
</style>