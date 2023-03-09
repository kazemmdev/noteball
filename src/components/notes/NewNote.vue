<template>
  <div
    class="p-3 bg-white rounded-lg transition mb-4 mt-2 border border-solid border-gray-100 focus:border-blue-500 shadow"
  >
    <textarea
      :rows="4"
      v-autofocus
      v-model="body"
      class="w-full p-2 outline-none"
      placeholder="Add new note..."
    />
    <button class="button h-10 w-20" @click="saveNote">Save</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNoteStore } from "@/store/notes";
import { vAutofocus } from "@/directives/vAutofocus";

const body = ref("");
const notes = useNoteStore();

const saveNote = () => {
  notes.storeNote(body.value);
  body.value = "";
};
</script>
