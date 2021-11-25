<template>
  <div>

    <h2>hey undp!</h2>
    <p>this is working in github?</p>
    <p>and another test</p>
    <p>last chance</p>

  </div>
</template>

<script>
/* Components */


/* Queries */
import { groq } from '@nuxtjs/sanity';


export default {
  head() {
      return {
        title: 'Title undp-year-ahead English',
       meta: [
          { hid: 'description', name: 'description', content: 'this is the content in en'},
          // Open Graph
          { hid: 'og:title', property: 'og:title', content: 'Title undp-year-ahead en'},
          { hid: 'og:description', property: 'og:description', content: 'og description' },
          // Twitter Card
          { hid: 'twitter:title', name: 'twitter:title', content: 'Title undp-year-ahead en' },
          { hid: 'twitter:description', name: 'twitter:description', content: 'Title undp-year-ahead en' }
        ]
      }
  },
  data: () => ({
     title: 'Title undp-year-ahead' 
  }),

  
}
</script>
<style lang="scss">
  @import '@/sass/style.scss';
</style>