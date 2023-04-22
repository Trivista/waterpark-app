<template>
  <div class="mainLayout">
    <TheHeader />
    <!-- CookieConsent: {{ appStore.cookieConsent }} -->
    <section class="main-container">
      <slot />
    </section>
    <TheFooter />
    <!-- <CookieControl /> -->
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/app";
const appStore = useAppStore();
// onMounted(() => {
//   appStore.updateCookieConsent(true);
// });
</script>

<style scoped>
.mainLayout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
