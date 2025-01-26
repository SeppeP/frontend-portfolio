<template>
  <div class="c-intro">
    <div class="c-intro-content">
      <span class="c-intro-greeting">Hi there! I'm</span>
      <h1 class="c-intro-name">Seppe Parys</h1>
      <p class="c-intro-description">I’m a Belgian <span class="c-intro-role">front-end developer</span> who’s passionate about creating useful websites and webapps for everyone to use.</p>
    </div>
    <CIntroVisual/>
  </div>
</template>

<style lang="scss">
  .c-intro {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: "text visual";
    max-width: 60rem;
    margin: 8rem auto;

    &-content {
      grid-area: text;
      border-left: 1px solid white;
      padding: 0 2rem 5.5rem;
    }

    .c-intro-visual {
      grid-area: visual;
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
    }

    &-role {
      color: #ffd27b;
    }
  }

  @media screen and (max-width: 1483px) {
    .c-intro {
      grid-template-columns: 1fr;
      grid-template-areas: "visual"
                            "text";
    }
  }

  @media screen and (max-width: 488px) {
    .c-intro {
      grid-template-columns: 1fr;
      grid-template-areas: "visual"
                            "text";

      &-content {
        border-left: none;
        text-align: center;
        margin: 5rem auto 10rem;
        padding: 0;
        max-width: initial;
      }

      &-name {
        font-size: 3rem;
        margin-bottom: 1rem;
        font-weight: normal;
      }

      &-description {
        max-width: 80%;
        margin: 0 auto;
      }
    }
  }
</style>