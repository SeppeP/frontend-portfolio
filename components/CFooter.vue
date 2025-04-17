<template>
  <footer class="c-footer">
    <CContact class="c-footer-contact"/>
    <CFlex justify="center">
      <p>&copy Copyright {{ currentYear }} - Seppe Parys</p>
    </CFlex>
  </footer>
</template>

<script setup lang="ts">
  import CContact from '~/components/CContact.vue';

  const currentYear = new Date().getFullYear();

</script>

<style lang="scss">
  .c-footer {
    margin: 2.25rem 0;

    &-contact {
      margin-bottom: 1rem;
    }
  }
</style>