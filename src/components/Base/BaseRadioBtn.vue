<template>
  <div>
    <input
      type="radio"
      :id="elementId"
      @input="$emit('update:modelValue', value)"
      :checked="modelValue == value"
    />
    <label :for="elementId">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
    },
    value: {
      required: true,
    },
    modelValue: {
      type: [String, Number],
    },
  },
  computed: {
    elementId() {
      let uniq = Math.random().toString().replace(/0./i, "");
      return this.id ? this.id : `radio-${uniq}`;
    },
  },
};
</script>