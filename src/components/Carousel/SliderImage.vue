<template>
  <div class="slide-image" :style="sliderImgStyle"></div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    sizing: {
      type: String,
      default: "cover",
    },
  },
  computed: {
    sliderImgStyle() {
      return {
        backgroundImage: `url(${this.src})`,
        backgroundSize: this.sizing == "cover" ? "cover" : "contain",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
}
</style>