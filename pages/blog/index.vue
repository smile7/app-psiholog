<template>
    <div>
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-12 py-3">
              <div 
                class="bg-holder bg-size"
                :style="{'background-image':`url(${require('@/assets/img/gallery/blog-shadow.png')})`, 'background-position':'top center', 'background-size':'contain'}"
              >
              </div>
              <h1 class="text-center">Блог</h1>
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
            <div v-for="post in posts" :key="post.index" :post="post" class="col-sm-6 col-lg-4 mb-4">
              <div class="card h-100 shadow card-span rounded-3">
                <img class="card-img-top rounded-top-3" :src="post.image" alt="news" />
                <div class="card-body">
                    <!-- <span class="fs--1 text-primary me-3">Семейство</span> -->
                    <svg class="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
                    </svg>
                    <span class="fs--1 text-900">{{ post.created_on }}</span>
                    <span class="fs--1"></span>
                  <h5 class="font-base fs-lg-0 fs-xl-1 my-3">{{ post.title }}</h5>
                    <nuxt-link :to="`/blog/${post.id}/`" class="stretched-link">
                        прочети
                    </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
    /* async asyncData({ $http }) {
      const posts = await $http.$get('http://localhost:8000/api/post')
      return { posts }
    }, */
    async asyncData({ $axios, params }) {
        try {
            let posts = await $axios.$get(`/post/`);
            return { posts };
        } catch (e) {
            return { posts: [] };
        }
    },
    data() {
        return {
          posts: [
            /* {
                "title": "Диплома",
                "url": "/_nuxt/assets/img/galeria/sertifikat1.jpg"
            },
            {
                "title": "Институт по Фамилна Терапия",
                "url": "/_nuxt/assets/img/galeria/sertifikat2.jpg"
            },
            {
                "title": "Хестия",
                "url": "/_nuxt/assets/img/galeria/sertifikat3.jpg"
            },
            {
                "title": "Посока благополучие",
                "url": "/_nuxt/assets/img/galeria/sertifikat4.jpg"
            },
            {
                "title": "Позитивна психотерапия",
                "url": "/_nuxt/assets/img/galeria/sertifikat5.jpg"
            },
            {
                "title": "Практика ВМА",
                "url": "/_nuxt/assets/img/galeria/sertifikat6.jpg"
            } */
          ],
        };
    },
}
</script>

<style scoped>
  .card .card-img-top {
    height: 340px;
    object-fit: cover;
  }
</style>
