<template>
  <a :href="project.deployUrl" target="_blank" class="c-project">
    <img :src="project.imageUrl" :alt="project.title" class="c-project-thumbnail">
    <p class="c-project-title">{{ project.title }}</p>
  </a>
</template>

<script setup lang="ts">
  import type Project from '~/models/Project';

  defineProps<{
    project: Project,
  }>();
</script>

<style lang="scss">
  .c-project {
    max-width: 25rem;
    border: solid 3px #294d77;
    border-radius: .5rem;
    background-color: #ffca6c;

    text-decoration: none;
    color: #294d77;
    font-weight: 700;

    &-thumbnail {
      width: 100%;
    }
    &-title {
      font-size: 1rem;
      padding: 1rem;
    }
  }
</style>