<template>
  <article ref="appearable" class="c-project appearable" :class="project.deployUrl ? 'c-project-deployable' : ''">
    <div class="container">
      <img :src="project.imageUrl" :alt="project.title" class="image">
      <div class="tags">
        <span v-for="tag in project.tags" class="tag">{{ tag }}</span>
      </div>
      <div v-if="project.deployUrl" class="visit-button">
        <a :href="project.deployUrl" target="_blank">
          <font-awesome-icon icon="arrow-right"/>
        </a>
      </div>
    </div>
    <h3>{{ project.title }}</h3>
  </article>
</template>

<script setup lang="ts">
  import type Project from '~/models/Project';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import appearObserver from '~/utils/appearObserver';

  defineProps<{
    project: Project,
  }>();

  const appearable = ref(null);

  onMounted(() => {
    if (appearObserver && appearable.value) appearObserver.observe(appearable.value);
  });
</script>

<style lang="scss">
  .c-project {
    &-deployable {
      .container {
        border-radius: 24px 0 0 24px;
      }
    }
  }

  .container {
    display: grid;
    position: relative;
    max-width: 20rem;
    height: 16rem;
    border-radius: 24px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    transition: 0.3s;
  }

  .image:hover {
    transform: scale(1.1);
  }

  .tag {
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 30px;
    color: black;
    display: inline-block;
  }

  .tag:not(:last-child) {
    margin-right: 0.5rem;
  }

  .tags {
    position: absolute;
    top: 0;
    right: 0;
    background: $section-color;
    color: white;
    border-bottom-left-radius: 24px;
    padding: 5px 5px 10px 10px;
  }

  .tags:before {
    content: "";
    position: absolute;
    top: 0;
    left: -39px;
    height: 100%;
    width: 40px;
    border-top-right-radius: 24px;
    box-shadow: 0 -25px 0 $section-color;
  }

  .tags:after {
    content: "";
    position: absolute;
    top: 43px;
    right: -1px;
    height: 40px;
    width: 40px;
    border-top-right-radius: 24px;
    box-shadow: 4px -9px 0 $section-color;
  }

  .visit-button {
    position: absolute;
    bottom: 0;
    right: 0;

    height: 40px;
    width: 40px;
    background-color: $section-color;

    padding-left: 10px;
    padding-top: 10px;

    border-top-left-radius: 24px;
  }

  .visit-button::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: -50px;
    height: 100%;
    width: 100%;
    border-bottom-right-radius: 50%;
    box-shadow: 0 25px 0 0 $section-color;
  }

  .visit-button::after {
    content: "";
    position: absolute;
    top: -50px;
    left: 0px;
    height: 100%;
    width: 100%;
    border-bottom-right-radius: 50%;
    box-shadow: 25px 0 0 0 $section-color;
  }

  .visit-button a {
    background: white;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    color: black;
    text-decoration: none;

    border-radius: 50%;
    border: none;
  }
</style>