<template>
  <div class="mt-4 container mx-auto pb-14">
    <slider-home-component />
    <div class="mt-12">
      <card-slide-component>
        <div class="grid grid-cols-4 gap-8 mt-4">
          <item-slide-component />
          <item-slide-component />
          <item-slide-component />
          <item-slide-component />
        </div>
      </card-slide-component>
    </div>
    <div class="mt-12">
      <card-slide-component>
        <div class="grid grid-cols-4 gap-8 mt-4">
          <item-slide-component />
          <item-slide-component />
          <item-slide-component />
          <item-slide-component />
        </div>
      </card-slide-component>
    </div>
    <div class="mt-12">
      <card-slide-component>
        <div class="grid grid-cols-3 gap-8 mt-4">
          <item-news-component />
          <item-news-component />
          <item-news-component />
        </div>
      </card-slide-component>
    </div>
    <div class="mt-12">
      <card-slide-component>
        <div class="mt-4 relative">
          <swiper
            :navigation="false"
            loop
            :slides-per-view="3"
            :space-between="16"
            :modules="modules"
            class="mySwiper"
            @swiper="onSwiper"
          >
            <swiper-slide><item-comment-component /></swiper-slide>
            <swiper-slide><item-comment-component /></swiper-slide>
            <swiper-slide><item-comment-component /></swiper-slide>
            <swiper-slide><item-comment-component /></swiper-slide>
            <swiper-slide><item-comment-component /></swiper-slide>
            <swiper-slide><item-comment-component /></swiper-slide>
          </swiper>
          <div>
            <span
              class="absolute top-1/2 -translate-y-1/2 -left-5 z-20"
              @click="swiperPrevSlide()"
            >
              <div
                class="w-8 h-8 border border-black-300 rounded-full bg-white flex justify-center items-center cursor-pointer group hover:border-primary duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-black-300 group-hover:stroke-primary duration-300"
                >
                  <path
                    d="M14.6667 8H1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.99999 12.6668L1.33333 8.00016L5.99999 3.3335"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </span>
            <span
              class="absolute top-1/2 -right-5 -translate-y-1/2 z-20 rotate-180"
              @click="swiperNextSlide()"
            >
              <div
                class="w-8 h-8 border border-black-300 rounded-full bg-white flex justify-center items-center cursor-pointer group hover:border-primary duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-black-300 group-hover:stroke-primary duration-300"
                >
                  <path
                    d="M14.6667 8H1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.99999 12.6668L1.33333 8.00016L5.99999 3.3335"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </span>
          </div>
        </div>
      </card-slide-component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";

import "swiper/css/navigation";

const modules = ref([Navigation]);

const swiperInstance = ref();

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};

const swiperNextSlide = () => {
  swiperInstance.value.slideNext();
};
const swiperPrevSlide = () => {
  swiperInstance.value.slidePrev();
};
</script>

<style scoped lang="scss">
// :deep(.swiper-button-prev),
// :deep(.swiper-button-next) {
//   &::after {
//     font-size: 16px;
//     color: #000 !important;
//     padding: 8px;
//     border-radius: 100%;
//     background: #fff;
//     box-shadow: 0px 10px 20px 0px #6666660d;

//     box-shadow: 0px 2px 4px 0px #0000000d;
//   }
// }

// :deep(.swiper-button-prev) {
//   left: 0px;
// }
</style>
