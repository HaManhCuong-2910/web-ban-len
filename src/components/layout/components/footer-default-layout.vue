<template>
  <footer
    class="container mx-auto border-t border-t-black-200 lg:pt-8 lg:pb-11 grid grid-cols-3 gap-32"
  >
    <div>
      <img src="/images/LOGO.png" alt="logo" :class="'w-[192px]'" />
      <ul class="mt-4 w-full">
        <li class="flex items-center space-x-2">
          <img src="/images/Location.svg" alt="icon" class="w-6 h-6" />
          <p class="text-base text-brand-400">
            96 Định Công, Thanh Xuân, Hà Nội
          </p>
        </li>
        <li class="flex items-center space-x-2 mt-4">
          <img src="/images/Call.svg" alt="icon" class="w-6 h-6" />
          <p class="text-base text-brand-400">(123) 456-19010</p>
        </li>
      </ul>

      <div class="flex space-x-2 items-center mt-4">
        <img src="/images/facebook.svg" alt="icon" class="w-8 h-8" />
        <img src="/images/instagram.svg" alt="icon" class="w-8 h-8" />
        <img src="/images/Youtube.svg" alt="icon" class="w-8 h-8" />
        <img src="/images/@.svg" alt="icon" class="w-8 h-8" />
      </div>
    </div>
    <div class="col-span-2 grid grid-cols-3">
      <div class="border-r border-r-black-200">
        <h3 class="text-xl font-medium uppercase text-brand-400">
          VỀ CHÚNG TÔI
        </h3>
        <ul class="flex flex-col space-y-6 mt-6">
          <li>
            <nuxt-link :to="'/'" :class="'text-brand-400 text-base'">
              Trang chủ
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/'" :class="'text-brand-400 text-base'">
              Giới thiệu
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/'" :class="'text-brand-400 text-base'">
              Sản phẩm
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/'" :class="'text-brand-400 text-base'">
              Bài viết
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/'" :class="'text-brand-400 text-base'">
              Liên hệ
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="border-r border-r-black-200">
        <div class="mx-auto w-fit">
          <h3 class="text-xl font-medium uppercase text-brand-400">
            VỀ CHÚNG TÔI
          </h3>
          <ul class="flex flex-col space-y-6 mt-6">
            <li>
              <nuxt-link :to="'/'" :class="'text-brand-400 text-base'">
                Hướng dẫn mua hàng
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="'/'" :class="'text-brand-400 text-base'">
                Hướng dẫn thanh toán
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="'/'" :class="'text-brand-400 text-base'">
                Hướng dẫn giao nhận
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="'/'" :class="'text-brand-400 text-base'">
                Điều khoản dịch vụ
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="mx-auto w-fit">
          <h3 class="text-xl font-medium uppercase text-brand-400">
            CHÍNH SÁCH
          </h3>
          <ul class="flex flex-col space-y-6 mt-6">
            <li>
              <nuxt-link :to="'/'" :class="'text-brand-400 text-base'">
                Chính sách bảo mật
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="'/'" :class="'text-brand-400 text-base'">
                Chính sách vận chuyển
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="'/'" :class="'text-brand-400 text-base'">
                Chính sách đổi trả
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="'/'" :class="'text-brand-400 text-base'">
                Quy định sử dụng
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
