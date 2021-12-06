<template>
    <div>
        
        <div class="b--noise-a"></div>
        <v-nav />
        <v-lang />
        <v-story />

        <div class="test" v-if="this.chapterOne != true">
            {{this.chapterOne}} |
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

import { groq } from '@nuxtjs/sanity';

export default {
	data:()=>{
		return{
            lang:'fr',
			    isLoaded : false,
            chapterOne:null,
		}
	},
    components : {
        'v-nav':Nav,
        'v-lang':Lang,
        'v-story':Story,
	},
    methods:{
        async getContent(){
             const query_content = groq`*[_type == "chapterOne"][0]{
                'title':code_title['${this.lang}'],
                'title_date':date['${this.lang}'],
                'description':date['${this.lang}'],
            }`;
            this.chapterOne = await this.$sanity.fetch(query_content);

            this.isLoaded = true;
        }
    },
    created(){
        if(process.client){
            this.$nuxt.$on('siteLoaded', () => {
                this.getContent();
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