<template>
  <div
    class="win-screen"
    :style="{
      alignItems: screenWidth < 1440 ? 'center' : undefined,
      display: screenWidth < 1440 ? 'inline-flex' : undefined,
      gap: screenWidth < 1440 ? '8px' : undefined,
      height: screenWidth >= 1440 ? '1671px' : undefined,
      position: screenWidth < 1440 ? 'relative' : undefined,
      width: screenWidth >= 1440 ? '1440px' : undefined
    }"
    :data-effects-mode="screenWidth < 1440 ? 'mobile' : undefined"
    data-model-id="3257:1084"
    :data-typography-mode="screenWidth < 1440 ? 'mobile' : undefined"
    :data-typoswap-mode="screenWidth < 1440 ? 'non-serif' : undefined"
  >
    <div
      class="frame-17"
      :style="{
        alignItems: screenWidth < 1440 ? 'flex-start' : screenWidth >= 1440 ? 'center' : undefined,
        flexDirection: screenWidth < 1440 ? 'column' : undefined,
        gap: screenWidth >= 1440 ? '8px' : undefined,
        width: screenWidth < 1440 ? '375px' : screenWidth >= 1440 ? '1440px' : undefined
      }"
      :data-effects-mode="screenWidth >= 1440 ? 'desktop' : undefined"
      :data-typography-mode="screenWidth >= 1440 ? 'desktop' : undefined"
      :data-typoswap-mode="screenWidth >= 1440 ? 'non-serif' : undefined"
    >
      <template v-if="screenWidth < 1440">
        <div class="frame-18">
          <div class="logo-container-9">
            <a
              href="https://www.jls.ch/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                class="logo-container-10"
                alt="Logo container"
                src="https://c.animaapp.com/JLkwDwWI/img/logo-container-11@2x.png"
              />
            </a>
          </div>

          <div class="frame-19">
            <div class="text-wrapper-2">Herzliche Gratulation</div>

            <p class="text-wrapper-3">
              Ihr Gewinn:
              <br />
              Eine Geschenkkarte im Wert von CHF 50.–
            </p>

            <img
              class="image-container-7"
              alt="Image container"
              src="https://c.animaapp.com/JLkwDwWI/img/image-container-8@2x.png"
            />
          </div>
        </div>

        <div class="frame-20">
          <div class="frame-21">
            <p class="text-wrapper-4">
              Bitte hinterlegen Sie Ihre Angaben, damit wir Sie kontaktieren
              können. Den Gewinn senden wir Ihnen gerne per Post zu. Sie
              nehmen automatisch an der Verlosung vom Hauptgewinn teil.
            </p>

            <div class="frame-22">
              <div class="frame-23">
                <Single
                  class="instance-node-2"
                  selectorsStatus="default"
                  state="default"
                  text="Frau"
                />
                <Single
                  class="instance-node-2"
                  selectorsStatus="default"
                  state="default"
                  text="Herr"
                />
                <Single
                  class="instance-node-2"
                  selectorsStatus="active"
                  state="default"
                  text="Divers"
                />
              </div>

              <InputField
                class="instance-node-2"
                status="default"
                text="Vorname*"
                text1="Max"
              />
              <InputField
                class="input-field-instance"
                status="default"
                text="Nachname*"
                text1="Muster"
              />
              <InputField
                class="input-field-instance"
                status="default"
                text="E-Mail*"
                text1="mx.muster@gmail.com"
              />
              <InputField
                class="input-field-2"
                status="default"
                text="Telefonnummer*"
                text1="+41 79 123 45 67"
              />
            </div>

            <Single
              class="single-2"
              divClassName="single-instance"
              selectorsStatus="default"
              selectorsType="checkbox"
              state="default"
              text="Ich möchte den Newsletter erhalten"
            />
            <div class="frame-24">
              <div class="frame-25">
                <img
                  class="image"
                  alt="Image"
                  src="https://c.animaapp.com/JLkwDwWI/img/image-7-1@2x.png"
                />

                <div class="frame-26">
                  <div class="text-wrapper-5">
                    Anti-Roboter-Vertifizierung
                  </div>

                  <ButtonFinal
                    class="button-final-instance"
                    color="dark"
                    divClassName="button-final-2"
                    size="large"
                    state="default"
                    text="Hier klicken"
                    type="primary"
                  />
                </div>
              </div>

              <img
                class="image-2"
                alt="Image"
                src="https://c.animaapp.com/JLkwDwWI/img/image-6-1@2x.png"
              />
            </div>

            <Button
              divClassName="button-6"
              :icon="false"
              status="default"
              statusDefaultIconClassName="button-5"
              text="Senden"
              to="/mobileu45alreadyu45participatedu45screen"
            />
            <Textlink
              class="instance-node-2"
              divClassName="textlink-7"
              status="default"
              text="Imrepssum"
              to="/impressumu45screen"
            />
          </div>
        </div>
      </template>

      <template v-else>
        <div class="frame-27">
          <div class="frame-18">
            <LogoContainer
              class="logo-container-11"
              href="https://www.jls.ch/"
            />
            <div class="frame-28">
              <div class="text-wrapper-2">Herzliche Gratulation</div>

              <p class="text-wrapper-3">
                Ihr Gewinn:
                <br />
                Eine Geschenkkarte im Wert von CHF 50.–
              </p>
            </div>

            <img
              class="image-container-8"
              alt="Image container"
              src="https://c.animaapp.com/JLkwDwWI/img/image-container-6@2x.png"
            />
          </div>

          <div class="frame-29">
            <div class="frame-30">
              <p class="body-4">
                Bitte hinterlegen Sie Ihre Angaben, damit wir Sie kontaktieren
                können. Den Gewinn senden wir Ihnen gerne per Post zu. Sie
                nehmen automatisch an der Verlosung vom Hauptgewinn teil.
              </p>

              <div class="frame-22">
                <div class="frame-23">
                  <Single
                    class="instance-node-2"
                    selectorsStatus="default"
                    selectorsType="radio"
                    state="default"
                    text="Frau"
                  />
                  <Single
                    class="instance-node-2"
                    selectorsStatus="default"
                    selectorsType="radio"
                    state="default"
                    text="Herr"
                  />
                  <Single
                    class="instance-node-2"
                    selectorsStatus="active"
                    selectorsType="radio"
                    state="default"
                    text="Divers"
                  />
                </div>

                <InputField
                  class="input-field-2"
                  status="default"
                  text="Vorname*"
                  text1="Max"
                />
                <InputField
                  class="input-field-3"
                  status="default"
                  text="Nachname*"
                  text1="Muster"
                />
                <InputField
                  class="input-field-3"
                  status="default"
                  text="E-Mail*"
                  text1="mx.muster@gmail.com"
                />
                <InputField
                  class="input-field-2"
                  status="default"
                  text="Telefonnummer*"
                  text1="+41 79 123 45 67"
                />
              </div>

              <Single
                class="single-2"
                divClassName="single-instance"
                selectorsStatus="default"
                selectorsType="checkbox"
                state="default"
                text="Ich möchte den Newsletter erhalten"
              />
              <div class="frame-24">
                <div class="frame-25">
                  <img
                    class="image"
                    alt="Image"
                    src="https://c.animaapp.com/JLkwDwWI/img/image-7@2x.png"
                  />

                  <div class="frame-26">
                    <div class="text-wrapper-5">
                      Anti-Roboter-Vertifizierung
                    </div>

                    <ButtonFinal
                      class="button-final-instance"
                      color="dark"
                      divClassName="button-final-2"
                      size="large"
                      state="default"
                      text="Hier klicken"
                      type="primary"
                    />
                  </div>
                </div>

                <img
                  class="image-2"
                  alt="Image"
                  src="https://c.animaapp.com/JLkwDwWI/img/image-6-1@2x.png"
                />
              </div>

              <Button
                :icon="false"
                status="default"
                statusDefaultIconClassName="button-5"
                text="Senden"
                to="/mobileu45alreadyu45participatedu45screen"
              />
              <Textlink
                class="instance-node-2"
                divClassName="textlink-7"
                status="default"
                text="Imrepssum"
                to="/impressumu45screen"
              />
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useWindowWidth } from "../breakpoints";
import Button from "../components/Button.vue";
import ButtonFinal from "../components/ButtonFinal.vue";
import InputField from "../components/InputField.vue";
import LogoContainer from "../components/LogoContainer.vue";
import Single from "../components/Single.vue";
import Textlink from "../components/Textlink.vue";

