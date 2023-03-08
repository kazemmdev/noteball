<template>
  <div class="w-full hmin-screen max-w-2xl mx-auto flex flex-col">
    <nav class="w-full text-sm text-center mt-2 mb-4 flex items-center gap-4">
      <div
        class="flex items-center gap-2 bg-indigo-100/70 py-1 px-2 rounded-full text-xs text-gray-800"
      >
        {{ userData.name }} @{{ userData.username }}
        <span
          class="w-2 h-2 bg-gray-400 block rounded-full"
          :class="isOnline && 'bg-green-600'"
        />
      </div>
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
import { useOnline } from "@vueuse/core";
const userData = reactive({ name: "Kazem", username: "k90mirzaei" });
provide("userData", userData);

const isOnline = useOnline();
</script>
