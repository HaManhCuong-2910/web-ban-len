<template>
  <div class="flex items-center">
    <div class="container-breadcrumb lg:pt-[8px] lg:pb-[8px]">
      <el-breadcrumb
        v-if="listBreadcrumb && listBreadcrumb.length > 0"
        :separator-icon="ArrowRight"
      >
        <el-breadcrumb-item
          v-for="item in props.listBreadcrumb"
          :key="item.link"
          :to="item.link && { path: item.link }"
        >
          <p class="text-sm">{{ item.name }}</p>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";

const props = defineProps({
  listBreadcrumb: Array as PropType<any[]>,
});
</script>

<style scoped lang="scss">
.container-breadcrumb {
  .el-breadcrumb__item {
    &:last-child {
      p {
        font-weight: 500;
        max-width: 284px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        @apply text-primary;
      }
    }
  }
}
</style>