export default defineComponent({
  name: "WinScreen",
  components: {
    Button,
    ButtonFinal,
    InputField,
    LogoContainer,
    Single,
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
.win-screen .frame-17 {
  display: flex;
  position: relative;
}

.win-screen .frame-18 {
  align-items: center;
  align-self: stretch;
  background-image: url(https://c.animaapp.com/JLkwDwWI/img/frame-3-7.png);
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 64px;
  padding: 56px 32px;
  position: relative;
  width: 100%;
}

.win-screen .logo-container-9 {
  height: 75px;
  position: relative;
  width: 147.89px;
}

.win-screen .logo-container-10 {
  display: block;
  height: 75px;
  left: 0;
  position: absolute;
  top: 0;
  width: 148px;
}

.win-screen .frame-19 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 100%;
}

.win-screen .text-wrapper-2 {
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

.win-screen .text-wrapper-3 {
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

.win-screen .image-container-7 {
  align-self: stretch;
  height: 198.26px;
  position: relative;
  width: 100%;
}

.win-screen .frame-20 {
  align-items: center;
  align-self: stretch;
  background-color: #efe7eb;
  display: flex;
  flex: 0 0 auto;
  padding: 0px 32px;
  position: relative;
  width: 100%;
}

.win-screen .frame-21 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 40px;
  padding: 40px 0px;
  position: relative;
}

.win-screen .text-wrapper-4 {
  color: #111111;
  font-family: var(--body-font-family);
  font-size: var(--body-font-size);
  font-style: var(--body-font-style);
  font-weight: var(--body-font-weight);
  letter-spacing: var(--body-letter-spacing);
  line-height: var(--body-line-height);
  margin-top: -1.00px;
  position: relative;
  width: 311px;
}

.win-screen .frame-22 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 100%;
}

.win-screen .frame-23 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
}

.win-screen .instance-node-2 {
  flex: 0 0 auto !important;
}

.win-screen .input-field-instance {
  border-radius: 12px !important;
  flex: 0 0 auto !important;
}

.win-screen .input-field-2 {
  align-self: stretch !important;
  flex: 0 0 auto !important;
  width: 100% !important;
}

.win-screen .single-instance {
  flex: 1 !important;
  white-space: unset !important;
  width: unset !important;
}

.win-screen .single-2 {
  align-self: stretch !important;
  display: flex !important;
  flex: 0 0 auto !important;
  width: 100% !important;
}

.win-screen .frame-24 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 100%;
}

.win-screen .frame-25 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
  width: 100%;
}

