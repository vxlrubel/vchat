// stores/authStore.js
import { defineStore } from 'pinia';
import { isUserLogin } from './isUserLogin';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isUserLoggedIn: false,
  }),

  actions: {
    async checkLoginStatus() {
      this.isUserLoggedIn = await isUserLogin();
    }
  }
});
