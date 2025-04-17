<template>
  <div class="c-render">
    <div class="c-render-container">
      <img :src :alt class="c-render-image">
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  defineProps<{
    src: string,
    alt: string,
  }>();
</script>

<style lang="scss">
  .c-render {
    position: relative;
    margin-bottom: 2rem;

    &::before {
      content: '';
      position: absolute;
      border: solid 1px rgba(265, 265, 265, 0.2);
      border-radius: 24px;
      height: 100%;
      width: 100%;
      left: 10px;
      top: 10px;
      z-index: -1;
    }

    &-container {
      border-radius: 24px;
      position: relative;
      overflow: hidden;
    }

    &-image {
      display: block;
      transition: 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
</style>