<script setup>
  import { marked } from "marked";
  const text = ref("# Title");

  function print() {
    const res = marked.parse(text.value);
    return res;
  }
</script>

<template>
  <div class="flex gap-4 flex-col">
    <textarea
      v-model="text"
      class="border border-primary rounded-md me-2 px-2"
      type="text"
      name="md"
      id="md" />
    <div v-html="print()"></div>
  </div>
</template>

<style lang="scss">
  h1 {
    @apply text-4xl;
    @apply leading-normal;
  }
  blockquote {
    @apply bg-red-100 border-s-8 border-s-red-300 p-2;
  }
</style>
