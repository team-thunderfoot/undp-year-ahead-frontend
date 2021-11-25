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
        title: this.title,
        meta: [
          { name: 'description', content: 'this is the content in es' },
          { name: 'og:title', content: this.title},
          { name: 'og:site_name', content: 'site name example es' },
          { name: 'og:url', content: 'test.com' },
          { name: 'og:image', content: 'https://teamthunderfoot.com/wp-content/uploads/2020/06/OG-Image-1.jpg' },
          { name: 'og:description', content: 'spanish description' },
        ],
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