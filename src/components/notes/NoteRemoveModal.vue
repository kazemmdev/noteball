<template>
  <Modal title="Remove?" v-model="modal.open">
    <div class="pt-2 pb-4">
      <p>Are you want to remove this note?</p>
    </div>
    <button class="button h-10 w-20" @click="notes.remove(noteId)">Yes</button>
  </Modal>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useNoteStore } from "@/stores/notes";
import Modal from "@/components/common/Modal.vue";

defineProps({
  noteId: {
    type: Number,
    default: -1,
  },
});

const notes = useNoteStore();

const modal = reactive({ open: false });

onMounted(() => {
  modal.open = true;
});
</script>
