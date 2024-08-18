<script setup></script>

<template>
  <div class="default-layout">
    <div class="default-layout__side-bar"></div>
    <div class="default-layout__app-bar"></div>
    <div class="default-layout__main-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
  .default-layout {
    height: 100vh;
    display: grid;
    grid-template-columns: 15% 85%;
    grid-template-rows: 10% 90%;
    grid-template-areas:
      "side-bar app-bar"
      "side-bar main-content";

    &__side-bar {
      grid-area: side-bar;
      @apply bg-slate-700;
    }
    &__app-bar {
      grid-area: app-bar;
      @apply bg-slate-500;
    }
    &__main-content {
      grid-area: main-content;
      padding: 2rem;

      @apply bg-slate-300;
    }
  }
</style>
