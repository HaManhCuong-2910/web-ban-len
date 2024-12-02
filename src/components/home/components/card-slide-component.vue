<template>
  <div>
    <div class="flex justify-between border-b border-b-brand-100 pb-2">
      <h3 class="text-xl font-medium text-brand-400">SẢN PHẨM BÁN CHẠY</h3>
      <nuxt-link :to="'/'" class="text-base font-medium text-brand-400"
        >Xem tất cả</nuxt-link
      >
    </div>

    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
