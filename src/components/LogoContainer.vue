<template>
  <a
    :class="['logo-container', className]"
    :href="href"
    rel="noopener noreferrer"
    target="_blank"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LogoContainer",
  props: {
    className: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
.logo-container {
  background-image: url(https://c.animaapp.com/JLkwDwWI/img/logo-container@2x.png);
  background-size: 100% 100%;
  height: 75px;
  width: 148px;
}
</style>
