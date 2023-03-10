<template>
  <div class="container">
    <textarea
      :rows="4"
      v-autofocus
      v-model="body"
      class="w-full p-2 outline-none bg-transparent"
      placeholder="Add new note..."
    />
    <button class="button h-10 w-20" @click="saveNote">Save</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNoteStore } from "@/stores/notes";
import { vAutofocus } from "@/directives/vAutofocus";

const body = ref("");
const notes = useNoteStore();

const saveNote = () => {
  notes.store(body.value);
  body.value = "";
};
</script>

<style scoped>
.container {
  @apply p-3 bg-white rounded-lg transition mb-4 mt-2 border border-solid border-gray-100 shadow
   dark:border-cyan-900/40 dark:bg-cyan-900/30 dark:text-white;
}
</style>
