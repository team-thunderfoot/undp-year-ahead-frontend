<template>
  <div>

    <h2>hey undp!</h2>
    <p>this is working in github?</p>
    <p>and another test</p>
    <p>this feels  strange</p>

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
          { name: 'description', content: 'this is the content in en' },
          { name: 'og:title', content: this.title},
          { name: 'og:site_name', content: 'site name example' },
          { name: 'og:url', content: 'test.com' },
          { name: 'og:image', content: 'https://teamthunderfoot.com/wp-content/uploads/2020/06/OG-Image-1.jpg' },
          { name: 'og:description', content: 'english description' },
        ],
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