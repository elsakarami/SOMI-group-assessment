<template>
  <div class="card-back">
    <div class="card-back__info">
      <h3 class="card-back__name">{{ name }}</h3>
      <p class="card-back__title">{{ title }}</p>
      <p class="card-back__position">{{ position }}</p>
    </div>
    <hr class="card-back__divider" />
    <div class="card-back__company-info">
      <h3 class="card-back__company-name ">
        {{ company }}
      </h3>
      <p class="card-back__group">{{ group }}</p>
      <div class="card-back__address" v-html="address"></div>
    </div>
    <hr class="card-back__divider" />
    <div class="card-back__contact-info">
      <div class="card-back__contact-item">
        <div class="card-back__icon">
          <img src="/images/phone_icon.svg" alt="">
        </div>
        <a class="card-back__contact-link" :href="`tel:+496947891890`">{{ landlinePhone }}</a>
      </div>
      <div class="card-back__contact-item">
        <div class="card-back__icon">
          <img  src="/images/mobile_icon.svg" alt="">
        </div>
        <a class="card-back__contact-link " :href="`tel:+4915110493695`">{{ mobilePhone }}</a>
      </div>
      <div class="card-back__contact-item">
        <div class="card-back__icon">
          <img  src="/images/email_icon.svg" alt="">
        </div>
        <a class="card-back__contact-link " :href="`mailto:${email}`">{{ email }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  title: string;
  position: string;
  company: string;
  group: string;
  landlinePhone: string;
  address: string;
  mobilePhone: string;
  email: string;
}

const props = defineProps<Props>();
</script>
