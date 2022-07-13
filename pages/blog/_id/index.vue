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
      <section>
        <div 
            class="bg-holder bg-size"
            :style="{'background-image':`url(${require('@/assets/img/gallery/dot-bg.png')})`, 'background-position':'top left', 'background-size':'auto'}"
        >
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
                {{ post.content }}
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "View Recipe"
        }
    },
    async asyncData({ $axios, params }) {
        try {
            let posts = await $axios.$get(`/post/${params.id}`);
            return { posts };
        } catch (e) {
            return { posts: [] };
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
