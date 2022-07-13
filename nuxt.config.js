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
    script: [
      { type: 'text/javascript', src: "https://code.jquery.com/jquery-3.6.0.min.js" },
      { type: 'text/javascript', src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" },
      // { type: 'text/javascript', src: 'js/bootstrap-navbar.js', body: true },
      // { type: 'text/javascript', src: 'js/feather.min.js', body: true },
      // { type: 'text/javascript', src: 'js/is.min.js', body: true },
      // { type: 'text/javascript', src: 'js/popper.min.js', body: true },
      // { type: 'text/javascript', src: 'js/theme.js', body: true },
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
  ],
  axios: {
    // baseURL: 'http://104.248.18.158/api'
    // baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:800/api' : 'http://104.248.18.158/api'
    baseURL: "http://localhost:8000/api"
  },
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
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
