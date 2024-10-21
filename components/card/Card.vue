<template>
  <div
    ref="cardContainer"
    class="card-container"
    @click="flipCard"
  >
    <div
      ref="card"
      class="card-container__card"
      :class="{ 'card-container__card--flipped': isFlipped }"
    >
      <div class="card-container__face card-container__face--front">
        <CardFront   
          :name="name"
          :title="title"
          :position="position"
        ></CardFront>
      </div>
      <div class="card-container__face card-container__face--back">
        <CardBack
          :name="name"
          :title="title"
          :position="position"
          :company="company"
          :group="group"
          :landlinePhone="landlinePhone"
          :address="address"
          :mobilePhone="mobilePhone"
          :email="email"
        ></CardBack>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isFlipped = ref(false);

const props = defineProps<{
  name: string;
  title: string;
  position:string;
  company: string;
  group:string;
  address: string;
  landlinePhone:string;
  mobilePhone: string;
  email: string;
}>();

const flipCard = () => {
  isFlipped.value = !isFlipped.value;
};
</script>

<style scoped>

</style>
