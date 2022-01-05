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
  router: {
    base: '/'
  },
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
  plugins: [
    '~/plugins/vue-lazyload',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-gsap-module',
    '@nuxtjs/device',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/gtm'
  ],
  gtm: {
    enabled: true, 
    id: 'GTM-5ZQRJS9'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.(mov)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          esModule: false
        }
      })
    }  
  }
}
