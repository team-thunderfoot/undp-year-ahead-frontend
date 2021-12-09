<template>
    <div>
        <div>
            <div class="b--noise-a"></div>
            <v-nav />
            <v-lang />
            <v-story :positionBaseOnURL="positionBaseOnURL"/>
            <v-progress v-if="isLoaded" @positionBasedURL="positionBasedURL"/>
        </div>

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
import Progress from '@/components/Progress/Progress.vue';

export default {
	data:()=>{
		return{
			isLoaded : false,
            positionBaseOnURL :false
		}
	},
    components : {
        'v-nav':Nav,
        'v-lang':Lang,
        'v-story':Story,
        'v-progress' : Progress
	},
    methods : {
        positionBasedURL(payload){
            console.log('positionBaseOnURL',this.positionBaseOnURL);
            if(process.client){
                var currentURL = window.location.href;
                var pathname = currentURL.split('/');	
                if(pathname[pathname.length-1].includes("Scene")){
                    this.positionBaseOnURL = true;
                }
            }
		},
    },
    created(){
        if(process.client){
            this.$nuxt.$on('siteLoaded', () => {
                setTimeout(() => {
                    this.isLoaded = true;
                    this.positionBasedURL();
                }, 300);
            })
        }
    }
}
</script>

<style lang="scss">
    @import '@/sass/index.scss';
    .test{
        position:fixed;
        left:50px;
        top:120px;
        background:red;
    }
</style>