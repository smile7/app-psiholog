<template>
  <div class="col-12 col-md-4 text-center">
    <img :src="require(`~/assets/img/getting-started/${step.image}`)" alt="step" />
    <h3 class="text-xl font-light-black font-semibold">
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
</style>