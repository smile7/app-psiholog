<template>
  <footer>
      <!-- ============================================-->
      <!-- <section> subscribe ============================-->
      <!-- 
      <section class="bg-primary">
        <div class="bg-holder bg-size" style="background-image:url('../_nuxt/assets/img/gallery/cta-bg.png');background-position:center right;margin-top:-8.125rem;background-size:contain;">
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="fw-bold text-light">Get an update every week</h2>
              <p class="text-soft-primary">Livedoc was created in order to improve the patient experience. <br />Providing world-class tests, and a wide range of other services.</p>
            </div>
            <div class="col-lg-6">
              <h5 class="mb-3 text-soft-primary">SUBSCRIBE TO NEWSLETTER </h5>
              <form class="row gx-2 gy-2 align-items-center">
                <div class="col">
                  <div class="input-group-icon">
                    <label class="visually-hidden" for="inputEmailCta">Address</label>
                    <input class="form-control form-livedoc-control form-cta-control text-soft-primary" id="inputEmailCta" type="email" placeholder="Email" />
                  </div>
                </div>
                <div class="d-grid gap-3 col-sm-auto">
                  <button class="btn btn-lg btn-light rounded-3 px-5 py-3" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      -->
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
                <span class="text-logo text-light fw-bold">Петя Димова</span>
              </NuxtLink>
              <p class="text-light my-4">
                Направете го за семейството си!
              </p>
              <div class="py-3">
                <a class="btn btn-lg btn-light rounded-pill" href="#!" role="button">
                  Запиши час
                </a>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-2 mb-3 order-2 order-sm-1">
              <h5 class="lh-lg fw-bold mb-4 text-light font-sans-serif">Основни</h5>
              <ul class="list-unstyled mb-md-4 mb-lg-0">
                <li class="lh-lg">
                  <NuxtLink to="/certificates" class="footer-link">Сертификати</NuxtLink>
                </li>
                <li class="lh-lg">
                  <NuxtLink to="/gallery" class="footer-link">Галерия</NuxtLink>
                </li>
                <li class="lh-lg">
                  <NuxtLink to="/contacts" class="footer-link">Контакти</NuxtLink>
                </li>
              </ul>
            </div>
            <div class="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
              <h5 class="lh-lg fw-bold text-light mb-4 font-sans-serif">
                Блог
              </h5>
              <ul class="list-unstyled mb-md-4 mb-lg-0">
                <li class="lh-lg">
                  <a class="footer-link" href="#!">
                    Стъпки за усъвърш...
                  </a>
                </li>
                <li class="lh-lg">
                  <a class="footer-link" href="#!">
                    Какво да направим...
                  </a>
                </li>
                <li class="lh-lg">
                  <a class="footer-link" href="#!">
                    Съвети за добра ко...
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
              <h5 class="lh-lg fw-bold text-light mb-4 font-sans-serif">
                Легалност
              </h5>
              <ul class="list-unstyled mb-md-4 mb-lg-0">
                <li class="lh-lg">
                  <a class="footer-link" href="#!">
                    Условия за ползване
                  </a>
                </li>
                <li class="lh-lg">
                  <a class="footer-link" href="#!">
                    Бисквитки
                  </a>
                </li>
                <li class="lh-lg">
                  <a class="footer-link" href="#!">
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- ============================================-->
        <!-- <section> begin ============================-->
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
}
</script>

<style scoped>
.text-logo {
  font-size: 2rem;
}
</style>