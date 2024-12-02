<template>
  <header>
    <div
      class="container grid grid-cols-5 items-center gap-4 mx-auto pt-6 pb-4"
    >
      <div><img src="/images/LOGO.png" alt="logo" class="lg:w-[118px]" /></div>
      <div class="col-span-3">
        <ul class="flex space-x-6 items-center justify-center">
          <li class="p-3">
            <nuxt-link :to="'/'"> Sản phẩm </nuxt-link>
          </li>
          <li class="p-3">
            <nuxt-link :to="'/'"> Bài viết </nuxt-link>
          </li>
          <li class="p-3">
            <nuxt-link :to="'/'"> Giới thiệu </nuxt-link>
          </li>
          <li class="p-3">
            <nuxt-link :to="'/'"> Liên hệ </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="flex justify-end space-x-3">
        <nuxt-link :to="'/'">
          <img src="/images/Heart.svg" alt="icon" class="w-5" />
        </nuxt-link>
        <nuxt-link :to="'/'">
          <img src="/images/Cart.svg" alt="icon" class="w-5" />
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isShow = computed(() => {
  return window.scrollY > 200;
});
</script>

<style scoped lang="scss">
.box-shadow {
  box-shadow: 0px 0px 10px #e8e8e8;
}
header {
  width: 100%;

  @apply bg-white;
}

ul {
  li {
    position: relative;
    a {
      @apply text-base text-black-300;
      transition: 0.3s;
    }

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      display: block;
      width: 0%;
      height: 2px;
      @apply bg-primary;
      transition: 0.3s;
    }

    &:hover {
      a {
        @apply text-primary;
      }

      &::before {
        width: 100%;
      }
    }
  }
}
</style>
