<template>
  <div :class="['single', className]">
    <Selectors
      class="selectors-instance"
      :status="selectorsStatus"
      :type="selectorsType"
    />
    <div :class="['label', divClassName]">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Selectors from "./Selectors.vue";

export default defineComponent({
  name: "Single",
  components: {
    Selectors
  },
  props: {
    state: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    selectorsStatus: {
      type: String,
      default: "active",
    },
    text: {
      type: String,
      default: "Label",
    },
    selectorsType: {
      type: String,
      default: "radio",
    },
    divClassName: {
      type: String,
      default: "",
    },
  },
});
</script>

<style>
.single {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  position: relative;
}

.single .selectors-instance {
  position: relative !important;
}

.single .label {
  color: #111111;
  font-family: var(--label-font-family);
  font-size: var(--label-font-size);
  font-style: var(--label-font-style);
  font-weight: var(--label-font-weight);
  letter-spacing: var(--label-letter-spacing);
  line-height: var(--label-line-height);
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
