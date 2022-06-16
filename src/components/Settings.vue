<template>
  <div style="min-width: 300px">
    <fieldset class="mb-1">
      <legend>Effects</legend>
      <div class="flex-row">
        <base-radio-btn
          class="mr-2"
          v-model="modelValue.effectModel"
          value="slide1"
        >
          Slide 1
        </base-radio-btn>
        <base-radio-btn
          class="mr-2"
          v-model="modelValue.effectModel"
          value="slide2"
        >
          Slide 2
        </base-radio-btn>
        <base-radio-btn
          class="mr-2"
          v-model="modelValue.effectModel"
          value="fade"
        >
          Fade
        </base-radio-btn>
      </div>
    </fieldset>
    <fieldset class="mb-1">
      <legend>Sizing</legend>
      <div class="flex-row">
        <base-radio-btn
          class="mr-2"
          v-model="modelValue.sizeModel"
          value="cover"
        >
          cover
        </base-radio-btn>
        <base-radio-btn
          class="mr-2"
          v-model="modelValue.sizeModel"
          value="contain"
        >
          contain
        </base-radio-btn>
      </div>
    </fieldset>
    <fieldset class="mb-1">
      <legend>Settings</legend>
      <base-checkbox v-model="modelValue.hasCtrlModel" class="mt-1 mr-2">
        Show control buttons
      </base-checkbox>
      <base-checkbox v-model="modelValue.hasIndicatorsModel" class="mt-1 mr-2">
        Indicators
      </base-checkbox>
      <base-checkbox v-model="modelValue.hasAutoplayModel" class="mt-1 mr-2">
        Autoplay
      </base-checkbox>
      <inputSlideInterval
        v-show="modelValue.hasAutoplayModel"
        v-model="modelValue.timeoutTimeModel"
        :step="modelValue.timeoutStep"
        class="mt-1 mr-2"
      />
      <base-checkbox
        v-show="modelValue.hasAutoplayModel"
        v-model="modelValue.hoverPauseModel"
        class="mt-1 mr-2"
      >
        Pause on hover
      </base-checkbox>
      <base-switch class="mt-1 mr-2" v-model="modelValue.isThumbsModel">
        Show thumbs
      </base-switch>
      <base-checkbox v-model="modelValue.hasCountModel" class="mt-1 mr-2">
        Show number
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