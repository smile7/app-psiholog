<template>
    <div>
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-12 py-3">
              <div
                class="bg-holder bg-size"
                :style="{'background-image':`url(${require('@/assets/img/gallery/contacts-shadow.png')})`, 'background-position':'top center', 'background-size':'contain'}"
              >
              </div>
              <h1 class="text-center">Контакти</h1>
            </div>
          </div>
        </div>
      </section>
       
      <div style="width: 100%"><iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D1%83%D0%BB.%20%D0%A5%D0%B0%D0%B4%D0%B6%D0%B8%20%D0%94%D0%B8%D0%BC%D0%B8%D1%82%D1%8A%D1%80%2019,%20%D0%A1%D0%BE%D1%84%D0%B8%D1%8F+(%D0%9F%D0%B5%D1%82%D1%8F%20%D0%94%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="300" frameborder="0"></iframe></div>
      
      <section class="py-8">
        <div class="container">
          <div class="row">
            <div
              class="bg-holder bg-size" 
              :style="{'background-image':`url(${require('@/assets/img/gallery/dot-bg.png')})`, 'background-position':'top left', 'background-size':'auto'}"
            >
            </div>
            <div class="col-lg-6 z-index-2 mb-5">
              <img class="w-100" src="~/assets/img/contacts.png" alt="Контакти-снимка" />
            </div>
            <div class="col-lg-6 z-index-2">
              <form class="row g-3">
                <div class="col-md-6">
                  <label class="visually-hidden" for="inputName">Име</label>
                  <input class="form-control form-livedoc-control" id="inputName" type="text" placeholder="Име" />
                </div>
                <div class="col-md-6">
                  <label class="visually-hidden" for="inputPhone">Телефон</label>
                  <input class="form-control form-livedoc-control" id="inputPhone" type="text" placeholder="Телефон" />
                </div>
                <div class="col-md-6">
                  <label class="form-label visually-hidden" for="inputCategory">Тема</label>
                  <input class="form-control form-livedoc-control" id="inputSubject" type="text" placeholder="Тема" />
                  <!-- <select class="form-select" id="inputCategory">
                    <option selected="selected">Category</option>
                    <option> Category One</option>
                    <option> Category Two</option>
                    <option> Category Three</option>
                  </select> -->
                </div>
                <div class="col-md-6">
                  <label class="form-label visually-hidden" for="inputEmail">Email</label>
                  <input class="form-control form-livedoc-control" id="inputEmail" type="email" placeholder="Email" />
                </div>
                <div class="col-md-12">
                  <label class="form-label visually-hidden" for="validationTextarea">Съобщение</label>
                  <textarea class="form-control form-livedoc-control" id="validationTextarea" placeholder="Съобщение" style="height: 250px;" required="required"></textarea>
                </div>
                <div class="col-12">
                  <div class="d-grid">
                    <button class="btn btn-primary rounded-pill" type="submit">Изпрати</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

</script>

<style scoped>

</style>