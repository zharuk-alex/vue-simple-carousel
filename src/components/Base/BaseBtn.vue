<template>
  <button :type="type" class="btn base-btn" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script >
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: "button",
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  margin: 0 20px;

  background-color: $primary_color;
  padding: 4px;
  border-radius: 50%;
  border: none;
  transition: background-color 0.3s;
  line-height: 0;
  color: #ffffff;
  &:hover {
    cursor: pointer;
    background-color: darken($primary_color, 5%);
  }

  &:disabled,
  [disabled] {
    cursor: not-allowed;
    background-color: rgba(180, 180, 180, 1);
  }
  :slotted(svg path) {
    fill: #ffffff !important;
  }
}
</style>