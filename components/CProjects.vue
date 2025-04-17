<template>
  <CSection class="c-projects">
      <h2 class="c-projects-title">Featured work</h2>
      <div class="c-projects-list">
        <CProject v-for="project in projects" :project/>
      </div>
  </CSection>
</template>

<script setup lang="ts">
  import projects from '../content/projects';
  import CProject from '~/components/CProject.vue';
</script>

<style lang="scss">
  .c-projects {
    &-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(318px, calc(318px + 3.5rem)));
      gap: 3.5rem 2rem;
    }
  }

  @media screen and (max-width: 1030px) {
    .c-projects {
      &-title {
        text-align: center;
      }

      &-list {
        display: flex;
        flex-wrap: wrap;
        //flex-flow: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>