<template>
  <div>      
    <section class="py-xxl-10 pb-0" id="home">
      <div
        class="bg-holder bg-size"
        :style="{'background-image':`url(${require('@/assets/img/gallery/hero-bg4.png')})`, 'background-position':'top center', 'background-size':'cover'}"
      >
      </div>
      <div class="container">
        <div class="row min-vh-xl-100 min-vh-xxl-25">
          <div class="col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end">
            <img class="pt-7 pt-md-0 petya-circle" src="~/assets/img/petya-circle.png" alt="заглавна снимка на Петя" />
          </div>
          <div class="col-md-7 col-xl-6 col-xxl-5 text-md-start text-center py-6">
            <h1 class="fw-light font-base fs-6 fs-xxl-7 mb-4">
              Фамилен Психолог
              <br/>
              <strong>Петя Димова</strong>
            </h1>
            <h2 class="fs-1 mb-4 font-light-black">
               Петя Димова е практикуващ фамилен психолог и семеен консултант. Работи с двойки и семейства, 
               провежда индивидуални консултации и терапия. 
            </h2>
            <div class="social-icons spinned mb-4">
              <a 
                class="item facebook" 
                href="https://www.facebook.com/people/%D0%9F%D0%B5%D1%82%D1%8F-%D0%94%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0/100010592415774" 
                target="_blank"
              >
                <span>
                  <FontAwesomeIcon :icon="['fab', 'facebook']" /><!-- fa :icon="['fas', 'facebook']" /> -->
                </span>
              </a>
              <!-- LINKEDIN DOESNT EXIST -->
              <!--
              <a 
                class="item linkedin" 
                href="https://www.linkedin.com/in/petya-dimova-bb0898182/" 
                target="_blank"
              >
                <span><FontAwesomeIcon :icon="['fab', 'linkedin']" /></span>
              </a>
              -->
            </div>
            <div class="action-btns">
              <NuxtLink to="/" class="btn btn-lg btn-primary rounded-pill btn-mrgn" role="button">
                Запази час
              </NuxtLink>
              <NuxtLink to="/certificates" class="btn btn-lg btn-primary rounded-pill">
                Виж сертификати
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="arrow-down-animated" :class="{ 'arrow--hidden': !showArrow }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>

    <!-- ============================================-->
    <!-- <section> ФАЗИ =============================-->
    <!-- ============================================-->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 py-3">
            <div 
              class="opacity-75 bg-holder bg-size"
              :style="{'background-image':`url(${require('@/assets/img/gallery/phases-shadow2.png')})`, 'background-position':'top center', 'background-size':'contain'}"
            >
            </div>
            <h1 class="text-center">Фази на промяната</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="py-0">
      <div class="container">
        <div class="row py-5 align-items-center justify-content-center justify-content-lg-evenly">
          <div class="col-auto col-md-4 col-lg-auto text-xl-start pointer" @click="goto('reality')">
            <div class="d-flex flex-column align-items-center">
              <div class="icon-box text-center">
                <div class="text-decoration-none">
                  <img class="mb-3 deparment-icon" src="~/assets/img/realnost-link.png" alt="икона реалност" />
                  <img class="mb-3 deparment-icon-hover" src="~/assets/img/realnost-link.png" alt="икона реалност" />
                  <p class="fs-1 fs-xxl-2 text-center">Реалност</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto col-md-4 col-lg-auto text-xl-start pointer" @click="goto('initiative')">
            <div class="d-flex flex-column align-items-center">
              <div class="icon-box text-center">
                <div class="text-decoration-none">
                  <img class="mb-3 deparment-icon" src="~/assets/img/iniciativa-link.png" alt="икона инициатива" />
                  <img class="mb-3 deparment-icon-hover" src="~/assets/img/iniciativa-link.png" alt="икона инициатива" />
                  <p class="fs-1 fs-xxl-2 text-center">Инициатива</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto col-md-4 col-lg-auto text-xl-start pointer"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               @click="goto('analysis')">
            <div class="d-flex flex-column align-items-center">
              <div class="icon-box text-center">
                <div class="text-decoration-none">
                  <img class="mb-3 deparment-icon" src="~/assets/img/analiz-link.png" alt="икона анализ" />
                  <img class="mb-3 deparment-icon-hover" src="~/assets/img/analiz-link.png" alt="икона анализ" />
                  <p class="fs-1 fs-xxl-2 text-center">Анализ</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto col-md-4 col-lg-auto text-xl-start pointer" @click="goto('solution')">
            <div class="d-flex flex-column align-items-center">
              <div class="icon-box text-center">
                <div class="text-decoration-none">
                  <img class="mb-3 deparment-icon" src="~/assets/img/reshenie-link.png" alt="икона решение" />
                  <img class="mb-3 deparment-icon-hover" src="~/assets/img/reshenie-link.png" alt="икона решение" />
                  <p class="fs-1 fs-xxl-2 text-center">Решение</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================-->
    <!-- <section> ФАЗИ ТЕКСТ =======================-->
    <!-- ============================================-->
    <!-- <Phase v-for="(phase, index) in phases" :key="index" :phase="phase" /> -->
    <section class="phases">
      <div v-for="(phase, index) in phases" :key="index" :phase="phase">
        <section class="bg-secondary" :ref="`${phase.ref}`">
          <div 
            class="bg-holder"
            :style="{'background-image':`url(${require('@/assets/img/gallery/bg-eye-care.png')})`, 'background-position':'center', 'background-size':'contain'}"
          >
          </div>
          <div class="container">
            <div class="row align-items-center">
              <div :class="`col-md-7 col-xxl-6 text-center text-md-start order-md-${index%2} order-2`">
                <h2 class="fw-bold mb-4 mt-4 mt-lg-0 color-secondary">
                  {{ phase.title }}
                </h2>
                <p class="pre-line font-light-black">
                  {{ phase.description }}
                </p>
              </div>
              <div class="col-md-5 col-xxl-6">
                <img class="img-fluid" :src="phase.image" :alt="phase.title" />
              </div>
            </div>
          </div>
        </section>
        <div class="py-3 text-center">          
          <NuxtLink class="btn btn-sm btn-outline-primary rounded-pill ms-lg-4" to="/">
            {{ phase.btn_text }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ============================================-->
    <!-- <section> ДЕЙНОСТИ =========================-->
    <!-- ============================================-->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 py-3">
            <div 
              class="opacity-75 bg-holder bg-size deinosti-shadow"
              :style="{'background-image':`url(${require('@/assets/img/gallery/deinosti-shadow2.png')})`, 'background-position':'top center', 'background-size':'contain'}"
            >
            </div>
            <h1 class="text-center">Резюме и дейности</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="deinosti">
      <div 
          class="bg-holder bg-size"
          :style="{'background-image':`url(${require('@/assets/img/gallery/dot-bg.png')})`, 'background-position':'top left', 'background-size':'auto'}"
      >
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-3 text-center font-black paragr">
              Петя Димова е практикуващ Фамилен психолог и Семеен консултант. Провежда индивидуални консултации и терапия. 
              Работи с двойки, деца и семейства при:
          </div>
          <div class="col-12 col-lg-8 m-auto">
            <ul class="accordion-dropdown list-group">
              <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================-->
    <!-- <section> СТЪПКИ ===========================-->
    <!-- ============================================-->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 py-3">
            <div 
              class="opacity-75 bg-holder bg-size"
              :style="{'background-image':`url(${require('@/assets/img/gallery/appointment-shadow2.png')})`, 'background-position':'top center', 'background-size':'contain'}"
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
          alt="arrow 1"
        />
        <img
          :src="require('~/assets/img/getting-started/arrow.png')"
          class="arrow2 position-absolute"
          alt="arrow 2"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Accordion from '../components/base/Accordion.vue';

export default {
    scrollToTop: true,
    name: "IndexPage",
    async asyncData({ $axios, params }) {
      try {
        const [accordions, steps, phases] = await Promise.all([
          $axios.$get(`/deinosti`),
          $axios.$get(`/step`),
          $axios.$get(`/phase`)
        ])
        return {
          accordions,
          steps,
          phases
        }
      } catch (e) {
        return {
          accordions: [],
          steps: [],
          phases: []
        }
      }
    },
    data() {
        return {
            phases: [
              /* {
                  "title": "Заобикалящата ни РЕАЛНОСТ",
                  "description": "На базата на житейския опит и личните ни убеждения се формира обективната представа за заобикалящата ни реалност. Начинът на мислене, преживяното и наученото оказват силно влияние върху решенията ни във всеки един момент от нашето битие. Понякога е трудно да се самонаблюдаваме и имаме нужда от оценка, която обикновено получаваме от хората около нас… или често се затваряме от невъзможността да бъдем разбрани от социалните групи към които принадлежим…\r\n\r\nКак да определим кои възгледи и принципи са правилни във всяка една ситуация? Може ли нашите дълбоко вкоренени убеждения да ни отдалечават от успеха, криейки проблемите дълбоко в несъзнаваното? \r\n\r\nРано или късно, задавайки си тези въпроси, сме направили правилната стъпка - сами и с помощта на своя личен психолог да преодолеем изпитанията, да променим това, което не ни харесва, да решим проблемите си.",
                  "ref": "reality",
                  "btn_text": "Виж календара",
                  "image": "1776.png"
              },
              {
                  "title": "Поемане на ИНИЦИАТИВАТА",
                  "description": "През цялото време на вашите срещи с фамилния терапевт вие сте активни партньори. Ролята на личния семеен психолог е както да ви подкрепи, така и да ви помогне да вземете инициативата в търсенето на конструктивни решения. \r\n \r\nФамилният психолог разглежда проблема като една сложна система от хора и техните взаимоотношения. Независимо от вашето семейно или професионално положение, търсенето на помощ от квалифициран психолог е инициатива, която със сигурност ще ви помогне най-малко да преосмислите начина, по който се опитвате да решавате проблемите си.",
                  "ref": "initiative",
                  "btn_text": "Виж работното ми време",
                  "image": "1776.png"
              },
              {
                  "title": "Личностен АНАЛИЗ",
                  "description": "Вашият фамилен терапевт може да ви помогне да разберете кои убеждения и вътрешни принципи могат да бъдат дисфункционални и по този начин да ви пречат да постигате вашите цели с необходимата лекота. Ще преминете през процес, който включва анализ на минали и сегашни събития от личния и професионалния ви живот. \r\n \r\nЗаедно с вашия фамилен психолог може да се отправите в търсене на въпроси и отговори и да стигнете до консенсусни решения, работещи във ваша полза. Чрез системния подход във фамилната терапия е възможно личностно актуализиране, което да окаже положително влияние върху социалните групи, които ви обграждат: семейство, приятели и колеги.",
                  "ref": "analysis",
                  "btn_text": "Виж свободните часове",
                  "image": "1776.png"
              },
              {
                  "title": "Намиране на РЕШЕНИЕ",
                  "description": "Основната методика на фамилния психолог е да ви запознае с адаптивни дългосрочни стратегии, чрез гъвкава краткосрочна тактика. Познавайки по-добре себе си, вашите близки, приятели, колеги, ще можете да приложите тези умения за анализ и поведение на практика. Така бихте постигнали обективна промяна, която ще ви направи по-уверени и по-успешни. \r\n\r\nСобствените ви действия и решения ще ви помогнат да постигнете желаната емоционална стабилност и по-добро качество на живот.",
                  "ref": "solution",
                  "btn_text": "Запиши час сега",
                  "image": "1776.png"
              } */
            ],
            accordions: [
                /*{ 
                    "title": "Кризи и проблеми в отношенията",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                },
                {
                    "title": "Сексуални и репродуктивни проблеми",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                },
                {
                    "title": "Трудности в общуването между деца и родители",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                },
                {
                    "title": "Проблеми вследствие на развод",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                },
                {
                    "title": "Помощ при интегриране в социалните групи",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                },
                {
                    "title": "Установяване, справяне и противодействие срещу психически тормоз",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                },
                {
                    "title": "Депресия, тревожност, панически атаки",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                },
                {
                    "title": "Постигане на положителна самооценка при липса на самочувствие",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                },
                {
                    "title": "Справяне със стреса",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                },
                {
                    "title": "Управление на гнева",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                } */
            ],
            steps: [
                /* {
                    "title": "Виж календара",
                    "description": "Ето тук (линк) можеш да видиш графика ми и да видиш свободните ми часове.",
                    "image": "steps1.png"
                },
                {
                    "title": "Провери свободните часове",
                    "description": "Ще получиш директен достъп до календара ми и ще можеш да видиш кога съм свободна.",
                    "image": "steps2.png"
                },
                {
                    "title": "Запази час",
                    "description": "Натисни върху часа, който те устройва, и напиши името си.",
                    "image": "steps3.png"
                } */
            ],
            showArrow: true,
            lastScrollPosition: 0
        };
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll)
    },
    methods: {
        goto(refName) {
            const element = this.$refs[refName][0]
            const top = element.offsetTop + 1500 // + window.innerHeight
            window.scrollTo({
              top: top,
              left: 0,
              behavior: 'smooth'
            })
        },
        onScroll() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition < 0) {
                return;
            }
            this.showArrow = currentScrollPosition < this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
        }
    },
    components: { Accordion }
}
</script>

