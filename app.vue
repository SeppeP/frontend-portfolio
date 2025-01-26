<template>
  <div>
    <NuxtRouteAnnouncer />
<!--    <CHeader/>-->
    <CIntro/>
    <CSkills/>
    <CExperiences/>
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: 'Seppe Parys'
  })
</script>

<style lang="scss">
  html, body {
    * {
      padding: 0;
      margin: 0;
    }
  }

  body {
    background-color:  #294d77;
    color: #f6f6f6;
    font-family: Roboto, sans-serif;
  }
</style>