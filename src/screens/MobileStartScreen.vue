<template>
  <template v-if="screenWidth < 1440">
    <div
      class="mobile-start-screen"
      :style="{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        height: '811px',
        minWidth: '375px',
        position: 'relative'
      }"
      data-model-id="3266:1703"
    >
      <div class="frame-4">
        <div class="logo-container-wrapper">
          <a
            href="https://www.jls.ch/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              class="img"
              alt="Logo container"
              src="https://c.animaapp.com/JLkwDwWI/img/logo-container-10@2x.png"
            />
          </a>
        </div>

        <div class="div-wrapper">
          <p class="p">Tippe auf das Ei um zu spielen</p>
        </div>
      </div>

      <div class="frame-5">
        <div class="frame-6">
          <div class="frame-7">
            <div class="img-wrapper">
              <router-link to="/winu45screen">
                <img
                  class="image-container-2"
                  alt="Image container"
                  src="https://c.animaapp.com/JLkwDwWI/img/image-container-1@2x.png"
                />
              </router-link>
            </div>
          </div>

          <Textlink
            class="instance-node"
            divClassName="textlink-2"
            status="default"
            to="/impressumu45screen"
          />
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <Screens
      frameClassName="component"
      href="https://www.jls.ch/"
      imageContainer="https://c.animaapp.com/JLkwDwWI/img/image-container-7@2x.png"
      imageContainerClassName="component-2"
      logoContainerLogoContainerClassName="screens-instance"
      property1="startscreen"
      screen="desktop"
      text="Tippe auf das Ei um zu spielen"
      to="/winu45screen"
      to1="/impressumu45screen"
    />
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useWindowWidth } from "../breakpoints";
import Screens from "../components/Screens.vue";
import Textlink from "../components/Textlink.vue";

export default defineComponent({
  name: "MobileStartScreen",
  components: {
    Screens,
    Textlink,
  },
  setup() {
    const screenWidth = useWindowWidth();
    return {
      screenWidth,
    };
  },
});
</script>

<style>
.mobile-start-screen .frame-4 {
  align-items: center;
  align-self: stretch;
  background-image: url(https://c.animaapp.com/JLkwDwWI/img/frame-3-7.png);
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 64px;
  padding: 56px 32px 256px;
  position: relative;
  width: 100%;
}

.mobile-start-screen .logo-container-wrapper {
  height: 75px;
  position: relative;
  width: 147.89px;
}

.mobile-start-screen .img {
  display: block;
  height: 75px;
  left: 0;
  position: absolute;
  top: 0;
  width: 148px;
}

.mobile-start-screen .div-wrapper {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 100%;
}

.mobile-start-screen .p {
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

.mobile-start-screen .frame-5 {
  align-items: center;
  align-self: stretch;
  background-color: #efe7eb;
  display: flex;
  flex: 1;
  flex-grow: 1;
  padding: 0px 32px;
  position: relative;
  width: 100%;
}

.mobile-start-screen .frame-6 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 40px;
  padding: 0px 0px 40px;
  position: relative;
}

.mobile-start-screen .frame-7 {
  align-self: stretch;
  height: 64px;
  position: relative;
  width: 100%;
}

.mobile-start-screen .img-wrapper {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 311px;
  position: relative;
  top: -244px;
  width: 311px;
}

.mobile-start-screen .image-container-2 {
  align-self: stretch;
  display: block;
  height: 311px;
  position: relative;
  width: 100%;
}

.mobile-start-screen .instance-node {
  flex: 0 0 auto !important;
}

.mobile-start-screen .textlink-2 {
  text-align: right !important;
}

.mobile-start-screen .component {
  background-image: url(https://c.animaapp.com/JLkwDwWI/img/frame-3-7.png) !important;
}

.mobile-start-screen .screens-instance {
  background-image: url(https://c.animaapp.com/JLkwDwWI/img/logo-container-10@2x.png) !important;
  position: relative !important;
  width: 147.89px !important;
}

.mobile-start-screen .component-2 {
  object-fit: unset !important;
}
</style>
