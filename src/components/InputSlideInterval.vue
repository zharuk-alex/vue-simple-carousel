<template>
  <div class="flex-row">
    <input type="number" :id="elementId" v-model="model" step="1" />
    <label style="margin-left: 8px" :for="elementId">ms</label>
  </div>
</template>

<script>
export default {
  name: "InputSlideInterval",
  props: {
    id: {
      type: [String, Number],
    },
    modelValue: {
      type: [Number],
    },
  },
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit("update:modelValue", newValue);
      },
    },
    elementId() {
      return this.id ? this.id : `input-${Date.now()}`;
    },
  },
};
</script>

<style>
</style>