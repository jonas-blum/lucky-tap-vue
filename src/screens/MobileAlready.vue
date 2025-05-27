<template>
  <div
    class="mobile-already"
    :style="{
      height: screenWidth < 1440 ? '811px' : '1024px',
      width: screenWidth < 1440 ? '375px' : '1440px'
    }"
    data-model-id="3266:1862"
  >
    <div
      class="mobile-already-wrapper"
      :style="{
        alignItems: screenWidth < 1440 ? 'center' : 'flex-start',
        display: screenWidth < 1440 ? 'inline-flex' : 'flex',
        height: screenWidth < 1440 ? '811px' : '1024px',
        width: screenWidth >= 1440 ? '1440px' : undefined
      }"
      :data-effects-mode="screenWidth < 1440 ? 'mobile' : 'desktop'"
      :data-typography-mode="screenWidth < 1440 ? 'mobile' : 'desktop'"
      data-typoswap-mode="non-serif"
    >
      <div
        class="div-2"
        :style="{
          flex: screenWidth >= 1440 ? '1' : undefined,
          flexGrow: screenWidth >= 1440 ? '1' : undefined,
          width: screenWidth < 1440 ? '375px' : undefined
        }"
      >
        <template v-if="screenWidth < 1440">
          <div class="logo-container-2">
            <a
              href="https://www.jls.ch/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                class="logo-container-3"
                alt="Logo container"
                src="https://c.animaapp.com/JLkwDwWI/img/logo-container-11@2x.png"
              />
            </a>
          </div>

          <div class="frame-8">
            <div class="frame-9">
              <p class="h-2">Sie haben heute bereits teilgenommen</p>

              <p class="body">
                Versuchen Sie es doch morgen wieder. Es warten weiterhin
                tolle Preise auf Sie.
              </p>

              <router-link to="/vorbei">
                <img
                  class="image-container-3"
                  alt="Image container"
                  src="https://c.animaapp.com/JLkwDwWI/img/image-container-2@2x.png"
                />
              </router-link>
            </div>

            <Textlink
              class="textlink-3"
              divClassName="textlink-4"
              status="default"
              to="/impressum"
            />
          </div>
        </template>

        <template v-else>
          <LogoContainer
            class="logo-container-instance"
            href="https://www.jls.ch/"
          />
          <div class="frame-10">
            <div class="frame-9">
              <p class="h-2">Sie haben heute bereits teilgenommen</p>

              <p class="body">
                Versuchen Sie es doch morgen wieder. Es warten weiterhin
                tolle Preise auf Sie.
              </p>

              <router-link to="/vorbei">
                <img
                  class="image-container-4"
                  alt="Image container"
                  src="https://c.animaapp.com/JLkwDwWI/img/image-container-5@2x.png"
                />
              </router-link>
            </div>

            <Textlink
              class="textlink-3"
              divClassName="textlink-4"
              status="default"
              to="/impressum"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useWindowWidth } from "../breakpoints";
import LogoContainer from "../components/LogoContainer.vue";
import Textlink from "../components/Textlink.vue";

export default defineComponent({
  name: "MobileAlready",
  components: {
    LogoContainer,
    Textlink
  },
  setup() {
    const screenWidth = useWindowWidth();

    return {
      screenWidth
    };
  }
});
</script>

<style>
.mobile-already .mobile-already-wrapper {
  gap: 8px;
  position: relative;
}

.mobile-already .div-2 {
  align-items: center;
  align-self: stretch;
  background-image: url(https://c.animaapp.com/JLkwDwWI/img/frame-3-7.png);
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 56px 32px;
  position: relative;
}

.mobile-already .logo-container-2 {
  height: 75px;
  position: relative;
  width: 147.89px;
}

.mobile-already .logo-container-3 {
  display: block;
  height: 75px;
  left: 0;
  position: absolute;
  top: 0;
  width: 148px;
}

.mobile-already .frame-8 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 56px;
  margin-bottom: -48.00px;
  position: relative;
  width: 100%;
}

.mobile-already .frame-9 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 100%;
}

.mobile-already .h-2 {
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

.mobile-already .body {
  align-self: stretch;
  color: #111111;
  font-family: var(--body-font-family);
  font-size: var(--body-font-size);
  font-style: var(--body-font-style);
  font-weight: var(--body-font-weight);
  letter-spacing: var(--body-letter-spacing);
  line-height: var(--body-line-height);
  position: relative;
  text-align: center;
}

.mobile-already .image-container-3 {
  align-self: stretch;
  display: block;
  height: 300px;
  object-fit: cover;
  position: relative;
  width: 100%;
}

.mobile-already .textlink-3 {
  flex: 0 0 auto !important;
}

.mobile-already .textlink-4 {
  text-align: right !important;
}

.mobile-already .logo-container-instance {
  background-image: url(https://c.animaapp.com/JLkwDwWI/img/logo-container-6@2x.png) !important;
  position: relative !important;
  width: 147.89px !important;
}

.mobile-already .frame-10 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 56px;
  position: relative;
  width: 416px;
}

.mobile-already .image-container-4 {
  align-self: stretch;
  display: block;
  height: 422px;
  object-fit: cover;
  position: relative;
  width: 100%;
}
</style>
