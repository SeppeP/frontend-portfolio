<template>
  <div>
    <NuxtRouteAnnouncer />
    <CHeader/>
    <main>
      <CIntro/>
      <CSkills/>
      <CProjects/>
      <CExperiences/>
      <CAboutMe/>
    </main>
    <CFooter/>
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: 'Seppe Parys'
  })
</script>

<style>
  body {
      //position: absolute;
  }
</style>