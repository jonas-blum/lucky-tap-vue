<template>
  <button :class="['button-final', state, className]">
    <div :class="['button-2', divClassName]">{{ text }}</div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonFinal",
  props: {
    iconLeft: {
      type: Boolean,
      default: false,
    },
    iconRight: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    divClassName: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Button",
    },
  },
});
</script>

<style>
.button-final {
  all: unset;
  align-items: center;
  background-color: #000000;
  border-radius: 3px;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  position: relative;
}

.button-final .button-2 {
  color: #ffffff;
  font-family: var(--desktop-CTA-18-medium-font-family);
  font-size: var(--desktop-CTA-18-medium-font-size);
  font-style: var(--desktop-CTA-18-medium-font-style);
  font-weight: var(--desktop-CTA-18-medium-font-weight);
  letter-spacing: var(--desktop-CTA-18-medium-letter-spacing);
  line-height: var(--desktop-CTA-18-medium-line-height);
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.button-final.default {
  padding: 12px 24px;
}

.button-final.hover {
  padding: 14px 26px;
}
</style>
