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
      id="md"
      v-model="text"
      class="border border-primary rounded-md me-2 px-2"
      type="text"
      name="md" />
    <div v-html="print()" />
  </div>
</template>

<style lang="scss">
  h1 {
    @apply text-4xl;
    @apply leading-normal;
  }
  blockquote {
    @apply bg-zinc-100 border-s-8 border-s-zinc-600 p-2;
  }
</style>
