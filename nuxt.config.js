export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  generate: {
    routes:[
      '/',
      '/fr',
      '/es',
    ]
  },
  // router: {
  //   base: '/undp-year-ahead-frontend/'
  // },
  head: {
    title: 'General Site Title',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
    clubPlugins: {
      gsDevTools: true,
      drawSVG: true
    }
  },
  styleResources: {
      scss: [
        '~/sass/framework/_vars/vars.scss',
        '~/sass/framework/_mixins/mixins.scss',
      ],
  },


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/sanity/module',
    'nuxt-gsap-module',
  ],

  sanity: {
    projectId: 'jf55zufm',
    minimal: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
