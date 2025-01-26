<template>
  <div class="c-skills">
    <h2 class="c-skills-title">I have experience in</h2>
    <div class="c-skills-list">
      <img v-for="skill in skills" :src="getUrl(skill)" :alt="skill + ' logo'"
           class="c-skills-logo"/>
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
      height: 6rem;
      margin: 1rem 2rem;

      &:hover {
        scale: 1.1;
      }
    }
  }

  @media screen and (max-width: 488px) {
    .c-skills {
      &-title {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      &-list {
        max-width: 80%;
      }

      &-logo {
        height: 3rem;
        margin: 0.5rem 1rem;
      }
    }
  }
</style>