<template>
  <div class="c-contact">
    <a href="https://github.com/SeppeP" class="c-contact-link">
      <font-awesome-icon icon="fa-brands fa-github"/>
    </a>
    <a href="mailto:seppe.parys@gmail.com"  class="c-contact-link">
      <font-awesome-icon icon="fa-solid fa-envelope"/>
    </a>
    <a v-if="false" href="https://www.youtube.com/@perynal" class="c-contact-link">
      <font-awesome-icon icon="fa-brands fa-youtube"/>
    </a>
    <a href="/SeppeParysCV.pdf" target="_blank" class="c-contact-link">
      Open CV
    </a>
  </div>
</template>

<script setup="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

  library.add(faGithub, faYoutube);
</script>

<style lang="scss">
  .c-contact {
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    a {
      text-decoration: none;
      color: #f6f6f6;
    }

    &-link {
      transition: color 0.3s;

      &:hover {
        color: $orange-highlight;
      }
    }
  }
</style>