<style scoped>
  .petya-circle {
    width: 60%;
  }

  .action-buttons .btn {
    margin-top: 20px;
  }

  @media only screen and (max-width: 768px) {
    .petya-circle {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1668px) {
    .appointment-steps img.arrow1, .appointment-steps img.arrow2 {
      display: none;
    }
  }

  @media only screen and (max-width: 488px) {
    .btn-mrgn {
      margin-bottom: 10px;
    }
  }
  @media only screen and (min-width: 489px) and (max-width: 767px) {
    .btn-mrgn {
      margin-bottom: 0px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .btn-mrgn {
      margin-bottom: 10px;
    }
  }
  @media only screen and (min-width: 992px) {
    .btn-mrgn {
      margin-bottom: 0px;
    }
  }

  .deinosti, .appointment-steps {
    padding-top: 1rem;
  }

  .deinosti .paragr {
    margin-bottom: 3rem;
  }

.deinosti-shadow {
  top: -12px;
}

/* SOCIAL ICONS SPIN */
.social-icons .item {
    display: inline-block;
    margin: 5px;
    width: 35px;
    height: 35px;
    transition: .3s all;
    position: relative;
    -webkit-transition: .3s all;
    text-align: center;
    color: #fff;
    background-color: #fff;
    line-height: 35px;
    border-radius: 50px;
  }

  .social-icons.spinned .item:hover {
      -webkit-animation: Social-Icons-Flipping .3s;
      animation: Social-Icons-Flipping .3s
  }
  .social-icons .item:hover {
      text-decoration: none;
      background-color: #42474E;
      color: #fff!important
  }
  .social-icons .item span {
      font-size: 18px;
      font-weight: 500;
      color: #fff;
  }

  .social-icons .facebook {
    background-color: #425F9C !important;
      color: #425F9C !important;
  }
  .social-icons .linkedin {
    background-color: #0073B2 !important;
    color: #0073B2 !important;
  }

  .facebook:hover {
      background-color: #425F9C !important;
  }
  .linkedin:hover {
      background-color: #0073B2 !important;
  }

  @-webkit-keyframes Social-Icons-Flipping {
      0% {
          -webkit-transform: rotate(0);
          transform: rotate(0)
      }
      100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg)
      }
  }
  @keyframes Social-Icons-Flipping {
      0% {
          -webkit-transform: rotate(0);
          transform: rotate(0)
      }
      100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg)
      }
  }

  /* ARROW DOWN ANIMATED */
  .arrow--hidden {
    display: none;
  }
  
  .bg-partner {
    margin-top: 10px;
  }
  .arrow-down-animated{
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%,-50%);
  }
  .arrow-down-animated span{
      display: block;
      width: 30px;
      height: 30px;
      border-bottom: 5px solid #b0daef;
      border-right: 5px solid #b0daef;
      transform: rotate(45deg);
      margin: -10px;
      animation: animate 2s infinite;
  }
  .arrow-down-animated span:nth-child(2){
      animation-delay: -0.2s;
  }
  .arrow-down-animated span:nth-child(3){
      animation-delay: -0.4s;
  }
  @keyframes animate {
      0%{
          opacity: 0;
          transform: rotate(45deg) translate(-20px,-20px);
      }
      50%{
          opacity: 1;
      }
      100%{
          opacity: 0;
          transform: rotate(45deg) translate(20px,20px);
      }
  }

  @media only screen and (max-width: 1199px) {
    .arrow-down-animated {
      display: none;
    }
  }

  h2 {
    font-weight: normal;
  }
</style>
