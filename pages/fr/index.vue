<template>
  <div>

    <p>starter</p>
  </div>
</template>

<script>
/* Components */

export default {
  head() {
      return {
        title: 'Project Title French',
        meta: [
            { hid: 'title', name: 'title', content: 'Project Title FR' },
            { hid: 'description', name: 'description', content: 'this is meta description for FR page' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:image', property: 'og:image', content: 'https://teamthunderfoot.com/wp-content/uploads/2020/06/OG-Image-1.jpg'},
            { hid: 'og:title', property: 'og:title', content: 'Og Title French'},
            { hid: 'og:description', property: 'og:description', content: 'OG Description French'},
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