<script setup></script>

<template>
  <div class="admin-layout">
    <div class="admin-layout__side-bar"></div>
    <div class="admin-layout__app-bar"></div>
    <div class="admin-layout__main-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
  .admin-layout {
    height: 100vh;
    display: grid;
    grid-template-columns: 15% 85%;
    grid-template-rows: 10% 90%;
    grid-template-areas:
      "side-bar app-bar"
      "side-bar main-content";

    &__side-bar {
      grid-area: side-bar;
      background-color: dodgerblue;
    }
    &__app-bar {
      grid-area: app-bar;
      background-color: #58a1eb;
    }
    &__main-content {
      grid-area: main-content;
      background-color: #9ac6f3;
      padding: 2rem;
    }
  }
</style>
