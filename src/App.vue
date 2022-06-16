<template>
  <div class="app-wrapper">
    <div class="container">
      <h1>Simple vue carousel</h1>
      <main>
        <CarouselSettings v-model="settings" />

        <Carousel
          v-if="slides.length"
          :slides="slides"
          :has-ctrl="settings.hasCtrlModel"
          :sizing="settings.sizeModel"
          :carousel-effect="settings.effectModel"
          :has-timeout="settings.hasAutoplayModel"
          :timeout-time="settings.timeoutTimeModel"
          :timeout-step="settings.timeoutStep"
          :hover-pause="settings.hoverPauseModel"
          :has-thumbs="settings.isThumbsModel"
          :has-indicators="settings.hasIndicatorsModel"
          :has-count="settings.hasCountModel"
          @slides-update="slides = $event"
          :key="slides.length"
        />
      </main>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel/index.vue";
import CarouselSettings from "@/components/Settings.vue";
import { createImagesData } from "@/imagesData.js";

export default {
  components: {
    Carousel,
    CarouselSettings,
  },
  data: () => ({
    settings: {
      effectModel: "slide1",
      hasCtrlModel: true,
      hasAutoplayModel: true,
      timeoutTimeModel: 4000,
      timeoutStep: 500,
      hoverPauseModel: false,
      sizeModel: "cover",
      isThumbsModel: true,
      hasIndicatorsModel: true,
      hasCountModel: true,
    },
    slides: [],
  }),
  created() {
    createImagesData(150, 160, 600, 350).then((images) =>
      images.map((image) => this.slides.push(image))
    );
  },
};
</script>
<style lang="scss" scoped>
/* main */
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
