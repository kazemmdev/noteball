<template>
  <Navbar />
  <main
    class="w-full min-h-screen bg-slate-100 pt-14 dark:bg-slate-900 transition"
  >
    <div class="w-full max-w-2xl mx-auto flex flex-col pt-5 px-4 md:px-0">
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/common/Navbar.vue';
import { useAuthStore } from './stores/auth';
import { onMounted } from 'vue';

const authState = useAuthStore();
onMounted(() => authState.init());
</script>
