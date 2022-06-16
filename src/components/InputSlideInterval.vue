<template>
  <div class="flex-row">
    <input
      type="range"
      :id="elementId"
      v-model="model"
      max="10000"
      min="500"
      :step="step"
    />
    <label style="margin-left: 8px" :for="elementId"> {{ model }} ms </label>
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
      type: Number,
    },
    step: {
      type: Number,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit("update:modelValue", +newValue);
      },
    },
    elementId() {
      let uniq = Math.random().toString().replace(/0./i, "");
      return this.id ? this.id : `input-${uniq}`;
    },
  },
};
</script>