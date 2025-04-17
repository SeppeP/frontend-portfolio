<template>
  <CSection customContentWrapper class="c-hero">
    <CFlex class="c-hero-content" align="start">
      <div class="c-hero-image-container">
        <img src="/hero.png" alt="Seppe Parys" class="c-hero-image">
        <img src="/shapes/cube.png" alt="Cube" class="c-hero-shape c-hero-cube">
        <img src="/shapes/cone.png" alt="Cone" class="c-hero-shape c-hero-cone">
        <img src="/shapes/sphere.png" alt="Sphere" class="c-hero-shape c-hero-sphere">
      </div>

      <div ref="appearable" class="c-hero-text appearable">
        <span class="c-hero-location">
          Based in Belgium
        </span>

        <span class="codeStyle">Hi, I'm Seppe
          <span class="c-hero-wave">👋</span>
        </span>
        <h1 class="c-hero-name">
          I’m a <span class="orange-highlight">Front-end</span> <br/> Web & App Developer & 3D artist
        </h1>
        <p class="codeStyle">
          Specializing in
          <span class="green-highlight">Vue</span>
          ,
          <span class="green-highlight">React</span>
          , and 3D development with
          <span class="green-highlight">Blender</span>
          and
          <span class="green-highlight">Three.js</span>.
        </p>

        <CFlex>
          <img v-for="skill in skills" :src="getUrl(skill)" :alt="skill + ' logo'"
               class="c-hero-skill-logo"/>
          <span>... and more</span>
        </CFlex>
      </div>
    </CFlex>
  </CSection>
</template>

<script setup lang="ts">
  import appearObserver from '~/utils/appearObserver';
  import { onMounted } from 'vue';

  const skills = ['vue', 'react', 'blender', 'threejs'];

  function getUrl(skill: string): string {
    return `skills/${skill}.png`;
  }


  const appearable = ref(null);

  onMounted(() => {
    if (appearObserver && appearable.value) appearObserver.observe(appearable.value);
  });

</script>

<style lang="scss">
  .c-hero {
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 6rem;

    &-content {
      max-width: 65%;
      gap: 10%;
      margin: 0 auto;

      p {
        margin-bottom: 1.25rem;
        line-height: 2rem;
      }
    }

    &-wave {
      transition: transform .3s ease-in-out;
      display: inline-block;

      &:hover {
        transform: rotate(25deg);
      }
    }

    &-image-container {
      position: relative;
      display: flex;
      justify-content: center;
    }

    &-shape {
      position: absolute;
      width: 10rem;
    }

    &-cube {
      bottom: 40%;
      left: 15%;
      width: 7rem;

      animation: cubeAnimation 8s ease-in-out infinite;

      @keyframes cubeAnimation {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-50px);
        }
        100% {
          transform: translateY(0);
        }
      }
    }

    &-cone {
      bottom: 50%;
      right: 10%;
      width: 7rem;
      animation: coneAnimation 8s ease-in-out infinite;

      @keyframes coneAnimation {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-70px);
        }
        100% {
          transform: translateY(0);
        }
      }
    }

    &-sphere {
      top: 0;
      left: 15%;
      width: 4rem;

      animation: sphereAnimation 8s ease-in-out infinite;

      @keyframes sphereAnimation {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
        100% {
          transform: translateY(0);
        }
      }
    }

    &-text {
      //max-width: 30rem;
      font-size: 1.25rem;
      margin-top: 3rem;
    }

    &-name {
      //font-size: 2rem;
      margin: .75rem 0;
    }

    &-skill-logo {
      height: 1.5rem;
    }

    &-location {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 0.75rem;
    }
  }


  @media screen and (max-width: 1030px) {
    .c-hero {
      &-text {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 1030px) {
    .c-hero {
      padding-top: 0;

      &-content {
        max-width: 80%;
        gap: 4rem;
      }

      &-content {
        flex-flow: column-reverse;
      }

      &-image-container, &-text {
        margin: 0 auto;
      }

      &-image {
        max-width: 80%;
      }

      &-cube, &-cone, &-sphere {
        max-width: 4rem;
        //display: none;
      }

      &-cube {
        left: 25%;
      }

      &-cone {
        right: 20%;
        bottom: 55%
      }
    }
  }
</style>
