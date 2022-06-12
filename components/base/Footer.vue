<template>
  <footer class="max-w-screen-xl px-8 mx-auto">
    <div class="w-full border-y border-[#DDDDDD]">
      <div class="max-w-screen-xl mx-auto grid grid-cols-12 gap-x-6">
        <div
          class="col-span-12 lg:col-span-4 self-center border-l sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r border-[#DDDDDD]"
        >
          <div class="sm:hidden xl:block mb-6 sm:mb-0">
            <div
            class="text-[1.1rem] sm:text-1xl xl:text-2xl font-bold">
            <!-- <img :src="require('~/assets/img/logo/petya.svg')" class="w-24 -mt-2" alt="Петя Димова" /> -->
            <span class="text-header-gradient">Петя Димова</span>
          </div>
          </div>
        </div>
        <div
          class="col-span-12 lg:col-span-4 sm:py-12 border-t sm:border-t-0 xl:border-r border-[#DDDDDD]"
        >
          <ul class="space-y-4">
            <NavLink name="Начало" url="#" />
            <NavLink name="Сертификати" url="#" />
            <NavLink name="Галерия" url="#" />
            <NavLink name="Блог" url="#" />
            <NavLink name="Контакти" url="#" />
          </ul>
        </div>
        <div
          class="col-span-12 lg:col-span-4 sm:py-12 border-t border-r sm:border-t-0 sm:border-r border-[#DDDDDD]"
        >
          <ul class="space-y-4">
            <NavLink name="Общи условия" url="#" />
            <NavLink name="Използване на бисквитки" url="#" />
            <NavLink name="Декларация за поверителност" url="#" />
            <NavLink name="Лични данни" url="#" />
          </ul>
        </div>
        <!--
        <div
          class="sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 border-t sm:border-t-0 border-[#DDDDDD]"
        >
          <h5 class="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">Newsletter</h5>
          <p class="text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            Never miss anything crypto when <br class="sm:hidden" />you're on the go
          </p>
          <div class="flex items-center space-x-2">
            <input
              type="text"
              class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
              placeholder="Enter your email"
            />
            <button
              class="bg-blue-gradient px-4 py-4 sm:py-3 rounded-md text-white hover:shadow-md transition duration-300"
            >
              <ArrowRightIcon :size="20" />
            </button>
          </div>
        </div>
        -->
      </div>
    </div>
    <div class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900">
      &copy; Copyright 2022 Петя Димова ЕООД. Всички права запазени.
    </div>
  </footer>
</template>
<script>
export default {
  name: 'BaseFooter',
}
</script>
