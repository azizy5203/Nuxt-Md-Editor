<script setup>
  definePageMeta({
    layout: "admin",
  });
</script>

<template>
  <div>
    <h1 class="text-4xl">Posts Admin Layout</h1>
    <button class="text-2xl underline text-black mt-7">
      <NuxtLink to="/">Home</NuxtLink>
    </button>
    <div>{{ formatNumber(4190.408) }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
