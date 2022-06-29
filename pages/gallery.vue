<template>
  <div>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 py-3">
            <div 
              class="bg-holder bg-size"
              :style="{'background-image':`url(${require('@/assets/img/gallery/gallery-shadow.png')})`, 'background-position':'top center', 'background-size':'contain'}"
            >
            </div>
            <h1 class="text-center">Галерия</h1>
          </div>
        </div>
      </div>
    </section>
    <section>
        <div 
            class="bg-holder bg-size"
              :style="{'background-image':`url(${require('@/assets/img/gallery/dot-bg.png')})`, 'background-position':'top left', 'background-size':'auto'}"
        >
        </div>
        <div class="container">
          <div class="row">
            <Gallery v-for="image in images" :key="image.index" :image="image" />
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import Gallery from '../components/Gallery.vue';

export default {
    /* async asyncData({ $http }) {
      const images = await $http.$get('http://localhost:8000/api/gallery')
      return { images }
    }, */
    data() {
        return {
            images: [
              {
                  "image": "http://localhost:8000/media/priemna1.jpg"
              },
              {
                  "image": "http://localhost:8000/media/priemna2.jpg"
              },
              {
                  "image": "http://localhost:8000/media/priemna3.jpg"
              },
              {
                  "image": "http://localhost:8000/media/priemna4.jpg"
              },
              {
                  "image": "http://localhost:8000/media/sgrada.jpg"
              }
            ]
        };
    },
    components: { Gallery }
}
</script>

<style scoped>

</style>