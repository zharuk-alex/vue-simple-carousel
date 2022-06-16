<template>
  <ol class="carousel-indicators">
    <li
      v-for="(indicator, index) in Array(total)"
      :key="index"
      :class="[current == index ? 'active' : '']"
      @click="$emit('click-indicator', index)"
    ></li>
  </ol>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$background: #fff;
ol.carousel-indicators {
  z-index: 1;
  position: absolute;
  bottom: 20px;
  right: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  margin-right: 15%;
  margin-left: 15%;
  padding: 0 10px;
  li {
    border-radius: 50%;
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.6);
    margin: 0 10px 8px;
    border: 1px #ffffff solid;
    transition: background 0.3s linear;
    &:hover {
      cursor: pointer;
    }
    &.active {
      opacity: 1;
      background: rgba(255, 255, 255, 1);
    }
  }
}
</style>

