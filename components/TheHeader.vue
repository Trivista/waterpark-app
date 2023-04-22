<template>
  <div class="menu-container">
    <div class="top-line">
      <NuxtLink to="/main-page" class="logo">
        <p class="logo-title">{{ config.siteName }}</p>
      </NuxtLink>
    </div>
    <div class="header-contact-info">
      <p title="telephone" class="icon phone-number">
        Tel: <a :href="'tel:' + config.telephone">{{ config.telephone }}</a>
      </p>
    </div>
  </div>
  <nav class="nav">
    <ul class="nav-items">
      <NuxtLink to="/main-page" class="menu-item"> Home </NuxtLink>
      |
      <NuxtLink to="/directory-page" class="menu-item"> Directory </NuxtLink>
      |
      <NuxtLink to="/login-page" class="menu-item"> Login </NuxtLink>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const { public: config } = useRuntimeConfig();
</script>

<style scoped>
header {
  margin-top: auto;
  background-color: lightblue;
}
.header-contact-info {
  display: flex;
  justify-content: space-between;
}
</style>
