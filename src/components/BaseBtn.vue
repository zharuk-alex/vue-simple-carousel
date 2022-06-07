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
  padding: 4px 23px;
  border-radius: 80px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 227, 2, 1);
  }

  &:disabled,
  [disabled] {
    cursor: not-allowed;
    background-color: rgba(180, 180, 180, 1);
    color: #ffffff;
  }
}
</style>