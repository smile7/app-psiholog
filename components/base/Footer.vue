<template>
  <footer>
    <section class="py-0 bg-secondary">
      <div
        class="bg-holder opacity-25"
        :style="{'background-image':`url(${require('@/assets/img/gallery/dot-bg.png')})`, 'background-position':'top left', 'background-size':'auto', 'margin-top':'-3.125rem'}"
      >
      </div>
      <div class="container">
        <div class="row py-8">
          <div class="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0">
            <NuxtLink to="/" class="text-decoration-none">
              <!-- <img src="~/assets/img/gallery/footer-logo.png" height="51" alt="" /> -->
              <span class="text-logo  fw-bold">Петя Димова</span>
            </NuxtLink>
            <p class="color-secondary my-4">
              Направете го за семейството си!
            </p>
            <div class="py-3">
              <NuxtLink class="btn btn-sm btn-outline-primary rounded-pill" to="/">
                Запиши час
              </NuxtLink>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-lg-2 mb-3 order-2 order-sm-1">
            <h5 class="lh-lg fw-bold mb-4 font-sans-serif">Основни</h5>
            <ul class="list-unstyled mb-md-4 mb-lg-0">
              <li class="lh-lg">
                <NuxtLink to="/certificates" class="footer-link">Сертификати</NuxtLink>
              </li>
              <li class="lh-lg">
                <NuxtLink to="/gallery" class="footer-link">Галерия</NuxtLink>
              </li>
              <li class="lh-lg">
                <NuxtLink to="/contact" class="footer-link">Контакти</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
            <h5 class="lh-lg fw-bold  mb-4 font-sans-serif">
              Блог
            </h5>
            <ul class="list-unstyled mb-md-4 mb-lg-0">
              <li class="lh-lg">
                <NuxtLink class="footer-link" to="/blog/vazdeistvieto-na-ekranite-varhu-detsata">
                  Екраните и децата
                </NuxtLink>
              </li>
              <li class="lh-lg">
                <NuxtLink class="footer-link" to="/blog/krizi-i-problemi-v-otnosheniata">
                  Проблеми в отношенията
                </NuxtLink>
              </li>
              <li class="lh-lg">
                <NuxtLink class="footer-link" to="/blog/vazdeistvieto-na-ekranite-varhu-detsata">
                  Екраните и децата
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
            <h5 class="lh-lg fw-bold mb-4 font-sans-serif">
              Легалност
            </h5>
            <ul class="list-unstyled mb-md-4 mb-lg-0">
              <li class="lh-lg">
                <NuxtLink class="footer-link" to="/">
                  Условия за ползване
                </NuxtLink>
              </li>
              <li class="lh-lg">
                <NuxtLink class="footer-link" to="/">
                  Бисквитки
                </NuxtLink>
              </li>
              <li class="lh-lg">
                <NuxtLink class="footer-link" to="/">
                  GDPR
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section class="py-0 bg-primary">
        <div class="container">
          <div class="row justify-content-md-between justify-content-evenly py-4">
            <div class="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
              <p class="fs--1 my-2 fw-bold text-200">Всички права запазени &copy; Петя Димова ЕООД, 2022</p>
            </div>
            <div class="col-12 col-sm-8 col-md-6">
              <p class="fs--1 my-2 text-center text-md-end text-200"> Направено с&nbsp;
                <svg class="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#F95C19" viewBox="0 0 16 16">
                  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                </svg>&nbsp;от&nbsp;<a class="fw-bold text-info" href="https://abovedev.com/" target="_blank">AboveDev</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter',
  scrollToTop: true,
}
</script>

<style scoped>
.text-logo {
  font-size: 2rem;
}
</style>