.win-screen .image {
  height: 26.42px;
  mix-blend-mode: multiply;
  position: relative;
  width: 25.5px;
}

.win-screen .frame-26 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
  position: relative;
}

.win-screen .text-wrapper-5 {
  align-self: stretch;
  color: #111111;
  font-family: var(--body-small-font-family);
  font-size: var(--body-small-font-size);
  font-style: var(--body-small-font-style);
  font-weight: var(--body-small-font-weight);
  letter-spacing: var(--body-small-letter-spacing);
  line-height: var(--body-small-line-height);
  margin-top: -1.00px;
  position: relative;
}

.win-screen .button-final-instance {
  align-self: stretch !important;
  background-color: #111111 !important;
  display: flex !important;
  height: 24px !important;
  padding: 0px 24px !important;
  width: 100% !important;
}

.win-screen .button-final-2 {
  font-family: var(--label-font-family) !important;
  font-size: var(--label-font-size) !important;
  font-style: var(--label-font-style) !important;
  font-weight: var(--label-font-weight) !important;
  letter-spacing: var(--label-letter-spacing) !important;
  line-height: var(--label-line-height) !important;
}

.win-screen .image-2 {
  height: 10.36px;
  mix-blend-mode: multiply;
  position: relative;
  width: 93.82px;
}

.win-screen .button-5 {
  align-self: stretch !important;
  display: flex !important;
  width: 100% !important;
}

.win-screen .button-6 {
  margin-top: unset !important;
}

.win-screen .textlink-7 {
  text-align: right !important;
}

.win-screen .frame-27 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
}

.win-screen .logo-container-11 {
  background-image: url(https://c.animaapp.com/JLkwDwWI/img/logo-container-8@2x.png) !important;
  position: relative !important;
  width: 147.89px !important;
}

.win-screen .frame-28 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 422px;
}

.win-screen .image-container-8 {
  height: 265.3px;
  position: relative;
  width: 422px;
}

.win-screen .frame-29 {
  align-items: center;
  align-self: stretch;
  background-color: #efe7eb;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  padding: 0px 32px;
  position: relative;
  width: 100%;
}

.win-screen .frame-30 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0px;
  position: relative;
  width: 422px;
}

.win-screen .body-4 {
  align-self: stretch;
  color: #111111;
  font-family: var(--body-font-family);
  font-size: var(--body-font-size);
  font-style: var(--body-font-style);
  font-weight: var(--body-font-weight);
  letter-spacing: var(--body-letter-spacing);
  line-height: var(--body-line-height);
  margin-top: -1.00px;
  position: relative;
  text-align: center;
}

.win-screen .input-field-3 {
  align-self: stretch !important;
  border-radius: 12px !important;
  flex: 0 0 auto !important;
  width: 100% !important;
}
</style>
