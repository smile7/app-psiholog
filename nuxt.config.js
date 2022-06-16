export default {
  head: {
    title: 'Петя Димова - семеен психолог',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },
  css: [
    '@/assets/css/main.css',
    'aos/dist/aos.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    '~/plugins/smooth-scroll.js',
    '~/plugins/mdi.js',
    '~/plugins/fontawesome.js'
  ],
  axios: {
    baseURL: 'http://104.248.18.158/api'
    // baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:800/api' : 'http://104.248.18.158/api'
    // baseURL: "http://localhost:8000/api"
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/fontawesome',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxt/http',
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  /**
  buildDir: 'nuxt-dist',
   */
 /*  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
  }, */
}
