<template>
  <div class="c-skills">
    <h2 class="c-skills-title">I have experience in</h2>
    <div class="c-skills-list">
      <div v-for="skill in skills" class="c-skills-logo-wrapper">
        <img :src="getUrl(skill)" :alt="skill + ' logo'"
             class="c-skills-logo"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const skills = ['html', 'css', 'typescript', 'vue', 'react', 'nuxt', 'blender', 'threejs'];

  function getUrl(skill: string): string {
    return `skills/${skill}.png`;
  }
</script>

<style lang="scss">
  .c-skills {
    background-color: #f6f6f6;
    color: #294d77;
    text-align: center;
    padding: 2.5rem 0;

    &-title {
      font-size: 4rem;
      margin-bottom: 3rem;
    }

    &-list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 60rem;
      margin: 0 auto;
    }

    &-logo {
      transition: .3s;
      height: 7.5rem;

      &-wrapper {
        padding: 2rem 3rem;
        height: 8rem;
        width: 8rem;
      }

      &:hover {
        height: 8rem;
      }
    }
  }
</style>