<template>
  <div>
    <label>
      <div class="switch">
        <input type="checkbox" v-model="model" />
        <span class="switch-slider"></span>
      </div>
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseSwitch",
  props: {
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
  },
};
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 16px;
  margin-right: 8px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.switch-slider:before {
  content: "";
  position: absolute;
  height: 14px;
  width: 14px;
  left: 0;
  bottom: 0;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border: 1px solid rgb(118, 118, 118);
  border-radius: 50%;
}

input:checked + .switch-slider::before {
  left: 0;
}

input:checked + .switch-slider {
  background-color: $primary-color;
}

input:focus + .switch-slider {
  box-shadow: 0 0 1px $primary-color;
}

input:checked + .switch-slider:before {
  transform: translateX(20px);
}
</style>