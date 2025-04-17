<template>
  <CSection class="c-experiences">
    <CFlex justify="center">
      <h2 class="c-experiences-title">My work experiences</h2>
    </CFlex>
    <CExperienceItem v-for="experience in experiences" :experience/>
  </CSection>
</template>

<script setup lang="ts">
  import experiences from '../content/experiences';
</script>