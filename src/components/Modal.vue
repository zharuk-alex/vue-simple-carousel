<template>
  <transition name="fade">
    <div v-show="modelValue" class="modal">
      <div class="modal-container">
        <div class="modal-title">
          <slot name="title"></slot>
          <base-btn
            class="modal-btn-close"
            @click="$emit('update:modelValue', false)"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="-6 -6 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
              class="jam jam-close"
            >
              <path
                d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"
              />
            </svg>
          </base-btn>
        </div>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
/* modal.scss */
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  background-color: rgba(0, 0, 0, 0.5);
  outline: 0;
  z-index: 3;
  .modal-title {
    display: flex;
    padding: 8px 12px;
    .modal-btn-close {
      padding: 2px;
      background: rgba(0, 0, 0, 0.5);
      margin-left: auto;
      svg {
        height: 18px;
        width: 18px;
      }
    }
  }
  .modal-container {
    background-color: #ffffff;
    min-width: 300px;
    min-height: 40px;
    max-width: 100%;
    position: relative;
    overflow: hidden;
    padding: 4px;
    margin: 0 15px;
  }
}
</style>

