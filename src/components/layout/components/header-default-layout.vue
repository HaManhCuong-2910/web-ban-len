<template>
  <header>
    <div
      class="container grid lg:grid-cols-5 grid-cols-2 items-center lg:gap-4 mx-auto lg:pt-6 pt-2 lg:pb-4"
    >
      <div class="flex items-center">
        <nuxt-link :to="'/'">
          <img
            src="/images/bar.svg"
            alt="bar icon"
            class="mr-2 w-4 h-4 lg:hidden"
            @click="drawer = true"
          />
        </nuxt-link>
        <nuxt-link :to="'/'">
          <img src="/images/LOGO.png" alt="logo" class="w-[118px]" />
        </nuxt-link>
      </div>
      <div class="lg:col-span-3 lg:block hidden">
        <ul
          class="flex space-x-6 items-center justify-center container-list-desktop"
        >
          <li class="p-3" :class="route.path === '/san-pham' && 'active'">
            <nuxt-link :to="'/san-pham'"> Sản phẩm </nuxt-link>
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

    <el-drawer
      v-model="drawer"
      :with-header="false"
      :lock-scroll="true"
      :direction="'ltr'"
      :size="304"
    >
      <div class="flex justify-between items-center">
        <p class="text-xl text-brand-400 font-medium">MENU</p>
        <img
          src="/images/close.svg"
          alt="icon"
          class="w-5 h-5"
          @click="drawer = false"
        />
      </div>
      <ul class="container-list-mobile mt-6">
        <li class="pb-4 border-b border-b-black-100">
          <nuxt-link
            :to="'/san-pham'"
            :class="'text-brand-400 text-sm'"
            @click="drawer = false"
          >
            Sản phẩm
          </nuxt-link>
        </li>
        <li class="py-4 border-b border-b-black-100">
          <nuxt-link
            :to="'/'"
            :class="'text-brand-400 text-sm'"
            @click="drawer = false"
          >
            Bài viết
          </nuxt-link>
        </li>
        <li class="py-4 border-b border-b-black-100">
          <nuxt-link
            :to="'/'"
            :class="'text-brand-400 text-sm'"
            @click="drawer = false"
          >
            Giới thiệu
          </nuxt-link>
        </li>
        <li class="py-4 border-b border-b-black-100">
          <nuxt-link
            :to="'/'"
            :class="'text-brand-400 text-sm'"
            @click="drawer = false"
          >
            Liên hệ
          </nuxt-link>
        </li>
      </ul>
    </el-drawer>
  </header>
</template>

<script setup lang="ts">
const drawer = ref(false);

const route = useRoute();
</script>

<style scoped lang="scss">
header {
  width: 100%;

  @apply bg-white;
}

.container-list-desktop {
  li {
    position: relative;

    &.active {
      a {
        @apply text-primary;
      }

      &::before {
        width: 100%;
      }
    }

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
