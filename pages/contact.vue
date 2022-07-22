<template>
    <div>
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-12 py-3">
              <div
                class="opacity-75 bg-holder bg-size"
                :style="{'background-image':`url(${require('@/assets/img/gallery/contacts-shadow2.png')})`, 'background-position':'top center', 'background-size':'contain'}"
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
              <form
                class="row g-3"
                v-if="beforeSubmit"
                v-on:submit.prevent="onSubmit()"
                method="POST"
              >
                <div class="col-md-6">
                  <label class="visually-hidden" for="inputName">Име</label>
                  <input
                    class="form-control form-livedoc-control"
                    id="inputName"
                    type="text"
                    v-model="name"
                    placeholder="Име"
                    required="required"
                    :disabled="isFormDisabled"
                  />
                </div>
                <div class="col-md-6">
                  <label class="visually-hidden" for="inputPhone">Телефон</label>
                  <input 
                    class="form-control form-livedoc-control"
                    id="inputPhone" 
                    type="text"
                    v-model="phone"
                    placeholder="Телефон"
                    required="required"
                    :disabled="isFormDisabled"
                  />
                </div>
                <div class="col-md-6">
                  <label class="form-label visually-hidden" for="inputCategory">Тема</label>
                  <input
                    class="form-control form-livedoc-control"
                    id="inputSubject"
                    type="text"
                    v-model="subject"
                    placeholder="Тема"
                    required="required"
                    :disabled="isFormDisabled"
                  />
                </div>
                <div class="col-md-6">
                  <label class="form-label visually-hidden" for="inputEmail">Email</label>
                  <input
                    class="form-control form-livedoc-control"
                    id="inputEmail"
                    type="email"
                    v-model="email"
                    placeholder="Email"
                    required="required"
                    :disabled="isFormDisabled"
                  />
                </div>
                <div class="col-md-12">
                  <label class="form-label visually-hidden" for="validationTextarea">Съобщение</label>
                  <textarea 
                    class="form-control form-livedoc-control"
                    id="validationTextarea"
                    type="text"
                    v-model="message"
                    placeholder="Съобщение"
                    style="height: 250px;"
                    required="required"
                    :disabled="isFormDisabled"
                  >
                  </textarea>
                </div>
                <div class="col-12">
                  <div class="d-grid">
                    <button class="btn btn-primary rounded-pill" type="submit" :disabled="isFormDisabled">
                      Изпрати
                    </button>
                  </div>
                </div>
              </form>
              <div v-if="afterSubmit" class="text-center">
                <h2>
                  Вашето запитване беше изпратено успешно! Благодаря, че се свързахте с мен!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  scrollToTop: true,
  name: "Contact",
  props: {
    msg: String
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.log(e)
    }
  },
  data() {
    return {
      loading: true,
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      beforeSubmit: true,
      isFormDisabled: false
    };
  },
  computed: {
    isFormEnabled: function() {
      return !this.isFormDisabled
    },
    afterSubmit: function() {
      return !this.beforeSubmit
    },
  },
  methods: {
    async onSubmit() {
      this.isFormDisabled = true

      // reCaptcha v3 verification
      try {
        const token = await this.$recaptcha.execute()
        const response = await this.$axios.$post(
          `http://localhost:3000/captcha-api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
        )
        console.log('response: ', response)
        await this.sendMessage()
      } catch (error) {
        console.log('err: ', error)
        this.isFormDisabled = false
        this.$recaptcha.reset()
      }
    },
    async sendMessage() {
      let data = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        subject: this.subject,
        message: this.message
      }
      this.$axios
        .post('contact/', data, {
          headers: {
            Accept: "application/json"
          }
        })
        .then(
          response => {
            this.isFormDisabled = false
            this.beforeSubmit = false
        })
        .catch(
          error => {
            console.log('error')
            console.log(error)
            this.isFormDisabled = false
          }
        )
    }
  },
  
}
</script>

<style scoped>

</style>
