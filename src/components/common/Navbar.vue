<template>
  <nav class="navbar">
    <div class="nav-inner">
      <div class="flex items-center gap-4">
        <RouterLink to="/" class="nav-link" active-class="nav-link-active"
          >Notes</RouterLink
        >
        <RouterLink to="/about" class="nav-link" active-class="nav-link-active"
          >About</RouterLink
        >
      </div>
      <template v-if="auth.isLoggedIn">
        <div class="flex gap-1">
          <DarkToggler />
          <div class="nav-user">
            @{{ auth.getUser.username }}
            <span
              class="w-2 h-2 bg-gray-400 block rounded-full"
              :class="isOnline && 'bg-green-600'"
            />
          </div>
        </div>
      </template>
      <template v-else>
        <RouterLink to="/login" class="nav-link" active-class="nav-link-active"
          >Login</RouterLink
        >
      </template>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useOnline } from "@vueuse/core";
import { useAuthStore } from "@/stores/auth";
import DarkToggler from "@/components/common/DarkToggler.vue";
const isOnline = useOnline();
const auth = useAuthStore();
</script>

<style scoped>
.navbar {
  @apply fixed flex items-center inset-x-0 top-0 w-full h-[54px] px-4 md:px-0 bg-white shadow-sm dark:bg-slate-800;
}
.nav-inner {
  @apply w-full flex items-center justify-between gap-4 max-w-2xl mx-auto;
}
.nav-link {
  @apply text-sm text-center dark:text-white/30 active:text-green-500 hover:text-green-700  transition-all;
}
.nav-link-active {
  @apply bg-green-200/40 text-green-600 dark:text-green-600 px-2 rounded-full dark:bg-green-200/10;
}
.nav-user {
  @apply flex items-center gap-2 bg-indigo-100/70 py-1 px-2 rounded-full text-xs text-gray-800 dark:bg-indigo-100/10 dark:text-gray-200;
}
</style>
