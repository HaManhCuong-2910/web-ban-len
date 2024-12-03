<template>
  <div class="pb-16">
    <div class="container mx-auto mt-4 lg:mt-0">
      <bread-crumb :list-breadcrumb="listBreadCrumb" />
    </div>
    <div class="lg:container lg:mx-auto lg:pb-14 pb-6 mt-4 lg:mt-0">
      <slider-san-pham-component />
    </div>
    <div class="lg:hidden block">
      <filter-san-pham-mobile-component />
    </div>
    <div class="lg:grid lg:grid-cols-3 lg:gap-8 container mx-auto mt-4 lg:mt-0">
      <div class="lg:block hidden">
        <collapse-filter-san-pham-component />
      </div>
      <div class="lg:col-span-2">
        <list-san-pham-component />
      </div>
      <div></div>
      <div
        class="lg:col-span-2 flex flex-col lg:flex-row lg:justify-between mt-4"
      >
        <el-pagination background layout="prev, pager, next" :total="50" />
        <div class="flex space-x-3 items-center mt-4 lg:mt-0">
          <span class="text-sm text-brand-400">Trang thứ</span>
          <div
            class="w-[56px] h-[40px] flex justify-center items-center bg-black-200 rounded-md"
          >
            <el-dropdown :trigger="'click'">
              <div
                class="el-dropdown-link flex items-center text-brand-400 text-sm"
              >
                13
                <img
                  src="/images/arrow-down.svg"
                  alt="icon"
                  class="w-[10px] h-[5.5px] ml-2"
                />
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>11</el-dropdown-item>
                  <el-dropdown-item>12</el-dropdown-item>
                  <el-dropdown-item>13</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <span class="text-sm text-brand-400">của 161 sản phẩm</span>
        </div>
      </div>
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
]);
</script>

<style scoped lang="scss">
:deep(.el-pagination) {
  --el-pagination-button-width: 40px;
  --el-pagination-button-height: 40px;
  --el-pagination-button-bg-color: none;

  button {
    border: 1px solid #e8e8e8;
    border-radius: 6px;
  }

  .el-pager {
    li {
      border: 1px solid #e8e8e8;
      border-radius: 6px;
    }
  }
}
</style>
