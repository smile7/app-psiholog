<template>
  <div class="col-12 col-md-4 text-center">
    <!-- <img :src="require(`~/assets/img/getting-started/${step.image}`)" alt="step" /> -->
    <img :src="step.image" :alt="step.title" />
    <h3 class="text-xl color-secondary font-semibold">
      {{ step.title }}
    </h3>
    <p class="font-light-black">
      {{ step.description }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'LandingStep',
  props: {
    step: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
  p {
    width: 66%;
    margin: 0 auto;
  }

  img {
    height: 220px;
    margin-bottom: 30px;
  }
</style>