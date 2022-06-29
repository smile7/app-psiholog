<template>
  <div>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 py-3">
            <div 
              class="bg-holder bg-size"
              :style="{'background-image':`url(${require('@/assets/img/gallery/certificates-shadow.png')})`, 'background-position':'top center', 'background-size':'contain'}"
            >
            </div>
            <h1 class="text-center">Сертификати</h1>
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
        <div class="row font-light-black">
          <div class="col-12 col-md-6">
            <h4 class="text-center">Образование:</h4>
            <ul class="list-group">
              <li class="list-group-item">
                Магистър по Клинична и консултативна психология към Софийски Университет „Св. Климент Охридски“;
              </li>
              <li class="list-group-item">
                Бакалавър по Здравен Мениджмънт към Медицински Университет, гр. София
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <h4 class="text-center">Допълнителна квалификация:</h4>
            <ul class="list-group">
              <li class="list-group-item">
                Сертифициран Фамилен психолог, Семеен и Брачен терапевт към Институт по фамилна терапия – България;
              </li>
              <li class="list-group-item">
                Сертифициран консултант по Позитивна психотерапия към Дружество по позитивна психотерапия към Световната асоциация по позитивна психотерапия (WAPP)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div 
          class="bg-holder bg-size"
              :style="{'background-image':`url(${require('@/assets/img/gallery/cta-bg.png')})`, 'background-position':'top left', 'background-size':'auto'}"
      >
      </div>
      <div class="container">
        <div class="row">
          <Certificate v-for="certificate in certificates" :key="certificate.index" :certificate="certificate" />
        </div>
      </div>
    </section>



      <!-- ============================================-->
      <!-- <section> СТЪПКИ ============================-->
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-12 py-3">
              <div 
                class="bg-holder bg-size"
                :style="{'background-image':`url(${require('@/assets/img/gallery/blog-post.png')})`, 'background-position':'top center', 'background-size':'contain'}"
                >
              </div>
              <h1 class="text-center">Записване на час</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="appointment-steps">
        <div 
            class="bg-holder bg-size"
            :style="{'background-image':`url(${require('@/assets/img/gallery/dot-bg.png')})`, 'background-position':'top left', 'background-size':'auto'}"
        >
        </div>
        <div class="container-fluid">
          <div class="row">
            <LandingStep v-for="step in steps" :key="step.index" :step="step" />
          </div>
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="arrow1 position-absolute"
            alt=""
          />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="arrow2 position-absolute"
            alt=""
          />
        </div>
      </section>



  </div>
</template>

<script>
import Certificate from "../components/Certificate.vue";

export default {
    /* async asyncData({ $http }) {
      const certificates = await $http.$get('http://localhost:8000/api/certificate')
      console.log(certificates)
      return { certificates }
    }, */
    data() {
        return {
          certificates: [
            {
                "title": "Диплома",
                "image": "http://localhost:8000/media/sertifikat1.jpg"
            },
            {
                "title": "Институт по Фамилна Терапия",
                "image": "http://localhost:8000/media/sertifikat2.jpg"
            },
            {
                "title": "Хестия",
                "image": "http://localhost:8000/media/sertifikat3.jpg"
            },
            {
                "title": "Посока благополучие",
                "image": "http://localhost:8000/media/sertifikat4.jpg"
            },
            {
                "title": "Позитивна психотерапия",
                "image": "http://localhost:8000/media/sertifikat5.jpg"
            },
            {
                "title": "Практика ВМА",
                "image": "http://localhost:8000/media/sertifikat6.jpg"
            }
          ],
          steps: [
            {
              "title": "Виж календара",
              "description": "Ето тук (линк) можеш да видиш графика ми и да видиш свободните ми часове.",
              "image": "http://localhost:8000/media/sign-up.png"
            },
            {
              "title": "Провери свободните часове",
              "description": "Ще получиш директен достъп до календара ми и ще можеш да видиш кога съм свободна.",
              "image": "http://localhost:8000/media/fund.png"
            },
            {
              "title": "Запази час",
              "description": "Натисни върху часа, който те устройва, и напиши името си.",
              "image": "http://localhost:8000/media/buy-crypto.png"
            }
          ]
        };
    },
    components: { Certificate }
}
</script>

<style scoped>
  section {
    padding: 4rem 0;
  }
  h4 {
    margin-bottom: 20px;
  }
</style>