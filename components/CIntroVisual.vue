<template>
  <div class="c-intro-visual">
    <img src="../public/headshot.png" alt="Seppe Parys" class="c-intro-visual-photo">
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
  .c-intro-visual {
    margin-top: -2rem;
    margin-left: 6rem;
    position: relative;

    &-photo {
      max-height: 15rem;
      aspect-ratio: 1 / 1;
      border: solid 1px #042348;
      box-shadow: 0 0 20px #042348;
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 1483px) {
    .c-intro-visual {
      position: initial;
      margin: 0 auto;

      &-photo {
        position: initial;
        margin-bottom: 2rem ;
      }
    }
  }


  @media screen and (max-width: 488px) {
    .c-intro-visual {
      &-photo {
        max-height: 7.5rem;
      }
    }
  }
</style>