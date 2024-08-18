<script setup lang="ts">
  const route = useRoute();
  useHead({
    title: "nuxt app",
  });
</script>

<template>
  <EditorField />

  <NuxtLink
    to="/posts"
    class="underline text-2xl"
    >Posts</NuxtLink
  >
</template>
