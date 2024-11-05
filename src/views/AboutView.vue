<!-- components/AuthComponent.vue -->
<template>
  <div v-if="authStore.isUserLoggedIn">
    auth data
  </div>
  <div v-else>
    guest data
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();

onMounted(() => {
  authStore.checkLoginStatus();
});
</script>
