<template>
  <div class="c-projects">
    <h2 class="c-projects-title">Featured work</h2>
    <div class="c-projects-list">
      <CProject v-for="project in projects" :project/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import projects from '../content/projects';
  import CProject from '~/components/CProject.vue';
</script>

<style lang="scss">
  .c-projects {
    background-color: #f6f6f6;
    color: #294d77;
    padding: 2.5rem 0;

    &-title {
      font-size: 4rem;
      margin-bottom: 3rem;
      text-align: center;
    }

    &-list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 60rem;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 690px) {
    .c-projects {
      &-title {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      &-list {
        max-width: 80%;
      }
    }
  }
</style>