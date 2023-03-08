<template>
  <teleport to="body">
    <div v-if="modelValue" class="container">
      <div class="backdrop" @click="$emit('update:modelValue', false)" />
      <div class="modal">
        <div class="relative h-8 flex items-center">
          <h2 class="font-bold">{{ title }}</h2>
          <button @click="$emit('update:modelValue', false)" class="close">
            ×
          </button>
        </div>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "No title specified!",
  },
});

const emit = defineEmits(["update:modelValue"]);

const EscapeCloseHandler = (e) => {
  if (e.key === "Escape") emit("update:modelValue", false);
  console.log(e.key, "from handler");
};

onMounted(() => {
  window.addEventListener("keydown", EscapeCloseHandler);
});
onUnmounted(() => {
  window.removeEventListener("keydown", EscapeCloseHandler);
});
</script>

<style scoped>
.container {
  @apply absolute inset-0 flex items-center justify-center;
}
.backdrop {
  @apply bg-gray-600/80 fixed h-screen w-screen;
}
.modal {
  @apply bg-white w-full max-w-[480px] h-fit inset-0 px-6 py-4 rounded-lg mx-2 z-10;
}
.close {
  @apply absolute h-8 w-8 right-0 top-0 rounded-full hover:bg-gray-200 transition-all text-xl hover:text-red-500;
}
</style>
