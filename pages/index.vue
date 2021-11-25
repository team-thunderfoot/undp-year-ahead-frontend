<template>
  <div>

    <h2>hey undp!</h2>
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
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'UNDP undp-year-ahead resolution'
          }
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