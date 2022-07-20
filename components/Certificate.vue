<template>
    <div class="col-sm-6 col-lg-4 mb-4">
        <div class="card h-100 shadow card-span rounded-3">
            <img class="card-img-top rounded-top-3" :src="require(`~/assets/img/galeria/${certificate.url}`)" alt="certificate" />
            <div class="card-body">
              <h5 class="font-base fs-lg-0 fs-xl-1 my-3">
                {{ certificate.title }}
              </h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Certificate',
  props: {
    certificate: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card .card-img-top {
  height: 340px;
  object-fit: scale-down;
}
</style>
