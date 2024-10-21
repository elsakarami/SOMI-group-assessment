<template>
  <div class="page">
    <Header></Header>
    <slot />
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";
const components = {
  Header,
  Footer,
};
</script>

<style lang="scss">
.gradient-bg {
  min-height: 100vh;
}
</style>
