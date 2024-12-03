<template>
  <div class="mt-4 lg:container lg:mx-auto lg:pb-14 pb-6">
    <slider-home-component />
  </div>
  <div class="container mx-auto">
    <card-slide-component :title="'SẢN PHẨM BÁN CHẠY'">
      <div class="grid lg:grid-cols-4 grid-cols-2 gap-3 lg:gap-8 mt-4">
        <item-san-pham-component />
        <item-san-pham-component />
        <item-san-pham-component />
        <item-san-pham-component />
      </div>
    </card-slide-component>
  </div>
  <div class="mt-12 container mx-auto">
    <card-slide-component :title="'SẢN PHẨM MỚI NHẤT'">
      <div class="grid lg:grid-cols-4 grid-cols-2 gap-3 lg:gap-8 mt-4">
        <item-san-pham-component />
        <item-san-pham-component />
        <item-san-pham-component />
        <item-san-pham-component />
      </div>
    </card-slide-component>
  </div>
  <div class="mt-12">
    <card-slide-component
      :title="'BÀI VIẾT NỔI BẬT'"
      :class="'container mx-auto'"
    >
      <div
        class="lg:grid lg:grid-cols-3 lg:gap-8 mt-4 flex flex-nowrap space-x-3 lg:space-x-0 overflow-x-auto px-6 lg:px-0 hide-webkit-scrollbar lg:container lg:mx-auto"
      >
        <item-news-component />
        <item-news-component />
        <item-news-component />
      </div>
    </card-slide-component>
  </div>
  <div class="mt-12 lg:pb-16">
    <card-slide-component
      :title="'KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI'"
      :label-right="'Xem thêm'"
      is-column
      :class="'container mx-auto'"
    >
      <div class="mt-4 relative hidden lg:block container mx-auto">
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

      <div
        class="lg:hidden flex flex-nowrap space-x-3 lg:space-x-0 overflow-x-auto px-6 lg:px-0 hide-webkit-scrollbar mt-4 pb-6"
      >
        <item-comment-component />
        <item-comment-component />
        <item-comment-component />
      </div>
    </card-slide-component>
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
