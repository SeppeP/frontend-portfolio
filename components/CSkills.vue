<template>
  <div class="c-skills">
    <div v-for="skill in skills" class="c-skills-item">
      <span>{{ skill }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  const skills = ['HTML', 'CSS', 'Typescript', 'Vue', 'React', 'Nuxt', 'Blender', 'Three.js'];
</script>

<style lang="scss">
  .c-skills {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(265, 265, 265, 0.4);
    font-size: 1.25rem;

    flex-wrap: wrap;

    &-item {
      display: flex;
      align-items: center;
      height: $section-gap;
      padding: 0 1.5rem;
      transition: .2s;

      &:hover {
        color: #f1f1f1;
        background-color: #707070;
      }
    }
  }

  @media screen and (max-width: 1030px) {
    .c-skills {
      font-size: 1rem;

      &-item {
        padding: 0 1rem;
        height: calc($section-gap / 2);
      }
    }
  }
</style>