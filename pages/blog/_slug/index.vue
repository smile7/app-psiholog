<template>
    <div>
      <section class="py-5">
        <div 
            class="bg-holder bg-size"
            :style="{'background-image':`url(${require('@/assets/img/gallery/dot-bg.png')})`, 'background-position':'top left', 'background-size':'auto'}"
        >
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-10 py-3">
              <article>
                <div class="row">
                  <div class="col-12 col-xl-8 m-auto">
                    <h1 class="text-center mb-4">{{ post.title }}</h1>
                    <div class="post-info m-auto d-block mb-4">
                      <div class="row">
                        <div class="col-8">
                          <div class="small">
                            Публикувано на 
                            <time :datetime="post.updated_on">{{ post.created_on }}</time>
                          </div>
                          <div class="small">
                            От Петя Димова
                          </div>
                        </div>
                        <div class="col-4 text-right">
                          <div class="small">Време за прочит </div>
                          <div class="small">
                            <span v-html="getReadTime(post.content)"></span> минути
                          </div>
                        </div>
                      </div>
                      <img :src="post.image" :alt="post.title" class="blog-large-image mb-4" />
                      <span v-html="`${post.content}`" class="text-justify"></span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-12 col-lg-2 py-3 font-light-black d-none d-lg-block">
              <aside>
                <client-only>
                  <LightGallery
                      :images="certificates"
                      :index="index"
                      :disable-scroll="true"
                      @close="index = null"
                    />
                    <div    
                      v-for="(thumb, thumbIndex) in certificates"
                      :key="thumbIndex"
                      @click="index = thumbIndex"
                    >
                      <div class="card h-100 shadow card-span rounded-3 mb-4">
                          <img class="card-img-top rounded-top-3" :src="thumb.url" :alt="thumb.title" />
                          <div class="card-body">
                            <h5 class="font-base fs-lg-0 fs-xl-1 my-3">
                              {{ thumb.title }}
                            </h5>
                          </div>
                      </div>
                  </div>
                </client-only>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <vue-scroll-indicator
          height="4px"
          color="#283779"
          background="none"
      >
      </vue-scroll-indicator>
    </div>
</template>

<script>
export default {
    head() {
      return {
        title: `${this.post.title}`
      }
    },
    scrollToTop: true,
    async asyncData({ $axios, params }) {
      try {
        const [post, certificates] = await Promise.all([
          $axios.$get(`post/${params.slug}/`),
          $axios.$get('certificate/'),
        ])
        // parse date from django
        let date = post.created_on.slice(0, 10)
        let parsedDate = new Date(date).toLocaleDateString('bg-BG')
        post.created_on = parsedDate

        // parse updated date for time property
        post.updated_on = post.updated_on.slice(0, 10)
        return {
          post,
          certificates
        }
      } catch(e) {
        console.log(e)
        return {
          post: [],
          certificates: []
        }
      }
    },
    data() {
        return {
            post: {
                title: "",
                content: "",
                image: ""
            },
            certificates: [],
            index: null
        };
    },
    methods: {
      getReadTime(text) {
        let wordsCount = text.trim().split(/\s+/).length
        let wordsPerMin = 250
        let time = Math.ceil(wordsCount / wordsPerMin)
        return time
      },
      close(e) {
        this.index=null
        console.log('in')
        console.log(e)
      }
    }
}
</script>

<style scoped>
.blog-large-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

h1 {
  margin-top: -12px;
}
</style>
