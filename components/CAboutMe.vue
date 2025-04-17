<template>
  <CSection class="c-about-me">
    <div ref="appearable" class="appearable">
      <h2 class="c-about-me-title">About me</h2>
      <p style="max-width: 50rem; margin-bottom: 1rem">
        Hey! I’m a <span class="orange-highlight">{{ age }}-year-old</span> frontend developer from
        <span class="orange-highlight">Belgium</span>, When I’m not coding, I’m at the <span class="orange-highlight">gym</span>,
        <span class="orange-highlight">3D printing</span>, or watching some
        <span class="orange-highlight">animations</span>.
      </p>
      <strong>Here are some of my favorite renders I made.</strong>
    </div>

    <swiper :modules
            slides-per-view="auto"
            :space-between="50"
            :autoplay="{ delay: 3000, disableOnInteraction: true }"
            loop
    >
      <swiper-slide>
        <CRender src="/renders/airMine.png" alt="airMine"/>
      </swiper-slide>

      <swiper-slide>
        <CRender src="/renders/ufo.png" alt="ufo"/>
      </swiper-slide>

      <swiper-slide>
        <CRender src="/renders/stinkfly.png" alt="stinkfly"/>
      </swiper-slide>

      <swiper-slide>
        <CRender src="/renders/grime.png" alt="grime"/>
      </swiper-slide>

      <swiper-slide>
        <CRender src="/renders/pepeVogel.png" alt="bird made out of a stone and scrap"/>
      </swiper-slide>
    </swiper>
  </CSection>
</template>

<script setup lang="ts">
  import { Autoplay } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import CRender from '~/components/CRender.vue';
  import appearObserver from '~/utils/appearObserver';

  const modules = [Autoplay];

  const appearable = ref(null);

  onMounted(() => {
    if (appearObserver && appearable.value) appearObserver.observe(appearable.value);
  });


  function getExactAge(birthday: string): number {
    const today = new Date();
    const birth = new Date(birthday);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  }

  const age = getExactAge("2000-07-06");

</script>

<style lang="scss">
  .c-about-me {
    margin-bottom: 0;

    .swiper {
      margin-top: 3rem;
    }

    .swiper-slide {
      width: auto;
    }
  }
</style>