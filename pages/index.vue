<template>
  <div class="card-page relative">
    <transition name="scale">
      <div v-if="showCard" class="card-container absolute">
        <Card
          name="Soroosh Sadeghi"
          title="Dipl. Inform."
          position="COO"
          company="SOMI Experts GmbH"
          group="| part of SOMI Group"
          address="<p>Kennedyallee 93 <br/>60596 Frankfurt a. M.</p>"
          landlinePhone="+49 69 47 89 18 90 -11"
          mobilePhone="+49 151 10 49 36 95"
          email="soroosh.sadeghi@somi.de"
        ></Card>
        <div class="card-page__buttons">
          <button @click="toggleView" class="button button--primary" name="Austausch-vereinbaren">
            <svg
              width="38"
              height="31"
              viewBox="0 0 38 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8331 0C24.5775 0 31.6662 5.26483 31.6662 11.7598C31.6662 18.2549 24.5775 23.5197 15.8331 23.5197C14.9932 23.5197 14.169 23.4706 13.3645 23.3771C9.96373 26.4859 6.036 27.0434 2.11108 27.1255V26.3645C4.2306 25.4153 5.93748 23.6861 5.93748 21.7103C5.93748 21.4344 5.91384 21.1642 5.87049 20.8992C2.28954 18.7431 0 15.4504 0 11.7598C0 5.26535 7.08872 0 15.8331 0ZM32.8535 26.3588C32.8535 28.0524 34.0514 29.5342 35.8884 30.348V31C32.4864 30.9297 29.3643 30.4518 26.4166 27.7874C25.7191 27.8675 25.0053 27.9098 24.2774 27.9098C21.1283 27.9098 18.2273 27.1302 15.9119 25.8199C20.6841 25.8044 25.1894 24.4016 28.606 21.8638C30.3281 20.5845 31.6865 19.0841 32.644 17.4029C33.6591 15.6209 34.1736 13.7221 34.1736 11.7598C34.1736 11.4436 34.159 11.129 34.1319 10.8164C36.5256 12.6309 38 15.1037 38 17.8302C38 20.9932 36.0156 23.8158 32.912 25.6639C32.8743 25.8907 32.854 26.1227 32.854 26.3593L32.8535 26.3588Z"
                fill="white"
              />
            </svg>
            <span class="button__label">Austausch vereinbaren</span>
          </button>

          <button @click="saveContact" class="button button--primary" name="save-contact">
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 32C7.6634 32 0.5 24.8366 0.5 16C0.5 7.1634 7.6634 0 16.5 0C25.3366 0 32.5 7.1634 32.5 16C32.5 24.8366 25.3366 32 16.5 32ZM24.4235 15.3081C24.4235 14.6288 23.8721 14.0774 23.1928 14.0774H18.2697V9.1543C18.2697 8.47491 17.7196 7.92353 17.0389 7.92353H15.8081C15.1274 7.92353 14.5774 8.47491 14.5774 9.1543V14.0774H9.6543C8.9736 14.0774 8.42353 14.6288 8.42353 15.3081V16.5389C8.42353 17.2196 8.9736 17.7697 9.6543 17.7697H14.5774V22.6928C14.5774 23.3735 15.1274 23.9235 15.8081 23.9235H17.0389C17.7196 23.9235 18.2697 23.3735 18.2697 22.6928V17.7697H23.1928C23.8721 17.7697 24.4235 17.2196 24.4235 16.5389V15.3081Z"
                fill="white"
              />
            </svg>
            <span class="button__label">Kontakt speichern</span>
          </button>
        </div>
      </div>
    </transition>

    <transition name="scale">
      <div v-if="!showCard" class="absolute">
        <ContactForm @closeForm="toggleView"></ContactForm>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useHead } from 'nuxt/app'
import Card from "../components/card/Card.vue";
import ContactForm from "../components/forms/ContactForm.vue";


useHead({
  title: 'Somi Group | Innovative IT Recruiting, Consulting, and Services',
  meta: [
    {
      name: 'description',
      content: 'Somi Group offers specialized IT recruiting, consulting, and services. Since 2010, we provide tailored solutions through SOMI Experts, SOMI Services, SOMI Software, and SOMI Academy to help businesses succeed.'
    }
  ]
})

const showCard = ref(true);

const toggleView = () => {
  showCard.value = !showCard.value;
};

const saveContact = () => {
  const contact = {
    name: "Soroosh Sadeghi",
    phone: "+496947891890",
    email: "soroosh.sadeghi@somi.de",
  };

  const vcard = `BEGIN:VCARD\nVERSION:4.0\nFN:${contact.name}\nTEL;TYPE=work,voice:${contact.phone}\nEMAIL:${contact.email}\nEND:VCARD`;
  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);

  const newLink = document.createElement("a");
  newLink.download = `${contact.name}.vcf`;
  newLink.href = url;
  newLink.click();

  URL.revokeObjectURL(url);
};
</script>

<style scoped></style>
