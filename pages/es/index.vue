<template>
  <div>

    <h2>hey undp! this might be in Spanish</h2>
    <p>this is working in github?</p>

  </div>
</template>

<script>
/* Components */


/* Queries */
import { groq } from '@nuxtjs/sanity';

export default {
  head() {
      return {
        title: 'Title undp-year-ahead es',
        meta: [
          { hid: 'description', name: 'description', content: 'this is the content in es'},
          // Open Graph
          { hid: 'og:title', property: 'og:title', content: 'Title undp-year-ahead es'},
          { hid: 'og:description', property: 'og:description', content: 'og description' },
          // Twitter Card
          { hid: 'twitter:title', name: 'twitter:title', content: 'Title undp-year-ahead es' },
          { hid: 'twitter:description', name: 'twitter:description', content: 'Title undp-year-ahead es' }
        ]
      }
  },
  data: () => ({
     title: 'Title undp-year-ahead ES' 
  }),

  
}
</script>
<style lang="scss">
  @import '@/sass/style.scss';
</style>