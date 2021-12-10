<template>
    <div>
        <div class="b--noise-a"></div>
        <v-nav />
        <v-lang />
        <v-lang v-if="isLoaded" />
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
            // Event from Story.vue
            this.$nuxt.$on('siteLoaded', () => {
                setTimeout(() => {
                    this.isLoaded = true;
                }, 300);
            })
        }
    },
    head() {
        return {
            title: 'Project Title Spanish',
            meta: [
                { hid: 'title', name: 'title', content: 'Project Title SP' },
                { hid: 'description', name: 'description', content: 'this is meta description for SP page' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:image', property: 'og:image', content: 'https://teamthunderfoot.com/wp-content/uploads/2020/06/OG-Image-1.jpg'},
                { hid: 'og:title', property: 'og:title', content: 'Og Title Spanish'},
                { hid: 'og:description', property: 'og:description', content: 'OG Description Spanish'},
            ]
        }
    },
}
</script>
<style lang="scss">
    @import '@/sass/index.scss';
</style>