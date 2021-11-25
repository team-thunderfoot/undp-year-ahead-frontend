<template>
  <div>

    <h2>hey undp! this might be in french</h2>
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
        title: 'Title undp-year-ahead FR',
        // meta: [
        //   // { name: 'description', content: 'this is the content in fr' },
        //   // { name: 'og:title', content: 'blablaf'},
        //   // { name: 'og:site_name', content: 'site name example' },
        //   // { name: 'og:url', content: 'test.com' },
        //   // { name: 'og:image', content: 'https://teamthunderfoot.com/wp-content/uploads/2020/06/OG-Image-1.jpg' },
        //   // { name: 'og:description', content: 'french description' },
          
        // ],
        meta: [
          { hid: 'description', name: 'description', content: 'this is the content in fr'},
          // Open Graph
          { hid: 'og:title', property: 'og:title', content: 'Title undp-year-ahead FR'},
          { hid: 'og:description', property: 'og:description', content: 'og description' },
          // Twitter Card
          { hid: 'twitter:title', name: 'twitter:title', content: 'Title undp-year-ahead FR' },
          { hid: 'twitter:description', name: 'twitter:description', content: 'Title undp-year-ahead FR' }
        ]
      }
  },
  data: () => ({
     title: 'Title undp-year-ahead FR' 
  }),

  
}
</script>
<style lang="scss">
  @import '@/sass/style.scss';
</style>

