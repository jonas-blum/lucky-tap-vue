<template>
  <div
    class="screens"
    data-effects-mode="mobile"
    data-typography-mode="desktop"
  >
    <div class="frame">
      <div :class="['div', frameClassName]">
        <LogoContainer
          :class="logoContainerLogoContainerClassName"
          :href="href"
        />
        <div class="h-wrapper">
          <p class="h">{{ text }}</p>
        </div>
      </div>

      <div class="frame-wrapper">
        <div class="frame-2">
          <div class="image-container-wrapper">
            <router-link :to="to">
              <img
                :class="['image-container', imageContainerClassName]"
                alt="Image container"
                :src="imageContainer"
              />
            </router-link>
          </div>

          <Textlink
            class="textlink-instance"
            divClassName="design-component-instance-node"
            status="default"
            text="Textlink"
            :to="to1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoContainer from "./LogoContainer.vue";
import Textlink from "./Textlink.vue";

export default defineComponent({
  name: "Screens",
  components: {
    LogoContainer,
    Textlink,
  },
  props: {
    property1: {
      type: String,
      required: true,
    },
    screen: {
      type: String,
      required: true,
    },
    frameClassName: {
      type: String,
      default: "",
    },
    logoContainerLogoContainerClassName: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Das hier ist ein H1 Titel",
    },
    imageContainerClassName: {
      type: String,
      default: "",
    },
    imageContainer: {
      type: String,
      default: "https://c.animaapp.com/JLkwDwWI/img/image-container@2x.png",
    },
    href: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    to1: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
.screens {
  align-items: center;
  display: flex;
  gap: 8px;
  height: 1024px;
  justify-content: center;
  position: relative;
  width: 1440px;
}

.screens .frame {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
}

.screens .div {
  align-items: center;
  align-self: stretch;
  background-image: url(https://c.animaapp.com/JLkwDwWI/img/frame-3.png);
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 64px;
  padding: 56px 64px 256px;
  position: relative;
  width: 100%;
}

.screens .h-wrapper {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 414px;
}

.screens .h {
  align-self: stretch;
  color: #111111;
  font-family: var(--h1-font-family);
  font-size: var(--h1-font-size);
  font-style: var(--h1-font-style);
  font-weight: var(--h1-font-weight);
  letter-spacing: var(--h1-letter-spacing);
  line-height: var(--h1-line-height);
  margin-top: -1.00px;
  position: relative;
  text-align: center;
}

.screens .frame-wrapper {
  align-items: center;
  align-self: stretch;
  background-color: #efe7eb;
  display: flex;
  flex: 1;
  flex-grow: 1;
  justify-content: center;
  padding: 0px 32px;
  position: relative;
  width: 100%;
}

.screens .frame-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px 0px 40px;
  position: relative;
  width: 416px;
}

.screens .image-container-wrapper {
  align-self: stretch;
  height: 64px;
  position: relative;
  width: 100%;
}

.screens .image-container {
  display: block;
  height: 422px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: -358px;
  width: 416px;
}

.screens .textlink-instance {
  flex: 0 0 auto !important;
}

.screens .design-component-instance-node {
  text-align: right !important;
}
</style>
