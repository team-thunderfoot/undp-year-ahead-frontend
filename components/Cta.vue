<template>
   <div class="b--cta-a" v-if="this.ctaContent != null">
       <div class="b--cta-a__ft-items">
           <div class="f--container">
               <div class="f--row">
                   <div class="f--col-12">
                       <h3 class="b--cta-a__ft-items__title f--font-a">
                            {{this.ctaContent.cta_title}}
                       </h3>
                       <!-- anchor should go to contact us at bottom -->
                       <!-- btn-a not built yet -->
                       <a href="#" class="b--btn-a">{{this.ctaContent.cta_label}}</a>
                   </div>
               </div>
           </div>
       </div>
       <div class="b--cta-a__bg-items">
           <!-- probably here we need SVG for arch @eli/@amaia/ -->
       </div>
   </div>
</template>

<script>
/* Queries */
import { groq } from '@nuxtjs/sanity';
const query_hompage = groq`*[_type == "homePage"][0]{
    'cta_title':cta_text,
    'cta_label':cta_label
}`;
export default {
    async fetch() {
        this.ctaContent = await this.$sanity.fetch(query_hompage)
    },
    data: () => ({
        ctaContent: '' 
    }),
}
</script>
