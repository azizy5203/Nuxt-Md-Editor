<script setup>
  const route = useRoute();
</script>

<template>
  <h1>Id:</h1>
  <h1>{{ route.params.id }}</h1>
</template>

<style lang="scss" scoped></style>
