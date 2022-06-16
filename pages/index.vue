<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24 pt-24 scr">
      <BaseSection>
        <div class="col-span-12 lg:col-span-8 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <!-- 
          <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase"
            >Sign Up Today</span
          >
           -->
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[1.5rem] sm:text-4xl xl:text-5xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            Фамилен психолог
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            <span class="text-header-gradient">Петя Димова</span>
          </h2>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block mb-18">
            Петя Димова е практикуващ фамилен психолог и семеен консултант. Работи с двойки и семейства, провежда индивидуални консултации и терапия.
          </p>
          <br>
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="700"
            class="social-icons spinned"
          >
            <a class="item facebook" href="https://www.facebook.com/people/%D0%9F%D0%B5%D1%82%D1%8F-%D0%94%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0/100010592415774" target="_blank">
              <span><FontAwesomeIcon :icon="['fab', 'facebook']" /><!-- fa :icon="['fas', 'facebook']" /> --></span>
            </a>
            <!-- LINKEDIN DOESNT EXIST -->
            <a class="item linkedin" href="https://www.linkedin.com/in/petya-dimova-bb0898182/" target="_blank">
              <span><FontAwesomeIcon :icon="['fab', 'linkedin']" /><!-- <fa :icon="['fas', 'linkedin']" /> --></span>
            </a>
          </div>
          <br>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-16 sm:space-y-0 sm:space-x-4"
          >
            <BaseButton
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
            >
              Запиши час
            </BaseButton>
            <BaseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
            >
              <span>Сертификати</span>
            </BaseButton>
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-4">
          <div class="w-full">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              :src="require('~/assets/img/getting-started/petya-dimova-psiholog.jpg')"
              class="rounded-img"
              alt=""
            />
          </div>
        </div>
        <!--
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/idea-bulb.png')"
          class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/psychology.png')"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/support.png')"
          class="hidden sm:block absolute bottom-56 right-0 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/yoga.png')"
          class="hidden sm:block absolute top-20 sm:top-28 right-26 lg:right-0 lg:left-[40rem] w-8"
        />
        -->
      </BaseSection>
      <span data-aos="fade-up" data-aos-delay="900">
        <div class="arrow-down-animated" :class="{ 'arrow--hidden': !showArrow }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </span>
    </section>

    <!-- Partners section -->     
    <section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="max-w-screen-xl mx-auto px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <div class="cursor-pointer max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
            <img src="~/assets/img/realnost-link.png" class="max-w-[245px] mx-auto" alt="Realnost ikona" @click="goto('reality')" />
            <h3 class="text-xl text-neutral-800 font-semibold">Реалност</h3>
          </div>
          <div class="cursor-pointer max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
            <img src="~/assets/img/analiz-link.png" class="max-w-[245px] mx-auto" alt="Analiz ikona" @click="goto('analysis')" />
            <h3 class="text-xl text-neutral-800 font-semibold">Анализ</h3>
          </div>
          <div class="cursor-pointer max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
            <img src="~/assets/img/iniciativa-link.png" class="max-w-[245px] mx-auto" alt="Iniciativa ikona" @click="goto('initiative')"  />
            <h3 class="text-xl text-neutral-800 font-semibold">Инициатива</h3>
          </div>
          <div class="cursor-pointer max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
            <img src="~/assets/img/reshenie-link.png" class="max-w-[245px] mx-auto" alt="Reshenie ikona" @click="goto('solution')" />
            <h3 class="text-xl text-neutral-800 font-semibold">Решение</h3>
          </div>
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-16 left-64 xl:left-[13rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-16 left-64 xl:left-[35rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-16 right-64 xl:right-[13rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
        </div>
        <!--
        <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
          <LandingPartnerImage
            v-for="img in ['clever.png', 'diamon-cutts.png', 'swiss-finance.png', 'gambio.png']"
            :key="img"
            :img="img"
          />
        </div>
        -->
      </div>
    </section>

    <!-- section Реалност -->
    <section ref="reality" class="bg-trading-tools shadow rounded-2xl overflow-hidden relative max-w-full my-36">
      <BaseSection data-aos="fade-down">
        <div class="col-span-12 lg:col-span-4 mt-10 pb-10">
          <div class="w-full">
            <img :src="require('~/assets/img/reality-cubes-2.png')" class="w-[95%]" alt="" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-8 space-y-6 px-4 sm:px-6 mt-10 pb-10">
          <h2 class="text-4xl font-semibold">
            Заобикалящата ни <span class="text-header-gradient">РЕАЛНОСТ</span>
          </h2>
          <h4 class="text-lg font-medium">Нашето битие</h4>
          <p class="paragraph">
            На базата на житейския опит и личните ни убеждения се формира обективната представа за заобикалящата ни реалност. 
            Начинът на мислене, преживяното и наученото оказват силно влияние върху решенията ни във всеки един момент от 
            нашето битие. Понякога е трудно да се самонаблюдаваме и имаме нужда от оценка, която обикновено получаваме от 
            хората около нас… или често се затваряме от невъзможността да бъдем разбрани от социалните групи към които принадлежим…
          </p>
          <h4 class="text-lg font-medium">Основата на проблемите</h4>
          <p class="paragraph">
            Как да определим кои възгледи и принципи са правилни във всяка една ситуация? Може ли нашите дълбоко вкоренени 
            убеждения да ни отдалечават от успеха, криейки проблемите дълбоко в несъзнаваното? 
          </p>
          <h4 class="text-lg font-medium">Решението</h4>
          <p class="paragraph">
            Рано или късно, задавайки си тези въпроси, сме направили правилната стъпка - сами и с помощта на своя 
            личен психолог да преодолеем изпитанията, да променим това, което не ни харесва, да решим проблемите си.
            екшън БУТОНИ
          </p>
          <br>
          <BaseButton
            class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
          >
            Виж календара
          </BaseButton>
        </div>
      </BaseSection>
    </section>

    <!-- section Анализ -->
    <section ref="analysis" data-aos="fade-down" class="bg-trading-tools relative max-w-full sm:mx-4 my-20 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <div class="col-span-12 lg:col-span-8 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-10 pb-10">
          <h2 class="text-4xl font-semibold">Личностен <span class="text-header-gradient">АНАЛИЗ</span></h2>
          <div class="space-y-2">
            <p class="paragraph text-sm xl:text-base">
              Вашият фамилен терапевт може да ви помогне да разберете кои убеждения и вътрешни принципи могат да бъдат 
              дисфункционални и по този начин да ви пречат да постигате вашите цели с необходимата лекота. Ще преминете през 
              процес, който включва:
            </p>
            <ul class="space-y-4 sm:space-y-2 paragraph text-sm xl:text-base">
              <LandingListItem title="Анализ на минали и сегашни събития от личния и професионалния ви живот" />
              <LandingListItem title="Търсене на въпроси и отговори" />
              <LandingListItem title="Стигане до консенсусни решения, работещи във ваша полза" />
            </ul>
            <br>
            <div class="paragraph text-sm xl:text-base">
              Чрез системния подход във фамилната терапия е възможно личностно актуализиране, 
              което да окаже положително влияние върху социалните групи, които ви обграждат: семейство, приятели и колеги.
            </div>
            <br>
            <BaseButton
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
            >
              Виж свободните часове
            </BaseButton>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-4 mt-10 pb-10">
          <div class="w-full">
            <img :src="require('~/assets/img/reality-cubes-2.png')" class="w-[95%]" alt="" />
          </div>
        </div>
      </div>
    </section>

    <!-- section Инициатива -->
    <section ref="initiative" data-aos="fade-down" class="bg-trading-tools shadow rounded-2xl overflow-hidden relative max-w-full my-24">
      <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div class="col-span-12 lg:col-span-4 mt-10 pb-10">
          <div class="w-full">
            <img :src="require('~/assets/img/reality-cubes-2.png')" class="w-[95%]" alt="" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-8 space-y-8 sm:space-y-6 mt-10 pb-10 xl:px-8">
          <h2 class="text-4xl font-semibold">Поемане на <span class="text-header-gradient">ИНИЦИАТИВАТА</span></h2>
            <p class="paragraph text-sm xl:text-base">
              През цялото време на вашите срещи с фамилния терапевт, вие сте активни партньори. Ролята на личния семеен 
              психолог е както да ви подкрепи, така и да ви помогне да вземете инициативата в търсенето на конструктивни 
              решения. Фамилният психолог разглежда проблема като една сложна система от хора и техните взаимоотношения. 
              Независимо от вашето семейно или професионално положение, търсенето на помощ от квалифициран психолог е 
              инициатива, която със сигурност ще ви помогне най-малко да преосмислите начина, по който се опитвате да 
              решавате проблемите си.
            </p>
            <ul class="space-y-8 sm:space-y-4">
              <LandingListItem title="Подкрепа">
                <p class="text-sm text-gray-700 leading-relaxed">
                  Ще получите подкрепа за всяко нещо, ще получите подкрепа за всяко нещо, ще получите подкрепа за всяко нещо, 
                  ще получите подкрепа за всяко нещо, ще получите подкрепа за всяко нещо, ще получите подкрепа за всяко нещо! 
                </p>
              </LandingListItem>
              <LandingListItem title="Подкрепа">
                <p class="text-sm text-gray-700 leading-relaxed">
                  Ще получите подкрепа за всяко нещо, ще получите подкрепа за всяко нещо, ще получите подкрепа за всяко нещо, 
                  ще получите подкрепа за всяко нещо, ще получите подкрепа за всяко нещо, ще получите подкрепа за всяко нещо! 
                </p>
              </LandingListItem>
            </ul>
            <br>
            <BaseButton
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
            >
              Свържи се с мен
            </BaseButton>
        </div>
      </div>
    </section>

    <!-- section Решение -->
    <section ref="solution" data-aos="fade-down" class="bg-trading-tools relative max-w-full sm:mx-4 my-20 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <div class="col-span-12 lg:col-span-8 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-10 pb-10">
          <h2 class="text-4xl font-semibold">Намиране на <span class="text-header-gradient">РЕШЕНИЕ</span></h2>
            <p class="paragraph text-sm xl:text-base">
              Основната методика на фамилния психолог е да ви запознае с адаптивни дългосрочни стратегии чрез гъвкава 
              краткосрочна тактика. Познавайки по-добре себе си, вашите близки, приятели и колеги ще можете да 
              приложите тези умения за анализ и поведение на практика. Така бихте постигнали обективна промяна, 
              която ще ви направи по-уверени и по-успешни. Собствените ви действия и решения ще ви помогнат да 
              постигнете желаната емоционална стабилност и по-добро качество на живот.
            </p>
            <h4 class="text-lg font-medium">Решението</h4>
            <p class="paragraph">
              Рано или късно, задавайки си тези въпроси, сме направили правилната стъпка - сами и с помощта на своя 
              личен психолог да преодолеем изпитанията, да променим това, което не ни харесва, да решим проблемите си. 
            </p>
            <h4 class="text-lg font-medium">Решението</h4>
            <p class="paragraph">
              Рано или късно, задавайки си тези въпроси, сме направили правилната стъпка - сами и с помощта на своя 
              личен психолог да преодолеем изпитанията, да променим това, което не ни харесва, да решим проблемите си. 
            </p>
            <br>
            <BaseButton
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
            >
              Запиши час сега
            </BaseButton>
        </div>
        <div class="col-span-12 lg:col-span-4 mt-10 pb-10">
          <div class="w-full">
            <img :src="require('~/assets/img/reality-cubes-2.png')" class="w-[95%]" alt="" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Getting started section -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">
          Запишете час в 3 лесни стъпки
        </h2>
        <p>/тук ще има реални снимки от календара на сайта/</p>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <LandingStep v-for="step in steps" :key="step.index" :step="step" />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 left-64 xl:left-[29rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 right-64 xl:right-[29rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- Резюме и дейност section -->
    <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-8 px-4 sm:px-6 mt-8">
          <!-- <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span> -->
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
      </BaseSection>
    </section>

    <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Обратно горе</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div>
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  // THIS:
  /* async asyncData({ $axios, params }) {
    try {
      const [accordions, steps] = await Promise.all([
        $axios.$get(`/deinosti`),
        $axios.$get(`/step`),
      ])
      return { 
        accordions,
        steps
      };
    } catch (e) {
      return {
        accordions: [],
        steps: []
      };
    }
  }, */
  /*  not this
  async asyncData({ $http }) {
    const steps = await $http.$get('http://localhost:8000/api/step')
    console.log(steps)
    return { steps }
  },
  */
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      accordions: [
        {
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
      ],
      showArrow: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    goto(refName) {
      const element = this.$refs[refName]
      const top = element.offsetTop

      window.scrollTo(0, top)
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      this.showArrow = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  },
}
</script>
<style scoped>

.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}

.rounded-img {
  border: 15px solid #fff;
  border-radius: 50%;
}

.image-links img {
  width: 130px;
  height: 130px;
  display: inline-block;
  cursor: pointer;
  margin-right: 50px;
}

.arrow--hidden {
  display: none;
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
#hero {
  height: 90vh;
  position: relative;
  padding-bottom: 5px;
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
    border-bottom: 5px solid #06A8FF;
    border-right: 5px solid #06A8FF;
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
</style>
