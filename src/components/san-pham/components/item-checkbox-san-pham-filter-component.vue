<template>
  <div class="grid grid-cols-2">
    <div class="flex space-x-2">
      <check-box v-model:checked="isChecked"></check-box>
      <p
        class="text-base text-ink-400 cursor-pointer"
        @click="isChecked = !isChecked"
      >
        Acrylic
      </p>
    </div>
    <div class="text-end">
      <p class="text-base">(1345)</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const isChecked = ref(false);
</script>

<style scoped lang="scss"></style>
