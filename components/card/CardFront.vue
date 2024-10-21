<template>
  <div class="card-front">
    <div class="card-front__details">
      <h3 class="card-front__title">{{ title }}</h3>
      <h2 class="card-front__name">{{ name }}</h2>
      <h3 class="card-front__position">{{ position }}</h3>
    </div>
    <img
      src="/images/businesscard_profile.webp"
      alt="Profile Image"
      class="card-front__image"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  title: string;
  position: string;
}

const props = defineProps<Props>();
</script>
