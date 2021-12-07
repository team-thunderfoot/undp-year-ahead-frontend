<template>
    <div class="b--lang-a" v-if="page">
            Lang
        <a href="/">
            {{page.en}}
        </a>
        <a href="/fr/">
            {{page.fr}}
        </a>
        <a href="/es/">
            {{page.es}}
        </a>
    </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity';

export default {
    data:()=>{
		return{
            page : null
		}
	},
    methods : {
        async getContent(){
            const query_content = groq`*[_type == "page"][0]{
                title
            }`;
            var page = await this.$sanity.fetch(query_content);
            this.page = page.title;
        },
    },
    created(){
        this.getContent();
    }
}
</script>

<style>

</style>