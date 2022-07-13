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
              <h1 class="text-center">{{ post.title }}</h1>
            </div>
          </div>
        </div>
      </section>

      <!-- TODO: Styling 
            - header image
            - right articles available
            - created at, author, image of author
            - important quotes
            - bullets
            - hr
            - share btn
      -->

      <section class="pt-0">
        <div 
            class="bg-holder bg-size"
            :style="{'background-image':`url(${require('@/assets/img/gallery/dot-bg.png')})`, 'background-position':'top left', 'background-size':'auto'}"
        >
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
                <!-- <img :src="post.image" alt="blog image" /> -->
                <span v-html="`${post.content}`"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
    /* head() {
        return {
            title: ""
        }
    }, */
    async asyncData({ $axios, params }) {
        try {
            let post = await $axios.$get(`/post/${params.slug}/`)
            return { post };
        } catch (e) {
            return { post: [] };
        }
    },
    data() {
        return {
            post: {
                title: "",
                content: "",
                image: ""
            }
        };
    }
}
</script>

<style scoped>

</style>
