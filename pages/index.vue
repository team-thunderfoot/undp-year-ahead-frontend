<template>
    <div>
        
        <div v-if="this.isLoaded =! false">
            <div class="b--noise-a"></div>
            <v-nav />
            <v-lang />
            <v-story />
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
            this.$nuxt.$on('siteLoaded', () => {
                setTimeout(() => {
                    this.isLoaded = true;
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