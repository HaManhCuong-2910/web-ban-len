<template>
  <div class="pb-16">
    <div class="container mx-auto mt-4 lg:mt-0">
      <bread-crumb :list-breadcrumb="listBreadCrumb" />
    </div>
    <div class="mt-4 grid grid-cols-3 gap-8 container mx-auto">
      <div class="col-span-2 grid grid-cols-5 gap-4">
        <Carousel
          id="gallery"
          :items-to-show="1"
          :wrap-around="true"
          v-model="currentSlide"
          class="col-span-4"
        >
          <Slide v-for="(slide, index) in gallery" :key="index">
            <img
              :src="slide"
              alt="slide banner"
              class="object-contain rounded-md"
            />
          </Slide>
        </Carousel>
        <ul class="flex flex-col space-y-8 max-h-[477px] overflow-y-auto">
          <li
            class=""
            v-for="(item, index) in gallery"
            :key="item"
            @click="slideTo(index)"
          >
            <img :src="item" alt="thumb" class="w-full h-[120px]" />
          </li>
        </ul>
      </div>
      <div>
        <content-chi-tiet-san-pham />
      </div>
      <div class="col-span-2">
        <el-collapse v-model="activeNames">
          <el-collapse-item class="container-item" title="Mô tả" name="1">
            <p class="text-base text-brand-400">
              Meriwool được làm từ 100% sợi Merino siêu giặt, nổi tiếng với
              những đặc tính tuyệt vời, siêu mềm khi chạm vào, thoải mái và ấm
              áp. Ngoài ra, sợi này có khả năng thấm hút cao, chống nước và cách
              nhiệt. Meriwool của chúng tôi hoàn toàn phù hợp với làn da mỏng
              manh của trẻ sơ sinh. Và điều tuyệt vời nhất là sợi này được xử lý
              bằng Superwash, có nghĩa là nên giặt bằng máy, sử dụng chương
              trình giặt nhẹ nhàng.
            </p>
          </el-collapse-item>
          <el-collapse-item
            class="container-item"
            title="Chi tiết sản phẩm"
            name="2"
          >
            <div class="grid grid-cols-3 gap-5">
              <p class="text-base text-brand-400">Trọng lượng</p>
              <p class="text-brand-400 text-base font-medium">100 gr</p>
            </div>
            <div class="grid grid-cols-3 gap-5">
              <p class="text-base text-brand-400">Thành phần</p>
              <p class="text-brand-400 text-base font-medium">
                100% Superwash Merino
              </p>
            </div>
            <div class="grid grid-cols-3 gap-5">
              <p class="text-base text-brand-400">Thương hiệu</p>
              <p class="text-brand-400 text-base font-medium">The Meriwool</p>
            </div>
            <div class="grid grid-cols-3 gap-5">
              <p class="text-base text-brand-400">Chăm sóc</p>
              <div class="text-brand-400 text-base font-medium">
                Ủi ở nhiệt độ thấp
                <br />
                Không sấy khô
              </div>
            </div>
            <div class="grid grid-cols-3 gap-5">
              <p class="text-base text-brand-400">Chiều dài</p>
              <p class="text-brand-400 text-base font-medium">136 m</p>
            </div>
            <div class="grid grid-cols-3 gap-5">
              <p class="text-base text-brand-400">Hướng dẫn sử dụng</p>
              <p class="text-brand-400 text-base font-medium">
                Kim đan khuyến nghị: 5mm <br />
                Kim móc khuyến nghị: 5mm <br />
                Mũi đan đơn: 11 mũi x 13 hàng cho 10cm
                <br />
                Mũi đan kép: 16 mũi x 20 hàng cho 10cm
              </p>
            </div>
          </el-collapse-item>
          <el-collapse-item
            class="container-item"
            title="Đánh giá của khách hàng"
            name="3"
          >
            <div
              class="p-4 rounded-md border border-black-200 grid grid-cols-12 items-center"
            >
              <div>
                <img src="/images/avatar.png" class="w-6" />
              </div>
              <div class="col-span-3">
                <p class="text-base font-medium text-brand-400">
                  Trần Nguyên Đơn
                </p>
                <div class="flex mt-1">
                  <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
                  <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
                  <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
                  <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
                  <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
                </div>
              </div>
              <div class="col-span-8 text-sm text-brand-400">
                “Đây là lần đầu tiên mình mua len online và thực sự rất hài
                lòng. Giao hàng nhanh, tư vấn nhiệt tình và sản phẩm chất lượng
                vượt xa mong đợi. Len rất dễ đan và không bị rối!”
              </div>
            </div>
            <div
              class="p-4 rounded-md border border-black-200 grid grid-cols-12 items-center mt-4"
            >
              <div>
                <img src="/images/avatar.png" class="w-6" />
              </div>
              <div class="col-span-3">
                <p class="text-base font-medium text-brand-400">
                  Trần Nguyên Đơn
                </p>
                <div class="flex mt-1">
                  <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
                  <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
                  <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
                  <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
                  <img src="/images/star.svg" alt="start" class="lg:w-4 w-2" />
                </div>
              </div>
              <div class="col-span-8 text-sm text-brand-400">
                “Đây là lần đầu tiên mình mua len online và thực sự rất hài
                lòng. Giao hàng nhanh, tư vấn nhiệt tình và sản phẩm chất lượng
                vượt xa mong đợi. Len rất dễ đan và không bị rối!”
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div></div>
    </div>

    <div class="mt-12 container mx-auto">
      <card-slide-component :title="'SẢN PHẨM TƯƠNG TỰ'">
        <div class="grid lg:grid-cols-4 grid-cols-2 gap-3 lg:gap-8 mt-4">
          <item-san-pham-component />
          <item-san-pham-component />
          <item-san-pham-component />
          <item-san-pham-component />
        </div>
      </card-slide-component>
    </div>
  </div>
</template>

<script setup lang="ts">
const listBreadCrumb = ref([
  {
    link: "/",
    name: "Trang chủ",
  },
  {
    link: "/san-pham",
    name: "Sản phẩm",
  },
  {
    link: "/chi-tiet-san-pham",
    name: "Chi tiết sản phẩm",
  },
]);
const activeNames = ref(["1", "2", "3"]);
const currentSlide = ref(0);

const slideTo = (index: number) => {
  currentSlide.value = index;
};

const gallery = ref([
  "https://picsum.photos/800/600?random=1",
  "https://picsum.photos/800/600?random=2",
  "https://picsum.photos/800/600?random=3",
  "https://picsum.photos/800/600?random=4",
  "https://picsum.photos/800/600?random=5",
]);
</script>

<style scoped lang="scss">
:deep(.container-item) {
  .el-collapse-item__header {
    border-top: 1px solid #e8e8e8 !important;
    font-size: 20px !important;
    font-weight: 500;
    border-bottom: none !important;
    @apply text-brand-400;
  }

  .el-collapse-item__wrap {
    border-bottom: none !important;
  }
}

:deep(.el-collapse) {
  border-top: none !important;
}
</style>
