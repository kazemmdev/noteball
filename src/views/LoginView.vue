<template>
  <div
    class="w-full max-w-md pt-10 mx-auto border shadow-md p-8 rounded-lg mt-10"
  >
    <h1 class="text-lg font-semibold mb-4">Welcome Back!</h1>
    <form class="flex flex-col gap-4" @submit.prevent="auth.login">
      <input
        v-autofocus
        type="email"
        v-model="auth.email"
        placeholder="Enter your email"
        class="p-3 outline-none border-2 border-solid border-gray-100 focus:border-blue-500 rounded-lg transition"
      />
      <input
        type="password"
        v-model="auth.password"
        placeholder="Enter your password"
        class="p-3 outline-none border-2 border-solid border-gray-100 focus:border-blue-500 rounded-lg transition"
      />
      <div>
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
import { useAuthStore } from "../store/auth";
import { vAutofocus } from "@/directives/vAutofocus";

const auth = useAuthStore();
</script>
