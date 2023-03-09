import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    email: "",
    password: "",
    isLoggedIn: true,
    loading: false,
  }),
  getters: {
    getUser() {
      return {
        name: "Kazem",
        username: "k90mirzaei",
      };
    },
  },
  actions: {
    login() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
});
