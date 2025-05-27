<template>
  <div
    class="mobile-goodbye"
    :style="{
      height: screenWidth < 1440 ? '811px' : '1024px',
      width: screenWidth < 1440 ? '375px' : '1440px'
    }"
    data-model-id="3266:1863"
  >
    <div
      class="mobile-goodbye-wrapper"
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
        class="div-3"
        :style="{
          flex: screenWidth >= 1440 ? '1' : undefined,
          flexGrow: screenWidth >= 1440 ? '1' : undefined,
          width: screenWidth < 1440 ? '375px' : undefined
        }"
      >
        <template v-if="screenWidth < 1440">
          <div class="logo-container-4">
            <a
              href="https://www.jls.ch/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                class="logo-container-5"
                alt="Logo container"
                src="https://c.animaapp.com/JLkwDwWI/img/logo-container-10@2x.png"
              />
            </a>
          </div>

          <div class="frame-11">
            <div class="frame-12">
              <div class="h-3">Auf Wiedersehen</div>

              <p class="body-2">
                Das Ostergame ist leider vorbei. Wir freuen uns bereits
                jetzt aufs nächste Jahr.
              </p>

              <router-link to="/mobileu45startu45screen">
                <img
                  class="image-container-5"
                  alt="Image container"
                  src="https://c.animaapp.com/JLkwDwWI/img/image-container-4@2x.png"
                />
              </router-link>
            </div>

            <Textlink
              class="textlink-5"
              divClassName="textlink-6"
              status="default"
              to="/impressumu45screen"
            />
          </div>
        </template>

        <template v-else>
          <LogoContainer
            class="logo-container-6"
            href="https://www.jls.ch/"
          />
          <div class="frame-13">
            <div class="frame-12">
              <div class="h-3">Auf Wiedersehen</div>

              <p class="body-2">
                Das Ostergame ist leider vorbei. Wir freuen uns bereits
                jetzt aufs nächste Jahr.
              </p>

              <router-link to="/mobileu45startu45screen">
                <img
                  class="image-container-6"
                  alt="Image container"
                  src="https://c.animaapp.com/JLkwDwWI/img/image-container-5@2x.png"
                />
              </router-link>
            </div>

            <Textlink
              class="textlink-5"
              divClassName="textlink-6"
              status="default"
              to="/impressumu45screen"
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
  name: "MobileGoodbye",
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
.mobile-goodbye .mobile-goodbye-wrapper {
  gap: 8px;
  position: relative;
}

.mobile-goodbye .div-3 {
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

.mobile-goodbye .logo-container-4 {
  height: 75px;
  position: relative;
  width: 147.89px;
}

.mobile-goodbye .logo-container-5 {
  display: block;
  height: 75px;
  left: 0;
  position: absolute;
  top: 0;
  width: 148px;
}

.mobile-goodbye .frame-11 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 56px;
  position: relative;
  width: 100%;
}

.mobile-goodbye .frame-12 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 100%;
}

.mobile-goodbye .h-3 {
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

.mobile-goodbye .body-2 {
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

.mobile-goodbye .image-container-5 {
  align-self: stretch;
  display: block;
  height: 300px;
  object-fit: cover;
  position: relative;
  width: 100%;
}

.mobile-goodbye .textlink-5 {
  flex: 0 0 auto !important;
}

.mobile-goodbye .textlink-6 {
  text-align: right !important;
}

.mobile-goodbye .logo-container-6 {
  background-image: url(https://c.animaapp.com/JLkwDwWI/img/logo-container-6@2x.png) !important;
  position: relative !important;
  width: 147.89px !important;
}

.mobile-goodbye .frame-13 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 56px;
  position: relative;
  width: 416px;
}

.mobile-goodbye .image-container-6 {
  align-self: stretch;
  display: block;
  height: 422px;
  object-fit: cover;
  position: relative;
  width: 100%;
}
</style>
