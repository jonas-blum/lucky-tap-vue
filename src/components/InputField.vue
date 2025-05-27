<template>
  <div :class="['input-field', className]">
    <div class="frame-3">
      <div class="text-wrapper">{{ text }}</div>
      <div class="vorname">{{ text1 }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputField",
  props: {
    status: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Label*",
    },
    text1: {
      type: String,
      default: "Vorname",
    },
  },
});
</script>

<style>
.input-field {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  position: relative;
  width: 311px;
}

.input-field .frame-3 {
  align-items: flex-start;
  align-self: stretch;
  border: 1px solid;
  border-color: #111111;
  border-radius: 12px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 12px 16px;
  position: relative;
  width: 100%;
}

.input-field .text-wrapper {
  color: #111111;
  font-family: var(--label-font-family);
  font-size: var(--label-font-size);
  font-style: var(--label-font-style);
  font-weight: var(--label-font-weight);
  letter-spacing: var(--label-letter-spacing);
  line-height: var(--label-line-height);
  margin-top: -1.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.input-field .vorname {
  color: #111111;
  font-family: var(--CTA-font-family);
  font-size: var(--CTA-font-size);
  font-style: var(--CTA-font-style);
  font-weight: var(--CTA-font-weight);
  letter-spacing: var(--CTA-letter-spacing);
  line-height: var(--CTA-line-height);
  opacity: 0.3;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
