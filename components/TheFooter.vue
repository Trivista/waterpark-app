<template>
  <footer>
    <div class="footer-content">
      <span v-if="config.siteEnvironment">{{ config.siteEnvironment }}</span>
      <div class="links">
        &copy;{{ appStore.copyrightText }} - All Rights Reserved
      </div>
      <div>
        Tel:
        <a :href="'tel:' + config.telephone">{{ config.telephone }}</a>
        >
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { public: config } = useRuntimeConfig();
// onMounted(() => {
//   appStore.updateCookieConsent(true);
// });
</script>

<style scoped>
footer {
  margin-top: auto;
  background-color: darkgrey;
}
.footer-content {
  display: flex;
  justify-content: space-between;
}
</style>
