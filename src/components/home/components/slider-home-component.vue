<template>
  <swiper pagination :modules="modules" class="mySwiper">
    <swiper-slide>
      <img src="/images/image.png" alt="banner" srcset="" />
    </swiper-slide>
    <swiper-slide>
      <img src="/images/image.png" alt="banner" srcset="" />
    </swiper-slide>
    <swiper-slide>
      <img src="/images/image.png" alt="banner" srcset="" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const modules = ref([Pagination]);
</script>

<style scoped lang="scss">
:deep(.swiper-pagination-bullet-active) {
  background: #ef9635 !important;
}
</style>
