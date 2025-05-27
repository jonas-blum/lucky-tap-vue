<template>
  <div
    class="impressum-screen"
    :style="{
      height: screenWidth < 1440 ? '1187px' : '1017px',
      width: screenWidth < 1440 ? '375px' : '1440px'
    }"
    data-model-id="3257:1094"
  >
    <div
      class="mobile-impressum-wrapper"
      :style="{
        alignItems: screenWidth < 1440 ? 'center' : 'flex-start',
        display: screenWidth < 1440 ? 'inline-flex' : 'flex',
        width: screenWidth >= 1440 ? '1440px' : undefined
      }"
      :data-effects-mode="screenWidth < 1440 ? 'mobile' : 'desktop'"
      :data-typography-mode="screenWidth < 1440 ? 'mobile' : 'desktop'"
      data-typoswap-mode="non-serif"
    >
      <div
        class="mobile-impressum"
        :style="{
          flex: screenWidth >= 1440 ? '1' : undefined,
          flexGrow: screenWidth >= 1440 ? '1' : undefined,
          width: screenWidth < 1440 ? '375px' : undefined
        }"
      >
        <div class="logo-container-7">
          <a
            href="https://www.jls.ch/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              class="logo-container-8"
              alt="Logo container"
              :src="screenWidth >= 1440 ? 'https://c.animaapp.com/JLkwDwWI/img/logo-container-7@2x.png' : 'https://c.animaapp.com/JLkwDwWI/img/logo-container-10@2x.png'"
            />
          </a>
        </div>

        <template v-if="screenWidth < 1440">
          <div class="frame-14">
            <div class="frame-15">
              <div class="h-4">Impressum</div>

              <p class="label-2">
                Firma
                <br />
                Strasse / Nr.
                <br />
                PLZ / Ort
              </p>

              <div class="label-2">
                Tel.
                <br />
                E-Mail
              </div>

              <p class="body-3">
                Zur Teilnahme berechtigt sind alle Personen mit Wohnsitz in
                der Schweiz. Davon ausgenommen sind Mitarbeitende und deren
                Mietpartner. Die Gewinner:innen werden schriftlich
                benachrichtigt.
                <br />
                Über den Wettbewerb wird keine Korrespondenz geführt. Eine
                Barauszahlung ist nicht möglich. Der Rechtsweg ist
                ausgeschlossen. Die Teilnahme an der Verlosung erfolgt
                unabhängig von einer Produktbestellung bzw. einem Kauf.
              </p>

              <p class="body-3">
                Das Copyright für den gesamten Internetauftritt liegt bei
                der jls digital ag. Inhalte dürfen nicht in einem anderen
                Zusammenhang verwendet oder kopiert werden. Für
                Informationen und Inhalte auf dieser Webseite werden
                sämtliche Haftungsansprüche ausgeschlossen. Persönliche
                Daten, die beim Ausfüllen des Formulars übermittelt werden,
                sind vertraulich und werden nicht an Dritte weitergegeben.
              </p>
            </div>

            <Button
              @click="goBack"
              divClassName="button-3"
              :icon="false"
              status="default"
              statusDefaultIconClassName="button-instance"
              text="Schliessen"
            />
          </div>

          <div class="close" @click="goBack">
            <img
              class="vector"
              alt="Vector"
              src="https://c.animaapp.com/JLkwDwWI/img/vector.svg"
            />
          </div>
        </template>

        <template v-else>
          <div class="frame-16">
            <div class="frame-15">
              <div class="h-4">Impressum</div>

              <p class="label-2">
                Firma
                <br />
                Strasse / Nr.
                <br />
                PLZ / Ort
              </p>

              <div class="label-2">
                Tel.
                <br />
                E-Mail
              </div>

              <p class="body-3">
                Zur Teilnahme berechtigt sind alle Personen mit Wohnsitz in
                der Schweiz. Davon ausgenommen sind Mitarbeitende und deren
                Mietpartner. Die Gewinner:innen werden schriftlich
                benachrichtigt.
                <br />
                Über den Wettbewerb wird keine Korrespondenz geführt. Eine
                Barauszahlung ist nicht möglich. Der Rechtsweg ist
                ausgeschlossen. Die Teilnahme an der Verlosung erfolgt
                unabhängig von einer Produktbestellung bzw. einem Kauf.
              </p>

              <p class="body-3">
                Das Copyright für den gesamten Internetauftritt liegt bei
                der jls digital ag. Inhalte dürfen nicht in einem anderen
                Zusammenhang verwendet oder kopiert werden. Für
                Informationen und Inhalte auf dieser Webseite werden
                sämtliche Haftungsansprüche ausgeschlossen. Persönliche
                Daten, die beim Ausfüllen des Formulars übermittelt werden,
                sind vertraulich und werden nicht an Dritte weitergegeben.
              </p>

              <Button
                @click="goBack"
                :icon="false"
                status="default"
                statusDefaultIconClassName="button-4"
                text="Schliessen"
              />
            </div>
          </div>

          <HugeIconInterfaceOutlineRemove class="huge-icon-interface" @click="goBack" />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useWindowWidth } from "../breakpoints";
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";
import HugeIconInterfaceOutlineRemove from "../icons/HugeIconInterfaceOutlineRemove.vue";

