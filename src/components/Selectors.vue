<template>
  <div :class="['selectors', type, className]">
    <template v-if="status === 'active'">
      <div class="ellipse" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Selectors",
  props: {
    status: {
      type: String as PropType<"active" | "default">,
      required: true,
    },
    type: {
      type: String as PropType<"checkbox" | "radio">,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
});
</script>

<style>
.selectors {
  border: 1px solid;
  border-color: #111111;
  height: 24px;
  width: 24px;
}

.selectors .ellipse {
  background-color: #111111;
  border-radius: 4px;
  height: 8px;
  left: 7px;
  position: relative;
  top: 7px;
  width: 8px;
}

.selectors.radio {
  border-radius: 12px;
}

.selectors.checkbox {
  border-radius: 4px;
}
</style>
