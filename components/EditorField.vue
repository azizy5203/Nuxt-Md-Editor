<script setup>
  import { ref, computed } from "vue";
  import { marked } from "marked";
  const text = ref("dd");

  const parsed = computed(async () => {
    const result = await marked.parse(text.value);
    return result.charAt(0);
  });
  //   async function print() {
  //     const res = await marked.parse(text.value);
  //     return res;
  //   }
</script>

<template>
  <textarea
    v-model="text"
    class="border border-red-500 rounded-md me-2 px-2"
    type="text"
    name="md"
    id="md" />
  <button
    class="border border-red-500 rounded-md px-2"
    @click="">
    submit
  </button>
  <div v-html="parsed"></div>
</template>

<style lang="scss" scoped></style>
