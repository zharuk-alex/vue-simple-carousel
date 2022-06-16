<template>
  <div class="carousel-thumbs">
    <ul class="carousel-thumbs-wrapper">
      <li
        v-for="(thumb, index) in thumbs"
        :key="thumb.id"
        class="carousel-thumbs-item"
        :class="{ active: current == index }"
        @click="$emit('click-indicator', index)"
      >
        <img
          class="carousel-thumbs-item-img"
          v-lazyload
          :data-src="thumb.thumb"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    thumbs: {
      type: Array,
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
.carousel-thumbs-wrapper {
  position: relative;
  list-style: none;
  padding: 0px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  max-width: 100%;
  justify-items: center;
  align-items: center;
  .carousel-thumbs-item {
    cursor: pointer;
    box-sizing: border-box;
    transition: background-color 0.4s linear;
    margin: 1px;
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 2px;

    &:not(:first-child):not(:last-child) {
      margin-left: 4px;
      margin-right: 4px;
    }
    &.active {
      background-color: $primary-color;
    }
  }
}
.carousel-btn-prev,
.carousel-btn-next {
  margin: 0px !important;
  position: absolute;
}

::-webkit-scrollbar {
  height: 6px;
  width: 8px;
  background: $primary-color;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: $primary-color;
  &:hover {
    background: darken($primary-color, 25%);
  }
}

::-webkit-scrollbar-thumb:horizontal {
  background: $primary-color;
  border-radius: 10px;
  padding-top: 8px;
  &:hover {
    background: darken($primary-color, 10%);
  }
}
</style>
