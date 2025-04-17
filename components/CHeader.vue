<template>
  <header class="c-header">
    <div class="c-header-content">
      <p class="c-header-name">SeppeParys</p>
      <CContact/>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
  .c-header {
    border: solid 1px $orange-highlight;
    border-radius: 1rem;
    max-width: 90%;
    margin: 2rem auto;
    padding: 1rem 1.5rem;

    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-name {
      font-size: 2rem;
      font-weight: bold;

      &::before {
        content: '<';
        color: $green-highlight;
      }

      &::after {
        content: '/>';
        color: $green-highlight;
      }
    }
  }

  @media screen and (max-width: 1030px) {
    .c-header {
      max-width: 75%;

      &-name {
        font-size: 1.5rem;
      }
    }

  }
</style>