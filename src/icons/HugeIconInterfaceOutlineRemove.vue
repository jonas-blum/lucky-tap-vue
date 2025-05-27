<template>
  <svg
    :class="['huge-icon-interface-outline-remove', className]"
    fill="none"
    height="32"
    viewBox="0 0 33 32"
    width="33"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M21.9651 10.3432L10.6514 21.6569M21.9651 21.6569L10.6514 10.3431"
      stroke="#28303F"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HugeIconInterfaceOutlineRemove",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
});
</script>

<style>
</style>
