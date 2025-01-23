<template>
  <div class="c-experience-item">
    <h3 class="c-experience-item-title">{{ experience.title }}</h3>
    <p class="c-experience-item-timestamp">{{ experience.timestamp }}</p>
    <div class="c-experience-item-line"/>
    <div class="c-experience-item-dot"/>
    <p class="c-experience-item-description">{{ experience.description }}</p>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    experience: Experience
  }>();
</script>

<style lang="scss">
  .c-experience-item {
    margin-bottom: 2rem;

    display: grid;
    grid-template-columns: 11ch auto 1fr;
    grid-template-areas: "timestamp dot title"
                         ". line description";

    &-title {
      grid-area: title;
    }

    &-timestamp {
      grid-area: timestamp;
      text-align: right;
      margin-top: .1rem;
    }

    &-dot {
      grid-area: dot;

      background-color: #f6f6f6;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin: 0.2rem 1rem 1rem;
      box-shadow: 0 0 10px #f6f6f6;
    }

    &-line {
      grid-area: line;
      background-color: #f6f6f6;
      width: 2px;
      height: 100%;
      margin: 0 auto;
    }

    &-description {
      grid-area: description;
      padding-left: 0.5rem;
    }
  }
</style>