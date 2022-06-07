<template>
  <div style="min-width: 300px">
    <fieldset class="mb-1">
      <legend>Effects</legend>
      <div class="flex-row">
        <base-radio-btn
          class="mr-2"
          v-model="modelValue.slideEffectModel"
          value="slide"
        >
          Slide
        </base-radio-btn>
        <base-radio-btn
          class="mr-2"
          v-model="modelValue.slideEffectModel"
          value="fade"
        >
          Fade
        </base-radio-btn>
      </div>
    </fieldset>
    <fieldset class="mb-1">
      <legend>Settings</legend>
      <base-checkbox
        v-model="modelValue.slideHasIntervalModel"
        class="mt-1 mr-2"
      >
        Interval
      </base-checkbox>
      <inputSlideInterval
        v-show="modelValue.slideHasIntervalModel"
        v-model="modelValue.slideIntervalModel"
        class="mt-1 mr-2"
      />
      <base-checkbox
        v-show="modelValue.slideHasIntervalModel"
        v-model="modelValue.slideHoverPauseModel"
        class="mt-1 mr-2"
      >
        Pause on hover
      </base-checkbox>
      <base-checkbox v-model="modelValue.slideLazyModel" class="mb-1 mr-2">
        Slide lazyloading
      </base-checkbox>
    </fieldset>
  </div>
</template>

<script>
import InputSlideInterval from "@/components/InputSlideInterval.vue";

export default {
  props: {
    modelValue: {
      type: Object,
    },
  },
  components: {
    InputSlideInterval,
  },
};
</script>
<style lang="scss" scoped>
fieldset:first-of-type {
  @include for-size(tablet-landscape-up) {
    padding-top: 0;
    margin-top: -10px;
  }
}
</style>