<template>
  <div>

   <h2>page in spanish</h2>

  </div>
</template>

<script>
/* Components */

export default {
  head() {
      return {
        title: 'Project Title Spanish',
        meta: [
            { hid: 'title', name: 'title', content: 'Project Title SP' },
            { hid: 'description', name: 'description', content: 'this is meta description for SP page' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:image', property: 'og:image', content: 'https://teamthunderfoot.com/wp-content/uploads/2020/06/OG-Image-1.jpg'},
            { hid: 'og:title', property: 'og:title', content: 'Og Title Spanish'},
            { hid: 'og:description', property: 'og:description', content: 'OG Description Spanish'},
        ]
      }
  },
  data: () => ({
     
  }),
}
</script>
<style lang="scss">
  @import '@/sass/style.scss';
</style>