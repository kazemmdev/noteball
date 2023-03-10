<template>
  <div class="container">
    <h1 class="text-lg font-semibold mb-4">Welcome Back!</h1>
    <form class="flex flex-col gap-4" @submit.prevent="auth.login">
      <input
        v-autofocus
        type="email"
        v-model="auth.email"
        placeholder="Enter your email"
        class="input"
      />
      <input
        type="password"
        v-model="auth.password"
        placeholder="Enter your password"
        class="input"
      />
      <div class="flex items-center justify-between">
        <RouterLink to="/register" class="text-sm dark:text-white/50"
          >Don't have an account?</RouterLink
        >
        <button
          type="submit"
          class="button h-10 w-20"
          :class="auth.loading && 'opacity-60 pointer-events-none'"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { vAutofocus } from "@/directives/vAutofocus";

const auth = useAuthStore();
</script>

<style scoped>
.container {
  @apply w-full max-w-md pt-10 mx-auto border shadow-md p-8 rounded-lg mt-10 dark:border-cyan-900/40 dark:bg-cyan-900/30 dark:text-white bg-white;
}
.input {
  @apply p-3 outline-none border-2 border-solid border-gray-100 focus:border-blue-500 rounded-lg transition dark:border-cyan-900/40 dark:bg-cyan-900/30;
}
</style>
