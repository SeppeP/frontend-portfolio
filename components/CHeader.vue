<template>
  <header class="c-header">
    <div class="c-header-content">
      <p class="c-header-name">Seppe Parys</p>

      <nav>
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Contact me</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
  .c-header {
    background-color: white;
    filter: drop-shadow(0 8px 8px rgba(0,0,0,.25));
    color: #0c0c0c;
    padding: 2rem 0;

    &-content {
      padding: 1rem 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-name {
      font-size: 3rem;
      color: #0c0c0c;
      font-weight: 600;
    }
  }
</style>