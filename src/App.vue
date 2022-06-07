<template>
  <div class="app-wrapper">
    <div class="container">
      <h1>Simple vue carousel</h1>
      <main>
        <CarouselSettings v-model="settings" />
        <Carousel
          :slides="slides"
          :carousel-effect="settings.slideEffectModel"
          :has-interval="settings.slideHasIntervalModel"
          :interval="settings.slideIntervalModel"
          :hover-pause="settings.slideHoverPauseModel"
        />
      </main>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import CarouselSettings from "@/components/CarouselSettings.vue";

export default {
  components: {
    Carousel,
    CarouselSettings,
  },
  data: () => ({
    settings: {
      slideEffectModel: "slide",
      slideHasIntervalModel: true,
      slideIntervalModel: 3000,
      slideHoverPauseModel: false,
      slideLazyModel: true,
      slideShowCtrlOnHover: true,
    },
    slides: [
      {
        src: "https://picsum.photos/id/237/600/350",
        id: 237,
      },
      {
        src: "https://picsum.photos/id/236/600/350",
        id: 236,
      },
      {
        src: "https://picsum.photos/id/235/600/350",
        id: 235,
      },
      {
        src: "https://picsum.photos/id/234/600/350",
        id: 234,
      },
      {
        src: "https://picsum.photos/id/233/600/350",
        id: 233,
      },
    ],
  }),
};
</script>
<style lang="scss">
// @import "@/scss/main.scss";
main {
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 15px;
  @include for-size(tablet-landscape-up) {
    grid-template-columns: 33.334% 66.667%;
  }
}
</style>
