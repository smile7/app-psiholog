<template>
  <div>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 py-3">
            <div 
              class="opacity-50 bg-holder bg-size"
              :style="{'background-image':`url(${require('@/assets/img/gallery/gallery-shadow2.png')})`, 'background-position':'top center', 'background-size':'contain'}"
            >
            </div>
            <h1 class="text-center">Галерия</h1>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================-->
    <!-- <section> ГАЛЕРИЯ ==========================-->
    <!-- ============================================-->
    <section>
      <div 
        class="bg-holder bg-size"
        :style="{'background-image':`url(${require('@/assets/img/gallery/dot-bg.png')})`, 'background-position':'top left', 'background-size':'auto'}"
      >
      </div>
      <div class="container">
        <div class="row">
          <!-- <Gallery v-for="image in images" :key="image.index" :image="image" /> -->
          <client-only>
            <LightGallery
              :images="images"
              :index="index"
              :disable-scroll="true"
              @close="index = null"
            />
            <div    
              v-for="(thumb, thumbIndex) in images"
              :key="thumbIndex"
              @click="index = thumbIndex"
              class="col-sm-6 col-lg-4 mb-4"
            >
              <div class="card h-100 shadow card-span rounded-3">
                <!-- <img class="card-img-top rounded-3" src="~/assets/img/galeria/sgrada.jpg" alt="news" /> -->
                <!-- <img :src="require(`~/assets/img/galeria/${image.image}`)" alt="gallery" /> -->
                <img class="card-img-top rounded-top-3" :src="thumb.url" alt="photo" />
              </div>
            </div>
          </client-only>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    scrollToTop: true,
    data() {
        return {
            images: [
              {
                "url": "/_nuxt/assets/img/galeria/sgrada.jpg"
                  // "image": "http://localhost:8000/media/sgrada.jpg"
              },
              {
                "url": "/_nuxt/assets/img/galeria/priemna1.jpg"
              },
              {
                "url": "/_nuxt/assets/img/galeria/priemna2.jpg"
              },
              {
                "url": "/_nuxt/assets/img/galeria/priemna3.jpg"
              },
              {
                "url": "/_nuxt/assets/img/galeria/priemna4.jpg"
              },
              {
                "url": "/_nuxt/assets/img/galeria/priemna5.jpg"
              },
              {
                "url": "/_nuxt/assets/img/galeria/priemna6.jpg"
              },
              {
                "url": "/_nuxt/assets/img/galeria/priemna7.jpg"
              },
              {
                "url": "/_nuxt/assets/img/galeria/priemna8.jpg"
              }
            ],
            index: null
        };
    },
}
</script>

<style scoped>

</style>