<template>
  <div>
    <div
      class="flex justify-between border-b border-b-brand-100 pb-2"
      :class="[
        props.isColumn && 'flex-col space-y-2 lg:flex-row lg:space-y-0',
        props.class,
      ]"
    >
      <h3 class="text-xl font-medium text-brand-400">{{ props.title }}</h3>
      <nuxt-link
        :to="props.urlRight"
        class="text-base font-medium text-brand-400"
        >{{ props.labelRight }}</nuxt-link
      >
    </div>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  labelRight: {
    type: String,
    default: "Xem tất cả",
  },
  urlRight: {
    type: String,
    default: "/",
  },
  isColumn: Boolean,
  class: String,
});
</script>

<style scoped lang="scss"></style>
