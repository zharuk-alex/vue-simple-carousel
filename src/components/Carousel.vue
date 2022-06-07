<template>
  <div class="carousel">
    <carousel-item
      v-for="(slide, index) in slides"
      :key="slide.id"
      :index="index"
      :visibleSlide="visibleSlide"
      :direction="direction"
      :carousel-effect="carouselEffect"
      @mouseover="isHovering = true"
      @mouseout="isHovering = false"
    >
      <img
        :src="slide.src"
        :alt="slide.title"
        :loading="slideLazy && index > 0 ? 'lazy' : 'auto'"
      />
    </carousel-item>

    <base-btn @click="prevSlide" class="carousel-btn carousel-btn-prev">
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
    <base-btn @click="nextSlide" class="carousel-btn carousel-btn-next">
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

    <ol class="carousel-indicators">
      <li
        v-for="(slide, index) in slides"
        :key="slide.id"
        :class="[visibleSlide == index ? 'active' : '']"
        @click="indicatorClickHandler(index)"
      ></li>
    </ol>
  </div>
</template>

<script>
import CarouselItem from "@/components/CarouselItem.vue";

export default {
  props: {
    slides: {
      type: Array,
      required: true,
    },
    carouselEffect: {
      type: String,
      default: "slide",
    },
    hasInterval: {
      type: Boolean,
    },
    interval: {
      type: Number,
    },
    hoverPause: {
      type: Boolean,
    },
    slideLazy: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    CarouselItem,
  },
  data: () => ({
    direction: "",
    visibleSlide: 0,
    interval_id: null,
    interval_time: null,
    isHovering: false,
  }),
  computed: {
    slidesLen() {
      return this.slides?.length;
    },
    slidesNormalize() {
      return this.slides.map((slide, index) => {
        if (!slide.hasOwnProperty("id")) {
          slide.id = `slide_${index + 1}`;
        }
        return slide;
      });
    },
  },
  created() {
    this.setSlideInterval();
  },
  methods: {
    setSlideInterval() {
      if (this.interval > 0) {
        this.destroySlideInterval();
        if (this.interval_time === null || this.interval_time === undefined) {
          this.interval_time = this.interval;
        }
        this.interval_id = setInterval(() => {
          this.interval_time -= 1000;
          if (this.interval_time == 0) {
            this.nextSlide();
            this.interval_time = this.interval;
          }
        }, 1000);
      }
    },
    destroySlideInterval() {
      clearInterval(this.interval_id);
      this.interval_id = null;
    },
    nextSlide() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
      this.direction = "left";
    },
    prevSlide() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
      this.direction = "right";
    },
    indicatorClickHandler(index) {
      if (index < this.visibleSlide) {
        this.direction = "right";
      } else {
        this.direction = "left";
      }
      this.$nextTick(() => (this.visibleSlide = index));
    },
  },
  watch: {
    hasInterval(newval) {
      if (!newval) {
        this.destroySlideInterval();
      } else {
        this.setSlideInterval();
      }
    },
    isHovering(newval) {
      if (newval && this.hasInterval && this.hoverPause) {
        this.destroySlideInterval();
      } else if (this.hoverPause && this.hasInterval) {
        this.setSlideInterval();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: auto;
  height: 350px;
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
      svg.chevron-icon path {
        fill: #ffffff !important;
      }
    }
  }

  ol.carousel-indicators {
    z-index: 1;
    position: absolute;
    bottom: 20px;
    right: 0;
    left: 0;
    display: flex;
    list-style: none;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;

    li {
      width: 50px;
      height: 4px;
      background: #fff;
      margin: 0 10px;
      opacity: 0.6;
      &:hover {
        cursor: pointer;
      }
      &.active {
        opacity: 1;
      }
    }
  }
}
</style>


