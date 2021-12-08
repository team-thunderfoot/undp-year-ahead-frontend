<template>
    <div class="b--lang-a" v-if="page">
        <a href="/">
            EN
        </a>
        <a href="/fr/">
            FR
        </a>
        <a href="/es/">
            ES
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
