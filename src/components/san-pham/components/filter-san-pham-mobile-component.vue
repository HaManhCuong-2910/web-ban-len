<template>
  <div class="grid grid-cols-2">
    <div
      class="py-2 px-8 flex justify-between bg-brand-400 border-r border-r-white"
      @click="
        isShowFilter = !isShowFilter;
        typeFilter = 1;
      "
    >
      <p class="text-base text-white">Sắp xếp</p>
      <img src="/images/arrow-down-white.svg" alt="icon" class="w-4" />
    </div>
    <div
      class="py-2 px-8 flex justify-between bg-brand-400"
      @click="
        isShowFilter = !isShowFilter;
        typeFilter = 2;
      "
    >
      <p class="text-base text-white">Lọc theo</p>
      <img src="/images/filter.svg" alt="icon" class="w-4" />
    </div>
  </div>
  <div class="container mx-auto mt-4" v-if="isShowFilter">
    <ul
      v-if="typeFilter === 1"
      class="p-4 border border-black-200 rounded-md flex flex-col space-y-4"
    >
      <li class="text-sm text-brand-400">Liên quan</li>
      <li class="text-sm text-brand-400">Bán chạy nhất</li>
      <li class="text-sm text-brand-400">Mới nhất</li>
      <li class="text-sm text-brand-400">Giá giảm dần</li>
      <li class="text-sm text-brand-400">Giá tăng dần</li>
      <li class="text-sm text-brand-400">Cũ đến mới</li>
      <li class="text-sm text-brand-400">A-Z</li>
      <li class="text-sm text-brand-400">Z-A</li>
    </ul>
    <div v-if="typeFilter === 2">
      <collapse-filter-san-pham-component />
    </div>
  </div>
</template>

<script setup lang="ts">
const isShowFilter = ref(false);
const typeFilter = ref(1);
</script>

<style scoped lang="scss"></style>
