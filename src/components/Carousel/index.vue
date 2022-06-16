<template>
  <div
    class="carousel"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <div class="carousel-inner-wrapper" :style="[carouselHeight]">
      <div v-if="debagInfo" class="debag-wrapper">
        <pre>{{ debagInfo }}</pre>
      </div>

      <Lightbox v-model="isFullscreen" :hover="isHovering">
        <img
          v-if="isFullscreen"
          :src="slides[visibleSlide].original"
          :alt="slides[visibleSlide].title"
          class="w-100"
        />
      </Lightbox>

      <Slider
        v-model="show"
        :current="visibleSlide"
        :direction="slideDirection"
        :carouselEffect="carouselEffect"
        :key="carouselEffect"
      >
        <img
          v-lazyload
          :data-src="slides[visibleSlide].src"
          :alt="slides[visibleSlide].alt"
          :style="sliderImgSize"
        />
      </Slider>

      <buttons-control
        v-if="hasCtrl"
        @click-next="nextSlide()"
        @click-prev="prevSlide()"
      ></buttons-control>

      <Indicators
        v-if="hasIndicators"
        :key="hasIndicators"
        :total="slidesLen"
        :current="visibleSlide"
        @click-indicator="indicatorClickHandler"
      />

      <CarouselCountHolder
        v-if="hasCount"
        :total="slidesLen"
        :current="visibleSlide"
      />
    </div>

    <Thumbs
      v-if="hasThumbs"
      :thumbs="thumbsItems"
      :current="visibleSlide"
      @click-indicator="indicatorClickHandler"
    ></Thumbs>
  </div>
</template>

<script>
import ButtonsControl from "@/components/Carousel/CtrlBtns.vue";
import Indicators from "@/components/Carousel/Indicators.vue";
import Thumbs from "@/components/Carousel/Thumbs.vue";
import Lightbox from "@/components/Carousel/Lightbox.vue";
import Slider from "@/components/Carousel/Slider.vue";
import CarouselCountHolder from "@/components/Carousel/CountHolder.vue";

export default {
  components: {
    Thumbs,
    ButtonsControl,
    Indicators,
    Lightbox,
    Slider,
    CarouselCountHolder,
  },

  props: {
    slides: {
      type: Array,
      required: true,
    },
    height: {
      type: Number,
      default: 350,
    },
    carouselEffect: {
      type: String,
      default: "slide1",
    },
    hasCtrl: {
      type: Boolean,
    },
    sizing: {
      type: String,
      default: "cover",
    },
    hasIndicators: {
      type: Boolean,
    },
    hasTimeout: {
      type: Boolean,
    },
    timeoutTime: {
      type: Number,
    },
    timeoutStep: {
      type: Number,
    },
    hoverPause: {
      type: Boolean,
    },
    hasThumbs: {
      type: Boolean,
    },
    hasCount: {
      type: Boolean,
    },
  },

  data: () => ({
    show: false,
    slideDirection: "next",
    visibleSlide: 0,
    interval_id: null,
    interval_time: null,
    isHovering: false,
    isFullscreen: false,
  }),
  computed: {
    sliderImgSize() {
      if (this.sizing == "cover") {
        return {
          width: "100%",
          height: "auto",
        };
      } else if (this.sizing == "contain") {
        return {
          width: "auto",
          height: "100%",
        };
      }
    },

    carouselHeight() {
      if (this.hasThumbs) {
        return { height: `calc(${this.height}px - 80px)` };
      } else if (!this.hasThumbs) {
        return { height: `${this.height}px` };
      }
    },
    thumbsItems() {
      return this.slides.map((slide) =>
        slide.hasOwnProperty("thumb") ? slide : { ...slide, thumb: slide.src }
      );
    },
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
    debagInfo() {
      let show = false;
      return show
        ? {
            interval_time: this.interval_time,
            interval_id: this.interval_id,
            hasTimeout: this.hasTimeout,
            hoverPause: this.hoverPause,
          }
        : false;
    },
  },
  created() {
    this.show = true;
    this.setSlideInterval();
  },
  methods: {
    setSlideInterval() {
      if (!this.hasTimeout) {
        return;
      } else if (this.interval_id) {
        this.destroySlideInterval();
      }

      if (this.interval_time === null || this.interval_time === undefined) {
        this.interval_time = this.timeoutTime;
      }
      this.interval_id = setInterval(() => {
        this.interval_time -= this.timeoutStep;
        if (this.interval_time == 0) {
          this.nextSlide();
          this.interval_time = this.timeoutTime;
        }
      }, this.timeoutStep);
    },
    destroySlideInterval() {
      clearInterval(this.interval_id);
      this.interval_id = null;
    },
    toggleSlideInterval() {
      if (
        (this.isHovering && this.hasTimeout && this.hoverPause) ||
        this.isFullscreen ||
        !this.hasTimeout
      ) {
        return this.destroySlideInterval();
      } else if (
        (this.hoverPause && this.hasTimeout) ||
        (!this.isFullscreen && this.hasTimeout)
      ) {
        return this.setSlideInterval();
      }
    },
    nextSlide() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
      this.slideDirection = "next";
    },
    prevSlide() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
      this.slideDirection = "prev";
    },

    indicatorClickHandler(index) {
      if (index < this.visibleSlide) {
        this.slideDirection = "prev";
      } else {
        this.slideDirection = "next";
      }
      this.$nextTick(() => (this.visibleSlide = index));
    },
  },
  watch: {
    visibleSlide(newval) {
      if (this.hasTimeout) {
        this.interval_time = this.timeoutTime;
        this.destroySlideInterval();

        setTimeout(() => this.setSlideInterval(), 0);
      }
    },
    hasTimeout() {
      this.toggleSlideInterval();
    },
    isHovering() {
      this.toggleSlideInterval();
    },
    isFullscreen() {
      this.toggleSlideInterval();
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: auto;
  .carousel-inner-wrapper {
    position: relative;
    .debag-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      z-index: 1;
      font-size: 10px;
      padding: 6px;
    }
  }
}
</style>