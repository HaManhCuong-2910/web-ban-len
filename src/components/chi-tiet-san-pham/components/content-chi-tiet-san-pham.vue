<template>
  <div>
    <h2 class="text-3xl font-medium text-brand-400">Len tự nhiên Meriwool</h2>
    <div class="flex items-center mt-3">
      <p class="lg:text-2xl text-base text-primary font-medium">35.000đ</p>
      <p class="lg:text-base text-sm text-black-300 line-through ml-2">
        70.000đ
      </p>
    </div>
    <div class="mt-3 flex items-center space-x-1">
      <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
      <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
      <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
      <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
      <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
      <p class="lg:text-base text-xs text-brand-400">(2058)</p>
    </div>
    <div class="mt-6 flex items-center">
      <p class="text-sm text-brand-400">Số lượng</p>
      <div class="ml-6 flex space-x-2 items-center">
        <div
          class="cursor-pointer w-10 h-10 rounded-md flex justify-center items-center border border-black-200"
          @click="count--"
        >
          <img src="/images/minus.svg" alt="minus" class="w-3" />
        </div>
        <input
          type="number"
          v-model="count"
          class="input-custom w-10 h-10 rounded-md text-base text-brand-400 font-medium border border-black-200 text-center outline-none"
        />
        <div
          class="cursor-pointer w-10 h-10 rounded-md flex justify-center items-center border border-black-200"
          @click="count++"
        >
          <img src="/images/plus.svg" alt="minus" class="w-3" />
        </div>
      </div>
    </div>
    <div>
      <p class="text-base text-brand-400 mt-3">Màu sắc</p>
      <div class="grid grid-cols-2 gap-4 mt-2">
        <div class="flex space-x-2 cursor-pointer">
          <span class="bg-[#E5D3B3] w-6 h-6 block rounded-md"></span>
          <p class="text-base text-ink-400">Be</p>
        </div>
        <div class="flex space-x-2 cursor-pointer">
          <span
            class="bg-white border border-brand-400 w-6 h-6 block rounded-md"
          ></span>
          <p class="text-base text-ink-400">Trắng</p>
        </div>
        <div class="flex space-x-2 cursor-pointer">
          <span class="bg-[#FF7F50] w-6 h-6 block rounded-md"></span>
          <p class="text-base text-ink-400">Cam san hô</p>
        </div>
        <div class="flex space-x-2 cursor-pointer">
          <span class="bg-[#FFFF00] w-6 h-6 block rounded-md"></span>
          <p class="text-base text-ink-400">Vàng</p>
        </div>
        <div class="flex space-x-2 cursor-pointer">
          <span class="bg-[#64270C] w-6 h-6 block rounded-md"></span>
          <p class="text-base text-ink-400">Đen</p>
        </div>
        <div class="flex space-x-2 cursor-pointer">
          <span class="bg-[#D9FD49] w-6 h-6 block rounded-md"></span>
          <p class="text-base text-ink-400">Vàng chanh</p>
        </div>
        <div class="flex space-x-2 cursor-pointer">
          <span class="bg-[#FF0000] w-6 h-6 block rounded-md"></span>
          <p class="text-base text-ink-400">Đỏ</p>
        </div>
        <div class="flex space-x-2 cursor-pointer">
          <span class="bg-[#808080] w-6 h-6 block rounded-md"></span>
          <p class="text-base text-ink-400">Xám</p>
        </div>
        <div class="flex space-x-2 cursor-pointer">
          <span class="bg-[#FFC0CB] w-6 h-6 block rounded-md"></span>
          <p class="text-base text-ink-400">Hồng</p>
        </div>
        <div class="flex space-x-2 cursor-pointer">
          <span class="bg-[#0000FF] w-6 h-6 block rounded-md"></span>
          <p class="text-base text-ink-400">Xanh dương</p>
        </div>
      </div>
    </div>

    <div class="mt-7 flex flex-col">
      <button-common :type="ETypeButton.secondary">
        <div class="flex items-center">
          <p class="text-base font-medium text-brand-400">Thêm vào giỏ hàng</p>
          <img
            src="/images/cart-chi-tiet.svg"
            class="w-5 ml-2 object-contain"
          />
        </div>
      </button-common>
      <button-common class="mt-3 !ml-0">
        <div class="flex items-center">
          <p class="text-base font-medium text-white">Mua ngay</p>
          <img src="/images/arrow-right.svg" class="w-4 object-contain ml-2" />
        </div>
      </button-common>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ETypeButton } from "~/src/services/constant";

const count = ref(1);
</script>

<style scoped lang="scss"></style>
