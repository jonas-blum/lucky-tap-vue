<template>
  <div
    class="win-screen"
    :style="{
      height: screenWidth < 1440 ? '1187px' : '1671px',
      width: screenWidth < 1440 ? '375px' : '1440px'
    }"
    data-model-id="3257:1084"
  >
    <div
      class="frame-17"
      :style="{
        alignItems: screenWidth < 1440 ? 'flex-start' : 'center',
        flexDirection: screenWidth < 1440 ? 'column' : undefined,
        gap: screenWidth >= 1440 ? '8px' : undefined,
        width: screenWidth < 1440 ? '375px' : '1440px'
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
          <form class="frame-21" @submit.prevent="submitForm">
            <p class="text-wrapper-4">
              Bitte hinterlegen Sie Ihre Angaben, damit wir Sie kontaktieren
              können. Den Gewinn senden wir Ihnen gerne per Post zu. Sie
              nehmen automatisch an der Verlosung vom Hauptgewinn teil.
            </p>

            <div class="frame-22">
              <div class="frame-23">
                <Single
                  class="instance-node-2"
                  :selectorsStatus="formData.gender === 'female' ? 'active' : 'default'"
                  state="default"
                  text="Frau"
                  @click="formData.gender = 'female'"
                />
                <Single
                  class="instance-node-2"
                  :selectorsStatus="formData.gender === 'male' ? 'active' : 'default'"
                  state="default"
                  text="Herr"
                  @click="formData.gender = 'male'"
                />
                <Single
                  class="instance-node-2"
                  :selectorsStatus="formData.gender === 'diverse' ? 'active' : 'default'"
                  state="default"
                  text="Divers"
                  @click="formData.gender = 'diverse'"
                />
              </div>

              <div class="input-field-wrapper">
                <label class="input-label">Vorname*</label>
                <input 
                  v-model="formData.firstName" 
                  class="input-field-custom" 
                  type="text" 
                  placeholder="Max"
                  required
                />
                <div v-if="errors.firstName" class="error-message">{{ errors.firstName }}</div>
              </div>

              <div class="input-field-wrapper">
                <label class="input-label">Nachname*</label>
                <input 
                  v-model="formData.lastName" 
                  class="input-field-custom" 
                  type="text" 
                  placeholder="Muster"
                  required
                />
                <div v-if="errors.lastName" class="error-message">{{ errors.lastName }}</div>
              </div>

              <div class="input-field-wrapper">
                <label class="input-label">E-Mail*</label>
                <input 
                  v-model="formData.email" 
                  class="input-field-custom" 
                  type="email" 
                  placeholder="mx.muster@gmail.com"
                  required
                />
                <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
              </div>

              <div class="input-field-wrapper">
                <label class="input-label">Telefonnummer*</label>
                <input 
                  v-model="formData.phone" 
                  class="input-field-custom" 
                  type="tel" 
                  placeholder="+41 79 123 45 67"
                  required
                />
                <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
              </div>
            </div>

            <Single
              class="single-2"
              divClassName="single-instance"
              :selectorsStatus="formData.newsletter ? 'active' : 'default'"
              selectorsType="checkbox"
              state="default"
              text="Ich möchte den Newsletter erhalten"
              @click="formData.newsletter = !formData.newsletter"
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

                    <div 
                      class="captcha-button"
                      @click.prevent="formData.captchaVerified = true"
                    >
                      <div class="captcha-button-text">Hier klicken</div>
                    </div>
                </div>
              </div>

              <img
                class="image-2"
                alt="Image"
                src="https://c.animaapp.com/JLkwDwWI/img/image-6-1@2x.png"
              />
            </div>

            <button 
              type="submit" 
              class="submit-button" 
              :class="{ 'disabled': !isFormValid }"
              :disabled="!isFormValid"
            >
              <div class="button-text">Senden</div>
            </button>

            <Textlink
              class="instance-node-2"
              divClassName="textlink-7"
              status="default"
              text="Impressum"
              to="/impressum"
            />
          </form>
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
            <form class="frame-30" @submit.prevent="submitForm">
              <p class="body-4">
                Bitte hinterlegen Sie Ihre Angaben, damit wir Sie kontaktieren
                können. Den Gewinn senden wir Ihnen gerne per Post zu. Sie
                nehmen automatisch an der Verlosung vom Hauptgewinn teil.
              </p>

              <div class="frame-22">
                <div class="frame-23">
                  <Single
                    class="instance-node-2"
                    :selectorsStatus="formData.gender === 'female' ? 'active' : 'default'"
                    selectorsType="radio"
                    state="default"
                    text="Frau"
                    @click="formData.gender = 'female'"
                  />
                  <Single
                    class="instance-node-2"
                    :selectorsStatus="formData.gender === 'male' ? 'active' : 'default'"
                    selectorsType="radio"
                    state="default"
                    text="Herr"
                    @click="formData.gender = 'male'"
                  />
                  <Single
                    class="instance-node-2"
                    :selectorsStatus="formData.gender === 'diverse' ? 'active' : 'default'"
                    selectorsType="radio"
                    state="default"
                    text="Divers"
                    @click="formData.gender = 'diverse'"
                  />
                </div>

                <div class="input-field-wrapper">
                  <label class="input-label">Vorname*</label>
                  <input 
                    v-model="formData.firstName" 
                    class="input-field-custom" 
                    type="text" 
                    placeholder="Max"
                    required
                  />
                  <div v-if="errors.firstName" class="error-message">{{ errors.firstName }}</div>
                </div>

                <div class="input-field-wrapper">
                  <label class="input-label">Nachname*</label>
                  <input 
                    v-model="formData.lastName" 
                    class="input-field-custom" 
                    type="text" 
                    placeholder="Muster"
                    required
                  />
                  <div v-if="errors.lastName" class="error-message">{{ errors.lastName }}</div>
                </div>

                <div class="input-field-wrapper">
                  <label class="input-label">E-Mail*</label>
                  <input 
                    v-model="formData.email" 
                    class="input-field-custom" 
                    type="email" 
                    placeholder="mx.muster@gmail.com"
                    required
                  />
                  <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
                </div>

                <div class="input-field-wrapper">
                  <label class="input-label">Telefonnummer*</label>
                  <input 
                    v-model="formData.phone" 
                    class="input-field-custom" 
                    type="tel" 
                    placeholder="+41 79 123 45 67"
                    required
                  />
                  <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
                </div>
              </div>

              <Single
                class="single-2"
                divClassName="single-instance"
                :selectorsStatus="formData.newsletter ? 'active' : 'default'"
                selectorsType="checkbox"
                state="default"
                text="Ich möchte den Newsletter erhalten"
                @click="formData.newsletter = !formData.newsletter"
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

                    <div 
                      class="captcha-button"
                      @click.prevent="formData.captchaVerified = true"
                    >
                      <div class="captcha-button-text">Hier klicken</div>
                    </div>
                  </div>
                </div>

                <img
                  class="image-2"
                  alt="Image"
                  src="https://c.animaapp.com/JLkwDwWI/img/image-6-1@2x.png"
                />
              </div>

              <button 
                type="submit" 
                class="submit-button" 
                :class="{ 'disabled': !isFormValid }"
                :disabled="!isFormValid"
              >
                <div class="button-text">Senden</div>
              </button>

              <Textlink
                class="instance-node-2"
                divClassName="textlink-7"
                status="default"
                text="Impressum"
                to="/impressum"
              />
            </form>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from "vue";
