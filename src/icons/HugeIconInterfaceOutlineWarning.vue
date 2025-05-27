<template>
  <svg
    :class="['huge-icon-interface-outline-warning', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      class="circle"
      cx="12"
      cy="17"
      fill="#EC0000"
      r="1"
      transform="rotate(-180 12 17)"
    />
    <path
      class="path"
      d="M12 14L12 7M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      stroke="#EC0000"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HugeIconInterfaceOutlineWarning",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
});
</script>

<style>
.huge-icon-interface-outline-warning {
  /* No specific styles defined */
}
</style>
