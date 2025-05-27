<template>
  <router-link :to="to">
    <button :class="['button', statusDefaultIconClassName]">
      <div :class="['senden', divClassName]">{{ text }}</div>
    </button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    status: {
      type: String,
      required: true,
    },
    icon: {
      type: Boolean,
      required: true,
    },
    statusDefaultIconClassName: {
      type: String,
      default: "",
    },
    divClassName: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Senden",
    },
    to: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
.button {
  all: unset;
  align-items: center;
  background-color: #efb0d0;
  border-radius: 12px;
  box-sizing: border-box;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  padding: 12px 24px;
  position: relative;
}

.button .senden {
  color: #111111;
  font-family: var(--CTA-font-family);
  font-size: var(--CTA-font-size);
  font-style: var(--CTA-font-style);
  font-weight: var(--CTA-font-weight);
  letter-spacing: var(--CTA-letter-spacing);
  line-height: var(--CTA-line-height);
  margin-top: -1.00px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
