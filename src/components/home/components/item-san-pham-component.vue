<template>
  <div class="rounded-md border border-black-200">
    <nuxt-link :to="'/chi-tiet-san-pham'" class="relative">
      <img
        src="/images/preview-san-pham.png"
        alt="san pham"
        class="lg:h-[270px] h-[178px]"
      />
      <span class="header-icon"></span>
    </nuxt-link>

    <div class="lg:p-4 p-3 border-t border-t-black-200">
      <nuxt-link
        :to="'/chi-tiet-san-pham'"
        class="lg:text-base text-sm font-medium text-brand-400 text-ellipsis-1-line"
      >
        Len tự nhiên Meriwool
      </nuxt-link>
      <div class="flex items-center">
        <p class="lg:text-2xl text-base text-primary font-medium">35.000đ</p>
        <p class="lg:text-base text-sm text-black-300 line-through ml-2">
          70.000đ
        </p>
      </div>
      <div class="mt-2 flex items-center space-x-1">
        <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
        <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
        <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
        <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
        <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
        <p class="lg:text-base text-xs text-brand-400">(2058)</p>
      </div>
      <nuxt-link
        :to="'/'"
        class="mt-2 py-1 px-3 rounded-md border border-primary flex items-center font-medium text-primary w-fit text-base"
      >
        Thêm
        <img src="/images/cart-add.svg" class="w-4 ml-2" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  display: block;
  width: 20px;
  height: 20px;
  background-image: url("/images/heart-product.svg");
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    background-image: url("/images/heart-active-product.svg");
  }
}
</style>
