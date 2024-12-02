<template>
  <div class="rounded-md border border-black-200">
    <nuxt-link :to="'/'">
      <img
        src="/images/preview-san-pham.png"
        alt="san pham"
        class="h-[270px]"
      />
    </nuxt-link>

    <div class="p-4 border-t border-t-black-200">
      <nuxt-link :to="'/'" class="text-base font-medium text-brand-400">
        Len tự nhiên Meriwool
      </nuxt-link>
      <div class="flex items-center">
        <p class="text-2xl text-primary font-medium">35.000đ</p>
        <p class="text-base text-black-300 line-through ml-2">70.000đ</p>
      </div>
      <div class="mt-2 flex items-center space-x-1">
        <img src="/images/star.svg" alt="start" class="w-4" />
        <img src="/images/star.svg" alt="start" class="w-4" />
        <img src="/images/star.svg" alt="start" class="w-4" />
        <img src="/images/star.svg" alt="start" class="w-4" />
        <img src="/images/star.svg" alt="start" class="w-4" />
        <p class="text-base text-brand-400">(2058)</p>
      </div>
      <nuxt-link
        :to="'/'"
        class="mt-2 py-1 px-3 rounded-md border border-primary flex items-center font-medium text-primary w-fit"
      >
        Thêm
        <img src="/images/cart-add.svg" class="w-4 ml-2" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
