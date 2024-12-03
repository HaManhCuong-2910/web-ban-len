<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item class="container-item" title="Màu sắc" name="1">
        <ul class="flex flex-col space-y-2 mt-2">
          <li>
            <item-color-san-pham-filter-component />
          </li>
          <li>
            <item-color-san-pham-filter-component />
          </li>
          <li>
            <item-color-san-pham-filter-component />
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item class="container-item" title="Loại sợi len" name="2">
        <ul class="flex flex-col space-y-2 mt-2">
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item
        class="container-item"
        title="Trọng lượng sợi len"
        name="3"
      >
        <ul class="flex flex-col space-y-2 mt-2">
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item class="container-item" title="Thương hiệu len" name="4">
        <ul class="flex flex-col space-y-2 mt-2">
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item class="container-item" title="Giá" name="5">
        <ul class="flex flex-col space-y-2 mt-2">
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
          <li>
            <item-checkbox-san-pham-filter-component />
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
const activeNames = ref(["1", "2", "3", "4", "5"]);
</script>

<style scoped lang="scss">
:deep(.container-item) {
  .el-collapse-item__header {
    background-color: #e8e8e8 !important;
    padding-left: 10px;
    border-radius: 6px;
    border-top: none;
    font-size: 20px !important;
    font-weight: 500;
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
