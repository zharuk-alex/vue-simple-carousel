<template>
  <transition-group tag="div" :name="transitionName" class="slides-group">
    <div v-if="modelValue" :key="current" class="slide-item">
      <slot></slot>
    </div>
  </transition-group>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    direction: {
      type: String,
      default: "left",
    },
    current: {
      type: Number,
      required: true,
    },
    carouselEffect: {
      type: String,
      default: "slide1",
    },
  },
  computed: {
    transitionDelay() {
      return this.carouselEffect == "slide2" ? "0.4s" : "0s";
    },
    transitionName() {
      if (
        (this.carouselEffect == "slide1" || this.carouselEffect == "slide2") &&
        this.direction == "next"
      ) {
        return "left";
      } else if (
        (this.carouselEffect == "slide1" || this.carouselEffect == "slide2") &&
        this.direction == "prev"
      ) {
        return "right";
      } else if (this.carouselEffect == "fade") {
        return "fade";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slides-group {
  position: relative;
  overflow: hidden;
  height: 100%;
  .slide-item {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.left-enter-active {
  animation: leftInAnimation 0.4s ease-in-out;
}
.left-leave-active {
  animation: leftOutAnimation 0.4s ease-in-out v-bind("transitionDelay");
}

.right-enter-active {
  animation: rightInAnimation 0.4s ease-in-out;
}
.right-leave-active {
  animation: rightOutAnimation 0.4s ease-in-out v-bind("transitionDelay");
}
</style>