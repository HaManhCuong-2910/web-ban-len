<template>
  <el-button
    @click="handleClick"
    :class="[
      'button-common text-style',
      props.type && `button-common-${props.type}`,
      props.class,
    ]"
    type="success"
    :native-type="props.nativeType"
    :plain="plain"
    :disabled="isdisabled"
  >
    <img :src="props.icon" class="mr-2" v-if="props.icon" />
    <p :class="['text-style', props.classText]" v-if="props.text">
      {{ props.text }}
    </p>
    <slot></slot>
  </el-button>
</template>

<script setup lang="ts">
import { ENativeTypeButton, ETypeButton } from "~/src/services/constant";

const props = defineProps({
  type: {
    type: String,
    default: ETypeButton.primary,
  },
  nativeType: {
    type: String as PropType<ENativeTypeButton>,
    default: ENativeTypeButton.button,
  },
  class: String,
  classText: String,
  text: String,
  icon: String,
  plain: Boolean,
  preventDebounce: Boolean,
  isdisabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);
let timerId: any;
const debounce = (callback: Function, wait: number) => {
  const action = (...args: any) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
  return action();
};

const handleClick = () => {
  if (props.preventDebounce) {
    return emit("click");
  }
  debounce(() => {
    emit("click");
  }, 200);
  return;
};
</script>

<style scoped lang="scss">
.button-common {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  height: auto;
  color: #fff;
  border: unset;
}
.el-button.is-disabled,
.el-button.is-disabled:hover,
.el-button.is-disabled:focus {
  background-color: var(--el-disabled-text-color);
}

.el-button + .el-button {
  margin-left: 16px;
}
</style>
