<template>
  <li class="list-group-item">
    <button type="button" @click="selected = !selected">
      <div class="d-flex align-items-center justify-content-between">
        <span class="font-medium">{{ accordion.title }}</span>
        <ChevronUpIcon v-if="selected" :size="20" />
        <ChevronDownIcon v-else :size="20" />
      </div>
    </button>

    <transition name="slide">
      <div v-if="selected" class="relative overflow-hidden transition-all duration-700" style="">
        <div class="py-2">
          <p class="text-sm font-light-black">
            {{ accordion.description }}
          </p>
        </div>
      </div>
    </transition>
  </li>
</template>
<script>
export default {
  name: 'BaseAccordion',
  props: {
    accordion: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: false,
    }
  },
}
</script>
