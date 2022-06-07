<template>
  <transition :name="transitionName">
    <div v-show="visibleSlide === index" class="carousel-item">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visibleSlide: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    direction: {
      type: String,
      default: null,
    },
    carouselEffect: {
      type: String,
    },
  },
  computed: {
    transitionName() {
      if (this.direction && this.carouselEffect == "slide") {
        return this.direction;
      } else if (this.carouselEffect == "fade") {
        return "fade";
      }
    },
  },
};
</script>

<style>
.carousel-item {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.left-enter-active {
  animation: leftInAnimation 0.4s ease-in-out;
}
.left-leave-active {
  animation: leftOutAnimation 0.4s ease-in-out;
}

@keyframes leftInAnimation {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes leftOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.right-enter-active {
  animation: rightInAnimation 0.4s ease-in-out;
}
.right-leave-active {
  animation: rightOutAnimation 0.4s ease-in-out;
}

@keyframes rightInAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes rightOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
/*  */
.fade-enter-active {
  animation: fadeInAnimation 0.4s ease-in-out;
}
.fade-leave-active {
  animation: fadeOutAnimation 0.4s ease-in-out;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOutAnimation {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>