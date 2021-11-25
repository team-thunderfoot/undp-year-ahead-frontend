<template>
  <div>
    <h2>Project Example</h2>
  </div>
</template>

<script>
/* Components */

export default {
  head() {
      return {
        title: 'Project Title English',
        meta: [
            { hid: 'title', name: 'title', content: 'Project Title' },
            { hid: 'description', name: 'description', content: 'this is meta description for EN page' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:image', property: 'og:image', content: 'https://teamthunderfoot.com/wp-content/uploads/2020/06/OG-Image-1.jpg'},
            { hid: 'og:title', property: 'og:title', content: 'Og Title English'},
            { hid: 'og:description', property: 'og:description', content: 'OG Description English'},
        ]
      }
  },
  data: () => ({
    seo:[
      {
        description: 'this is a test'
      }
    ]
  }),
}
</script>
<style lang="scss">
  @import '@/sass/style.scss';
</style>