import { useWindowWidth } from "../breakpoints";
import { useRouter } from "vue-router";
import ButtonFinal from "../components/ButtonFinal.vue";
import LogoContainer from "../components/LogoContainer.vue";
import Single from "../components/Single.vue";
import Textlink from "../components/Textlink.vue";

export default defineComponent({
  name: "WinScreen",
  components: {
    ButtonFinal,
    LogoContainer,
    Single,
    Textlink,
  },
  setup() {
    const screenWidth = useWindowWidth();
    const router = useRouter();
    
    const formData = reactive({
      gender: 'diverse',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      newsletter: false,
      captchaVerified: false
    });
    
    const errors = reactive({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });
    
    const validateEmail = (email: string) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
    
    const validatePhone = (phone: string) => {
      // More relaxed validation for phone numbers
      // Allow different formats and just check for minimum digits
      const digitsOnly = phone.replace(/\D/g, '');
      return digitsOnly.length >= 8 && digitsOnly.length <= 15;
    };
    
    const validateForm = () => {
      let isValid = true;
      
      // Reset errors
      errors.firstName = '';
      errors.lastName = '';
      errors.email = '';
      errors.phone = '';
      
      if (!formData.firstName.trim()) {
        errors.firstName = 'Vorname ist erforderlich';
        isValid = false;
      }
      
      if (!formData.lastName.trim()) {
        errors.lastName = 'Nachname ist erforderlich';
        isValid = false;
      }
      
      if (!formData.email.trim()) {
        errors.email = 'E-Mail ist erforderlich';
        isValid = false;
      } else if (!validateEmail(formData.email)) {
        errors.email = 'Ungültige E-Mail-Adresse';
        isValid = false;
      }
      
      if (!formData.phone.trim()) {
        errors.phone = 'Telefonnummer ist erforderlich';
        isValid = false;
      } else if (!validatePhone(formData.phone)) {
        errors.phone = 'Ungültige Telefonnummer';
        isValid = false;
      }
      
      return isValid;
    };
    
    const isFormValid = computed(() => {
      return formData.firstName.trim() !== '' && 
             formData.lastName.trim() !== '' && 
             validateEmail(formData.email) && 
             validatePhone(formData.phone) &&
             formData.captchaVerified;
    });
    
    const submitForm = () => {
      if (validateForm()) {
        console.log('Form submitted:', formData);
        // Navigate to the "already participated" page
        router.push('/bereits-teilgenommen');
      }
    };
    
    return {
      screenWidth,
      formData,
      errors,
      isFormValid,
      submitForm
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

.win-screen .input-field-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.win-screen .input-label {
  color: #111111;
  font-family: var(--label-font-family);
  font-size: var(--label-font-size);
  font-weight: var(--label-font-weight);
}

.win-screen .input-field-custom {
  align-self: stretch;
  border: 1px solid #111111;
  border-radius: 12px;
  padding: 12px 16px;
  font-family: var(--CTA-font-family);
  font-size: var(--CTA-font-size);
  width: 100%;
  box-sizing: border-box;
}

.win-screen .error-message {
  color: #EC0000;
  font-size: 14px;
  margin-top: 4px;
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

.win-screen .captcha-button {
  align-self: stretch;
  background-color: #111111;
  display: flex;
  height: 24px;
  padding: 0px 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
}

.win-screen .captcha-button-text {
  font-family: var(--label-font-family);
  font-size: var(--label-font-size);
  font-style: var(--label-font-style);
  font-weight: var(--label-font-weight);
  letter-spacing: var(--label-letter-spacing);
  line-height: var(--label-line-height);
  color: #FFFFFF;
}

.win-screen .image-2 {
  height: 10.36px;
  mix-blend-mode: multiply;
  position: relative;
  width: 93.82px;
}

.win-screen .submit-button {
  all: unset;
  align-items: center;
  background-color: #efb0d0;
  border-radius: 12px;
  box-sizing: border-box;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  padding: 12px 24px;
  position: relative;
  cursor: pointer;
  align-self: stretch;
  width: 100%;
}

.win-screen .submit-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.win-screen .button-text {
  color: #111111;
  font-family: var(--CTA-font-family);
  font-size: var(--CTA-font-size);
  font-style: var(--CTA-font-style);
  font-weight: var(--CTA-font-weight);
  letter-spacing: var(--CTA-letter-spacing);
  line-height: var(--CTA-line-height);
  margin-top: -1.00px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
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
</style>
