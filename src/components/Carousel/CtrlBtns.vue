<template>
  <base-btn @click="$emit('click-prev')" class="carousel-btn carousel-btn-prev">
    <svg
      width="24px"
      height="24px"
      viewBox="-8 -5 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin"
      class="chevron-icon chevron-left-icon"
    >
      <path
        d="M2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05L2.757 7z"
      />
    </svg>
  </base-btn>
  <base-btn @click="$emit('click-next')" class="carousel-btn carousel-btn-next">
    <svg
      width="24px"
      height="24px"
      viewBox="-8 -5 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin"
      class="chevron-icon chevron-right-icon"
    >
      <path
        d="M2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05L2.757 7z"
      />
    </svg>
  </base-btn>
</template>

<script>
export default {
  emits: ["click-prev", "click-next"],
};
</script>

<style lang="scss" scoped>
.carousel-btn {
  position: absolute;
  top: calc(50% - 18px);
  opacity: 0.8;
  &.carousel-btn-prev {
    left: 0px;
  }
  &.carousel-btn-next {
    right: 0px;
  }
  &:active,
  &:hover,
  &:focus {
    outline: none;
  }

  svg.chevron-right-icon {
    transform: rotate(180deg);
  }
  transition: all 0.3s;
  &:hover {
    background-color: darken($primary_color, 5%);
    opacity: 1;
  }
}
</style>