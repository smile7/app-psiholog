<template>
    <div>
     <section class="bg-secondary">
        <div 
          class="bg-holder"
          :style="{'background-image':`url(${require('@/assets/img/gallery/bg-eye-care.png')})`, 'background-position':'center', 'background-size':'contain'}"
        >
        </div>
        <div class="container">
          <div class="row align-items-center" v-repeat="numbers">
            <div :class="`col-md-7 col-xxl-6 text-center text-md-start order-${indexx}`">
              <h2 class="fw-bold text-light mb-4 mt-4 mt-lg-0">
                {{ phase.title }}
              </h2>
              <p class="text-light pre-line">
                {{ phase.description }}
              </p>
            </div>
            <div class="col-md-5 col-xxl-6">
              <img class="img-fluid" :src="`${phase.image}`" alt="..." />
            </div>
          </div>
        </div>
      </section>
      <div class="py-3 text-center">          
        <NuxtLink class="btn btn-sm btn-outline-primary rounded-pill ms-lg-4" to="/">
          {{ phase.btn_text }}
        </NuxtLink>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Phase',
  props: {
    phase: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      indexx: "4",
      numbers: [1, 2, 3, 4]
    }
  },
  methods: {
    switchOrder() {
      if (this.phase.ref == 'reality' || this.phase.ref == 'analysis') {
        this.indexx = 1
      } else {
        this.indexx = 2
      }
    }
  }
}
</script>

<style scoped>

</style>
