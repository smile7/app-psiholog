<template>
  <!-- fixed-top class on nav removed -->
  <header>
    <nav 
      class="navbar navbar-expand-lg navbar-light py-3 d-block" 
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div class="container">
        <NuxtLink to="/" class="navbar-brand">
          <span class="text-logo">Петя Димова</span>
          <!-- <img src="~/assets/img/gallery/logo.png" width="118" alt="logo" /> -->
        </NuxtLink>
        <button 
          class="navbar-toggler"
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"> </span>
        </button>
        <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0 text-center" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
            <li class="nav-item px-2">
              <NuxtLink to="/" data-toggle="collapse" data-target=".navbar-collapse" class="nav-link">Начало</NuxtLink>
            </li>
            <li class="nav-item px-2">
              <NuxtLink to="/certificates" data-toggle="collapse" data-target=".navbar-collapse" class="nav-link">Сертификати</NuxtLink>
            </li>
            <li class="nav-item px-2">
              <NuxtLink to="/gallery" data-toggle="collapse" data-target=".navbar-collapse" class="nav-link">Галерия</NuxtLink>
            </li>
            <li class="nav-item px-2">
              <NuxtLink to="/blog" data-toggle="collapse" data-target=".navbar-collapse" class="nav-link">Блог</NuxtLink>
            </li>
            <li class="nav-item px-2">
              <NuxtLink to="/contact" data-toggle="collapse" data-target=".navbar-collapse" class="nav-link">Контакти</NuxtLink>
            </li>
          </ul>
          <NuxtLink class="btn btn-sm btn-outline-primary rounded-pill order-1 order-lg-0 ms-lg-4" to="/" data-toggle="collapse" data-target=".navbar-collapse">
            Запиши час
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'BaseNavbar',
  scrollToTop: true,
  data() {
    return {}
  },
}
</script>

<style scoped>

</style>