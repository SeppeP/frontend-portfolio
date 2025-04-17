<template>
  <section class="c-section">
    <div v-if="!customContentWrapper" class="c-section-content">
      <slot/>
    </div>
    <slot v-else/>
  </section>
</template>

<script setup lang="ts">

  defineProps<{
    customContentWrapper?: boolean;
  }>();

</script>

<style lang="scss">
  .c-section {
    background-color: $section-color;
    margin-bottom: $section-gap;
    padding: 82px 0 53px;

    &-content {
      max-width: 70%;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 1030px) {
    .c-section {
      &-content {
        max-width: 90%;
      }
    }
  }
</style>