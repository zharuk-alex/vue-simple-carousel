<template>
  <transition v-show="hover" name="fullscreen-btn">
    <div class="fullscreen-btn-container">
      <base-btn @click="$emit('update:modelValue', true)">
        <svg
          width="24px"
          height="24px"
          viewBox="-2 -2 24 24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin"
        >
          <path
            d="M19 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V3.414L11.414 10 18 16.586V13a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 0 1 0-2h3.586L10 11.414 3.414 18H7a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v3.586L8.586 10 2 3.414V7a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3.414L10 8.586 16.586 2H13a1 1 0 0 1 0-2h6z"
          />
        </svg>
      </base-btn>
    </div>
  </transition>

  <modal v-model="modelValue" @input="$emit('update:modelValue', $event)">
    <template #body>
      <slot></slot>
    </template>
  </modal>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  props: {
    hover: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: Boolean,
    },
  },
  emits: ["update:modelValue"],
  components: {
    Modal,
  },
  watch: {
    modelValue(newval) {
      this.$emit("update:modelValue", newval);
    },
  },
};
</script>

<style lang="scss" scoped>
.fullscreen-btn-container {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 2;
  svg {
    width: 18px !important;
    height: 18px !important;
  }
}
.fullscreen-btn-enter-active {
  animation: fadeInAnimation 0.3s ease-in-out;
}
.fullscreen-btn-leave-active {
  animation: fadeOutAnimation 0.3s ease-in-out;
}
</style>