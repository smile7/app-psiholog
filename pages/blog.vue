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
              <h1 class="text-center">Блог</h1>
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
            <div class="col-sm-6 col-lg-3 mb-4">
              <div class="card h-100 shadow card-span rounded-3">
                <img class="card-img-top rounded-top-3" src="~/assets/img/gallery/nicotine.png" alt="news" />
                <div class="card-body">
                    <span class="fs--1 text-primary me-3">Семейство</span>
                    <svg class="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
                    </svg>
                    <span class="fs--1 text-900">20 Юни, 2022</span>
                    <span class="fs--1"></span>
                  <h5 class="font-base fs-lg-0 fs-xl-1 my-3">Отношенията в семейства без деца</h5>
                    <a class="stretched-link" href="#!">прочети</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3 mb-4">
              <div class="card h-100 shadow card-span rounded-3">
                <img class="card-img-top rounded-top-3" src="~/assets/img/gallery/nicotine.png" alt="news" />
                <div class="card-body">
                    <span class="fs--1 text-primary me-3">Семейство</span>
                    <svg class="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
                    </svg>
                    <span class="fs--1 text-900">20 Юни, 2022</span>
                    <span class="fs--1"></span>
                  <h5 class="font-base fs-lg-0 fs-xl-1 my-3">Отношенията в семейства без деца</h5>
                    <a class="stretched-link" href="#!">прочети</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3 mb-4">
              <div class="card h-100 shadow card-span rounded-3">
                <img class="card-img-top rounded-top-3" src="~/assets/img/gallery/nicotine.png" alt="news" />
                <div class="card-body">
                    <span class="fs--1 text-primary me-3">Семейство</span>
                    <svg class="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
                    </svg>
                    <span class="fs--1 text-900">20 Юни, 2022</span>
                    <span class="fs--1"></span>
                  <h5 class="font-base fs-lg-0 fs-xl-1 my-3">Отношенията в семейства без деца</h5>
                    <a class="stretched-link" href="#!">прочети</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3 mb-4">
              <div class="card h-100 shadow card-span rounded-3">
                <img class="card-img-top rounded-top-3" src="~/assets/img/gallery/nicotine.png" alt="news" />
                <div class="card-body">
                    <span class="fs--1 text-primary me-3">Семейство</span>
                    <svg class="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
                    </svg>
                    <span class="fs--1 text-900">20 Юни, 2022</span>
                    <span class="fs--1"></span>
                  <h5 class="font-base fs-lg-0 fs-xl-1 my-3">Отношенията в семейства без деца</h5>
                    <a class="stretched-link" href="#!">прочети</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- <section class="w-full my-24">
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-8 px-4 sm:px-6 mt-8">
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Резюме и дейност</h2>
          <p>
            Петя Димова е практикуващ Фамилен психолог и Семеен консултант. Провежда индивидуални консултации и терапия. 
            Работи с двойки, деца и семейства при:</p>
          <ul class="shadow-box">
            <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
        </div>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-4 mt-10">
          <div class="w-full">
            <img :src="require('~/assets/img/psychologist.jpg')" class="w-full" alt="" />
          </div>
        </div>
      </section> -->

      <!-- ============================================-->
      <!-- <section> about us ============================-->
      <!--
      <section class="pb-0" id="about">
        <div class="container">
          <div class="row">
            <div class="col-12 py-3">
              <div class="bg-holder bg-size" style="background-image:url('../_nuxt/assets/img/gallery/about-us.png');background-position:top center;background-size:contain;">
              </div>
              <h1 class="text-center">ABOUT US</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="bg-holder bg-size" style="background-image:url('../_nuxt/assets/img/gallery/about-bg.png');background-position:top center;background-size:contain;">
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 order-lg-1 mb-5 mb-lg-0"><img class="fit-cover rounded-circle w-100" src="~/assets/img/gallery/health-care.png" alt="..." /></div>
            <div class="col-md-6 text-center text-md-start">
              <h2 class="fw-bold mb-4">We are developing a healthcare <br class="d-none d-sm-block" />system around you</h2>
              <p>We think that everyone should have easy access to excellent <br class="d-none d-sm-block" />healthcare. Our aim is to make the procedure as simple as <br class="d-none d-sm-block" />possible for our patients and to offer treatment no matter<br class="d-none d-sm-block" />where they are — in person or at their convenience. </p>
              <div class="py-3">
                <button class="btn btn-lg btn-outline-primary rounded-pill" type="submit">Learn more </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      -->

      <!-- ============================================-->
      <!-- <section> team ============================-->
      <!-- 
      <section class="pb-0">
        <div class="container">
          <div class="row">
            <div class="col-12 py-3">
              <div class="bg-holder bg-size" style="background-image:url('../_nuxt/assets/img/gallery/doctors-us.png');background-position:top center;background-size:contain;">
              </div>
              <h1 class="text-center">OUR DOCTORS</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="bg-holder bg-size" style="background-image:url('../_nuxt/assets/img/gallery/doctors-bg.png');background-position:top center;background-size:contain;">
        </div>
        <div class="container">
          <div class="row flex-center">
            <div class="col-xl-10 px-0">
              <div class="carousel slide" id="carouselExampleDark" data-bs-ride="carousel"><a class="carousel-control-prev carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></a>
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <div class="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
                      <div class="col-md-4 mb-8 mb-md-0">
                        <div class="card card-span h-100 shadow">
                          <div class="card-body d-flex flex-column flex-center py-5"><img src="~/assets/img/gallery/anita.png" width="128" alt="..." />
                            <h5 class="mt-3">Anita Deshai</h5>
                            <p class="mb-0 fs-xxl-1">Pediatrics, Gochi Medicine</p>
                            <p class="text-600 mb-0">Florida, United States</p>
                            <p class="text-600 mb-4">10 years experience</p>
                            <div class="text-center">
                              <button class="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mb-8 mb-md-0">
                        <div class="card card-span h-100 shadow">
                          <div class="card-body d-flex flex-column flex-center py-5"><img src="~/assets/img/gallery/jane.png" width="128" alt="..." />
                            <h5 class="mt-3">Jane Flakis</h5>
                            <p class="mb-0 fs-xxl-1">Gynaecology, Abenka Care</p>
                            <p class="text-600 mb-0">Melbourne, Australia</p>
                            <p class="text-600 mb-4">12 years experience</p>
                            <div class="text-center">
                              <button class="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mb-8 mb-md-0">
                        <div class="card card-span h-100 shadow">
                          <div class="card-body d-flex flex-column flex-center py-5"><img src="~/assets/img/gallery/leo-mario.png" width="128" alt="..." />
                            <h5 class="mt-3">Leo Mario</h5>
                            <p class="mb-0 fs-xxl-1">Physiotherapy, FitCare</p>
                            <p class="text-600 mb-0">London, England</p>
                            <p class="text-600 mb-4">25 years experience</p>
                            <div class="text-center">
                              <button class="btn btn-secondary hover-top rounded-pill border-0" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <div class="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
                      <div class="col-md-4 mb-8 mb-md-0">
                        <div class="card card-span h-100 shadow">
                          <div class="card-body d-flex flex-column flex-center py-5"><img src="~/assets/img/gallery/anita.png" width="128" alt="..." />
                            <h5 class="mt-3">Anita Deshai</h5>
                            <p class="mb-0 fs-xxl-1">Pediatrics, Gochi Medicine</p>
                            <p class="text-600 mb-0">Florida, United States</p>
                            <p class="text-600 mb-4">10 years experience</p>
                            <div class="text-center">
                              <button class="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mb-8 mb-md-0">
                        <div class="card card-span h-100 shadow">
                          <div class="card-body d-flex flex-column flex-center py-5"><img src="~/assets/img/gallery/jane.png" width="128" alt="..." />
                            <h5 class="mt-3">Jane Flakis</h5>
                            <p class="mb-0 fs-xxl-1">Gynaecology, Abenka Care</p>
                            <p class="text-600 mb-0">Melbourne, Australia</p>
                            <p class="text-600 mb-4">12 years experience</p>
                            <div class="text-center">
                              <button class="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mb-8 mb-md-0">
                        <div class="card card-span h-100 shadow">
                          <div class="card-body d-flex flex-column flex-center py-5"><img src="~/assets/img/gallery/leo-mario.png" width="128" alt="..." />
                            <h5 class="mt-3">Leo Mario</h5>
                            <p class="mb-0 fs-xxl-1">Physiotherapy, FitCare</p>
                            <p class="text-600 mb-0">London, England</p>
                            <p class="text-600 mb-4">25 years experience</p>
                            <div class="text-center">
                              <button class="btn btn-secondary hover-top rounded-pill border-0" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
                      <div class="col-md-4 mb-8 mb-md-0">
                        <div class="card card-span h-100 shadow">
                          <div class="card-body d-flex flex-column flex-center py-5"><img src="~/assets/img/gallery/anita.png" width="128" alt="..." />
                            <h5 class="mt-3">Anita Deshai</h5>
                            <p class="mb-0 fs-xxl-1">Pediatrics, Gochi Medicine</p>
                            <p class="text-600 mb-0">Florida, United States</p>
                            <p class="text-600 mb-4">10 years experience</p>
                            <div class="text-center">
                              <button class="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mb-8 mb-md-0">
                        <div class="card card-span h-100 shadow">
                          <div class="card-body d-flex flex-column flex-center py-5"><img src="~/assets/img/gallery/jane.png" width="128" alt="..." />
                            <h5 class="mt-3">Jane Flakis</h5>
                            <p class="mb-0 fs-xxl-1">Gynaecology, Abenka Care</p>
                            <p class="text-600 mb-0">Melbourne, Australia</p>
                            <p class="text-600 mb-4">12 years experience</p>
                            <div class="text-center">
                              <button class="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mb-8 mb-md-0">
                        <div class="card card-span h-100 shadow">
                          <div class="card-body d-flex flex-column flex-center py-5"><img src="~/assets/img/gallery/leo-mario.png" width="128" alt="..." />
                            <h5 class="mt-3">Leo Mario</h5>
                            <p class="mb-0 fs-xxl-1">Physiotherapy, FitCare</p>
                            <p class="text-600 mb-0">London, England</p>
                            <p class="text-600 mb-4">25 years experience</p>
                            <div class="text-center">
                              <button class="btn btn-secondary hover-top rounded-pill border-0" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     -->

      <!-- ============================================-->
      <!-- <section> testimonials ============================-->
      <!--
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-12 py-3">
              <div class="bg-holder bg-size" style="background-image:url('../_nuxt/assets/img/gallery/people.png');background-position:top center;background-size:contain;">
              </div>
              <h1 class="text-center">PEOPLE WHO LOVE US</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="py-8">
        <div class="bg-holder bg-size" style="background-image:url('../_nuxt/assets/img/gallery/people-bg-1.png');background-position:center;background-size:cover;">
        </div>
        <div class="container">
          <div class="row align-items-center offset-sm-1">
            <div class="carousel slide" id="carouselPeople" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <div class="row h-100">
                    <div class="col-sm-3 text-center"><img src="~/assets/img/gallery/people-who-loves.png" width="100" alt="" />
                      <h5 class="mt-3 fw-medium text-secondary">Edward Newgate</h5>
                      <p class="fw-normal mb-0">Founder Circle</p>
                    </div>
                    <div class="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                      <h2>Fantastic Response!</h2>
                      <div class="my-2"><i class="fas fa-star me-2"></i><i class="fas fa-star me-2"></i><i class="fas fa-star me-2"></i><i class="fas fa-star-half-alt me-2"></i><i class="far fa-star"></i></div>
                      <p>This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job. Highly recommended their health care services.</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div class="row h-100">
                    <div class="col-sm-3 text-center"><img src="~/assets/img/gallery/people-who-loves.png" width="100" alt="" />
                      <h5 class="mt-3 fw-medium text-secondary">Jhon Doe</h5>
                      <p class="fw-normal mb-0">UI/UX Designer</p>
                    </div>
                    <div class="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                      <h2>Fantastic Response!</h2>
                      <div class="my-2"><i class="fas fa-star me-2"></i><i class="fas fa-star me-2"></i><i class="fas fa-star me-2"></i><i class="fas fa-star-half-alt me-2"></i><i class="far fa-star"></i></div>
                      <p>This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job. Highly recommended their health care services.</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row h-100">
                    <div class="col-sm-3 text-center"><img src="~/assets/img/gallery/people-who-loves.png" width="100" alt="" />
                      <h5 class="mt-3 fw-medium text-secondary">Jeny Doe</h5>
                      <p class="fw-normal mb-0">Web Designer</p>
                    </div>
                    <div class="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                      <h2>Fantastic Response!</h2>
                      <div class="my-2"><i class="fas fa-star me-2"></i><i class="fas fa-star me-2"></i><i class="fas fa-star me-2"></i><i class="fas fa-star-half-alt me-2"></i><i class="far fa-star"></i></div>
                      <p>This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job. Highly recommended their health care services.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="position-relative z-index-2 mt-5">
                  <ol class="carousel-indicators">
                    <li class="active" data-bs-target="#carouselPeople" data-bs-slide-to="0"></li>
                    <li data-bs-target="#carouselPeople" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselPeople" data-bs-slide-to="2"> </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      -->
    </div>
</template>

<script>

</script>

<style scoped>

</style>
