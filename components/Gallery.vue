<template>
  <div class="col-sm-6 col-lg-4 mb-4">
    <div class="card h-100 shadow card-span rounded-3">
      <!-- <img class="card-img-top rounded-3" src="~/assets/img/galeria/sgrada.jpg" alt="news" /> -->
      <img :src="`${image.image}`" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
