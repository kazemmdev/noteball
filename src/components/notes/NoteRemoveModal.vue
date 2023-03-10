<template>
  <button
    @click="showModal = true"
    class="flex-1 py-3 text-sm hover:bg-slate-50 active:bg-slate-100 transition text-red-500"
  >
    Delete
  </button>
  <Modal title="Remove?" v-model="showModal">
    <div class="pt-2 pb-4">
      <p>Are you want to remove this note?</p>
    </div>
    <button class="button h-10 w-20" @click="notes.remove(noteId)">Yes</button>
  </Modal>
</template>

<script setup>
import { ref } from "vue";
import { useNoteStore } from "@/stores/notes";
import Modal from "@/components/common/Modal.vue";

defineProps({ noteId: -1 });

const notes = useNoteStore();
const showModal = ref(false);
</script>
