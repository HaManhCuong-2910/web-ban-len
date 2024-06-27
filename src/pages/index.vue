<template>
  <home-screen />
</template>

<script setup lang="ts">
import { dataSeoHome, updateSeoMeta } from "../services/constant";

updateSeoMeta(
  dataSeoHome.title,
  dataSeoHome.description,
  dataSeoHome.keywords,
  dataSeoHome.image
);
</script>

<style scoped lang="scss"></style>
