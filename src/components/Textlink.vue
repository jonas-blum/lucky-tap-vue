<template>
  <router-link :class="['textlink', className]" :to="to">
    <div :class="['impressum', divClassName]">{{ text }}</div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Textlink",
  props: {
    status: {
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
      default: "Impressum",
    },
    to: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
.textlink {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  position: relative;
}

.textlink .impressum {
  color: #111111;
  font-family: var(--body-font-family);
  font-size: var(--body-font-size);
  font-style: var(--body-font-style);
  font-weight: var(--body-font-weight);
  letter-spacing: var(--body-letter-spacing);
  line-height: var(--body-line-height);
  margin-top: -1.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
