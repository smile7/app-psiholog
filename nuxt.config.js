export default {
  head: {
    title: 'Петя Димова - семеен психолог',
    htmlAttrs: {
      lang: 'bg',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-16.png' }
    ],
    script: [
      { type: 'text/javascript', src: 'js/jquery-3.6.0.min.js', body: true },
      { type: 'text/javascript', src: 'js/bootstrap.min.js', body: true },
    ]
  },
  css: [
    '@/assets/css/main.css',
    '@/assets/css/Exo.css',
    'aos/dist/aos.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    { src: '~/plugins/smooth-scroll.js' },
    { src: '~/plugins/mdi.js' },
    { src: '~/plugins/fontawesome.js' },
    { src: '~/plugins/lightGallery.client.js', mode: 'client' },
    { src: '~/plugins/vue-scroll-indicator.client.js', mode: 'client' }
  ],
  axios: {
    baseURL: 'http://104.248.18.158/api'
    // baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:800/api' : 'http://104.248.18.158/api'
    // proxy: true,
    // prefix: process.env.API_URL
    // prefix: process.env.NODE_ENV !== 'production' ? process.env.API_URL : process.env.API_URL_PRODUCTION
  },
  // proxy: {
    // "http://localhost:3000/api/captcha-api/": {
  /*     "http://104.248.18.158/api/captcha-api/": {
      target: "https://www.google.com/recaptcha/api",
      pathRewrite: {
        "^/captcha-api": ""
      },
      changeOrigin: true
    }, */
    /* "/api/": {
      target: "http://localhost:8000/api/",
      pathRewrite: { "^/api/": "" }
    } */
  // },
  components: true,
  buildModules: [
    // '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/fontawesome',
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxt/http',
    "@nuxtjs/dotenv",
    [
       "@nuxtjs/recaptcha",
      {
        siteKey: process.env.SITE_KEY
      }
    ],
    "@nuxtjs/proxy"
  ],
  recaptcha: {
    version: 3
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  loading: {
    color: '#283779',
    height: '4px'
  }
}
