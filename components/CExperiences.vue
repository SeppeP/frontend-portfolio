<template>
  <div class="c-experiences">
    <h2 class="c-experiences-title">My experiences</h2>
    <CExperienceItem v-for="experience in experiences" :experience/>
  </div>
</template>

<script setup lang="ts">
  import experiences from '../content/experiences';
</script>

<style lang="scss">
  .c-experiences {
    max-width: 60rem;
    padding: 2.5rem 0;
    margin: 0 auto;

    &-title {
      font-size: 4rem;
      margin-bottom: 3rem;
    }
  }
</style>