export default defineComponent({
  name: "ImpressumScreen",
  components: {
    Button,
    HugeIconInterfaceOutlineRemove
  },
  setup() {
    const screenWidth = useWindowWidth();
    const router = useRouter();

    const goBack = () => {
      router.back();
    };

    return {
      screenWidth,
      goBack
    };
  }
});
</script>

<style>
.impressum-screen .mobile-impressum-wrapper {
  gap: 8px;
  position: relative;
}

.impressum-screen .mobile-impressum {
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

.impressum-screen .logo-container-7 {
  height: 75px;
  position: relative;
  width: 147.89px;
}

.impressum-screen .logo-container-8 {
  display: block;
  height: 75px;
  left: 0;
  position: absolute;
  top: 0;
  width: 148px;
}

.impressum-screen .frame-14 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 56px;
  position: relative;
  width: 100%;
}

.impressum-screen .frame-15 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 100%;
}

.impressum-screen .h-4 {
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
}

.impressum-screen .label-2 {
  align-self: stretch;
  color: #111111;
  font-family: var(--label-font-family);
  font-size: var(--label-font-size);
  font-style: var(--label-font-style);
  font-weight: var(--label-font-weight);
  letter-spacing: var(--label-letter-spacing);
  line-height: var(--label-line-height);
  position: relative;
}

.impressum-screen .body-3 {
  align-self: stretch;
  color: #111111;
  font-family: var(--body-font-family);
  font-size: var(--body-font-size);
  font-style: var(--body-font-style);
  font-weight: var(--body-font-weight);
  letter-spacing: var(--body-letter-spacing);
  line-height: var(--body-line-height);
  position: relative;
}

.impressum-screen .button-instance {
  align-self: stretch !important;
  display: flex !important;
  width: 100% !important;
}

.impressum-screen .button-3 {
  margin-top: unset !important;
}

.impressum-screen .close {
  height: 24px;
  left: 319px;
  position: absolute;
  top: 48px;
  width: 24px;
  cursor: pointer;
}

.impressum-screen .vector {
  height: 18px;
  left: 3px;
  position: absolute;
  top: 3px;
  width: 18px;
}

.impressum-screen .frame-16 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 56px;
  position: relative;
  width: 416px;
}

.impressum-screen .button-4 {
  display: flex !important;
  width: 310px !important;
}

.impressum-screen .huge-icon-interface {
  height: 32px !important;
  left: 896px !important;
  position: absolute !important;
  top: 48px !important;
  width: 32px !important;
  cursor: pointer;
}
</style>
