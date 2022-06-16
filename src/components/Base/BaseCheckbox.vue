<template>
  <div>
    <input type="checkbox" :id="elementId" v-model="model" />
    <label :for="elementId">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: {
    id: {
      type: [String, Number],
    },
    modelValue: {
      type: Boolean,
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
      let uniq = Math.random().toString().replace(/0./i, "");
      return this.id ? this.id : `checkbox-${uniq}`;
    },
  },
};
</script>