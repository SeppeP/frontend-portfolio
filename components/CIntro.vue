<template>
  <div class="c-intro">
    <div class="c-intro-content">
      <span class="c-intro-greeting">Hi there! I'm</span>
      <h1 class="c-intro-name">Seppe Parys</h1>
      <p class="c-intro-description">I’m a Belgian <span class="c-intro-role">front-end developer</span> who’s passionate about creating useful websites and webapps for everyone to use.</p>
    </div>
  </div>
</template>

<style lang="scss">
  .c-intro {
    &-content {
      border-left: 1px solid white;
      margin: 4.5rem auto 12.5rem;
      max-width: 80%;
      padding: 0  2rem 5.5rem;
    }

    &-greeting {
      font-size: 0.8rem;
    }

    &-name {
      font-size: 4.5rem;
      margin-bottom: 1rem;
      font-weight: normal;
    }

    &-description {
      line-height: 2rem;
      max-width: 30%;
    }

    &-role {
      color: #ffd27b;
    }
  }
</style>