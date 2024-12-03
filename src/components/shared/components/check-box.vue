<template>
  <div :class="[props.class, 'checkbox-common']">
    <el-checkbox
      v-if="!props.isLoading"
      :model-value="props.checked"
      :disabled="disabled"
      @change="handleChange"
    />
    <loading-component v-else :size="24" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  checked: Boolean,
  disabled: Boolean,
  class: String,
  labelClass: String,
  tooltip: String,
  label: String,
  isLoading: Boolean,
});
const emit = defineEmits(["update:checked", "onChecked"]);
const handleChange = () => {
  if (props.disabled) return;
  emit("update:checked", !props.checked);
  emit("onChecked", !props.checked);
};
</script>

<style scoped lang="scss">
.checkbox-common {
  height: 24px;
  :deep(.el-checkbox) {
    height: 24px;
  }

  :deep(.el-checkbox__input) {
    &.is-checked {
      .el-checkbox__inner {
        border: none;
      }
    }

    &.is-disabled {
      .el-checkbox__inner {
        @apply bg-black-200 border-black-300;
      }
    }
  }

  :deep(.el-checkbox__inner) {
    width: 24px;
    height: 24px;
    border-radius: 8px;
    border: 2px solid #bababa;

    &::after {
      border-width: 2.8px !important;
      height: 13px;
      left: 8px;
      top: 3px;
      width: 5px;
    }
  }
}
</style>
