<template>
    <div>
        <div class="b--noise-a"></div>
        <v-nav v-if="isLoaded"  />
        <v-lang v-if="isLoaded" />
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
import Lang from '@/components/Lang';
import Story from '~/components/Story';

export default {
	data:()=>{
		return{
			isLoaded : false,
		}
	},
    components : {
        'v-nav':Nav,
        'v-lang':Lang,
        'v-story':Story,
	},
    created(){
        if(process.client){
            // Event fron Story.vue
            this.$nuxt.$on('siteLoaded', () => {
                this.isLoaded = true;
            })
        }
    },
    head() {
        return {
            title: 'Project Title EN',
            meta: [
                { hid: 'title', name: 'title', content: 'Project Title EN' },
                { hid: 'description', name: 'description', content: 'this is meta description for EN page' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:image', property: 'og:image', content: 'https://teamthunderfoot.com/wp-content/uploads/2020/06/OG-Image-1.jpg'},
                { hid: 'og:title', property: 'og:title', content: 'Og Title EN'},
                { hid: 'og:description', property: 'og:description', content: 'OG Description EN'},
            ]
        }
    },
}
</script>

<style lang="scss">
    @import '@/sass/index.scss';
</style>