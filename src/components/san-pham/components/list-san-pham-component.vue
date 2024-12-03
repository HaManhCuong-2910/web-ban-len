<template>
  <div>
    <input-common
      v-model:value="value"
      :placeholder="'Tìm kiếm sản phẩm trong trang này'"
    >
      <template #suffix>
        <img src="/images/search-san-pham.svg" alt="icon" class="w-4 h-4" />
      </template>
    </input-common>

    <div class="flex justify-between border-b border-b-brand-100 pb-2 mt-4">
      <h3 class="text-xl font-medium text-brand-400">5900 sản phẩm</h3>
      <nuxt-link :to="'/san-pham'" class="text-base font-medium text-brand-400"
        >Xem tất cả</nuxt-link
      >
    </div>

    <div class="grid lg:grid-cols-3 grid-cols-2 gap-3 lg:gap-8 mt-4">
      <item-san-pham-component />
      <item-san-pham-component />
      <item-san-pham-component />
      <item-san-pham-component />
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref("");
</script>

<style scoped lang="scss"></style>
