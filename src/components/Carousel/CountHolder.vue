<template>
  <div class="carousel-count-wrapper">
    <span class="mr-1">{{ num }}</span>
    <span class="mr-1">&#8260;</span>
    <span>{{ total }}</span>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
    },
    current: {
      type: Number,
      required: true,
    },
  },
  computed: {
    num() {
      return this.current + 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-count-wrapper {
  position: absolute;
  background: rgba($primary-color, 0.6);
  right: 0;
  bottom: 0;
  font-size: 1.5rem;
  padding: 6px 23px;
  color: #fff;
}
</style>