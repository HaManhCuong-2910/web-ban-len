<template>
  <div class="rounded-md border border-black-200">
    <nuxt-link :to="'/'">
      <img src="/images/preview-news.png" alt="news" />
    </nuxt-link>
    <div class="p-4 border-t border-t-black-200">
      <nuxt-link :to="'/'" class="text-base font-medium text-brand-400">
        Cách đan len cho người mới bắt đầu
      </nuxt-link>
      <p class="flex items-center text-brand-400 mt-2">
        30/11/2024
        <img src="/images/calendar.svg" alt="calendar" class="w-3 ml-2" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
