<template>
  <div class="w-full hmin-screen max-w-2xl mx-auto flex flex-col">
    <nav class="w-full text-sm text-center mt-2 mb-4 flex gap-4">
      <RouterLink
        to="/"
        class="active:text-green-500 hover:text-green-700 transition-all"
        active-class="bg-green-200 text-green-600 px-2 rounded-full"
        >Home</RouterLink
      >
      <RouterLink
        to="/about"
        class="active:text-green-500 hover:text-green-700 transition-all"
        active-class="bg-green-200 text-green-600 px-2 rounded-full"
        >About</RouterLink
      >
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { provide, reactive } from "vue";
import { RouterLink, RouterView } from "vue-router";

const userData = reactive({ name: "Kazem", username: "k90mirzaei" });
provide('userData', userData);
</script>
