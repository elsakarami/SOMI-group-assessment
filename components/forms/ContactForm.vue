<template>
  <div class="form">
    <form @submit.prevent="submitForm" class="form__container">
      <div ref="formRef" class="form__card">
        <h3 class="form__title">Austausch vereinbaren</h3>
        <div class="form__group">
          <input
            type="text"
            id="firstName"
            v-model="form.firstName"
            class="form__input"
            required
          />
          <label for="firstName" class="form__label">Vorname*</label>
        </div>
        <div class="form__group">
          <input
            type="text"
            id="lastName"
            v-model="form.lastName"
            class="form__input"
            required
          />
          <label for="lastName" class="form__label">Nachname*</label>
        </div>
        <div class="form__group">
          <input
            type="text"
            id="contact"
            v-model="form.contact"
            class="form__input"
            required
          />
          <label for="contact" class="form__label">
            Telefonnummer oder E-Mail-Adresse*
          </label>
        </div>
        <div class="form__group">
          <textarea
            id="message"
            v-model="form.message"
            rows="1"
            class="form__input form__textarea"
          ></textarea>
          <label for="message" class="form__label">
            Infos oder Terminvorschlag
          </label>
        </div>
        <div class="form__group form__group--checkbox">
          <!-- <input type="checkbox" v-model="form.agree" required /> -->
          <label class="form__checkbox-label">
            Ich stimme zu, dass mit Absenden dieser Anfrage meine Angaben zur
            Kontaktaufnahme gespeichert werden. Ich kann meine Einwilligung
            jederzeit für die Zukunft per Mail an datenschutz@somi.de
            widerrufen. Hier finden Sie unsere
            <a href="">Datenschutzerklärung</a> zu SOMI Group
          </label>
        </div>
        <div class="form__close" @click="closeForm">
          <img src="/images/icon_close.svg" alt="close" />
        </div>
      </div>
      <button
        type="submit"
        @click="console.log('assessment')"
        class="form__submit"
        name="submit-form"
      >
        <img src="/images/icon_daten_senden.svg" alt="" />
        <div>Daten senden</div>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["closeForm"]);
interface FormData {
  firstName: string;
  lastName: string;
  contact: string;
  message: string;
  agree: boolean;
}

const form = ref<FormData>({
  firstName: "",
  lastName: "",
  contact: "",
  message: "",
  agree: false,
});

const submitForm = () => {
  if (form.value.agree) {
  } else {
    alert("Please agree to the data protection terms.");
  }
};

const closeForm = () => {
  emit("closeForm");
};

</script>

<style lang="scss">

</style>
