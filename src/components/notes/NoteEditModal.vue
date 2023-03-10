<template>
  <button
    @click="modal.open = true"
    class="flex-1 py-3 text-sm hover:bg-slate-50 active:bg-slate-100 transition"
  >
    Edit
  </button>
  <Modal title="Edit the note" v-model="modal.open">
    <textarea
      :rows="4"
      v-autofocus
      v-model="modal.body"
      class="w-full p-3 outline-none border-2 border-solid border-gray-100 focus:border-blue-500 rounded-lg transition mb-4 mt-2"
    />
    <button class="button h-10 w-20" @click="saveNote">Save</button>
  </Modal>
</template>

<script setup>
import { reactive } from "vue";
import { useNoteStore } from "@/stores/notes";
import { vAutofocus } from "@/directives/vAutofocus";
import Modal from "@/components/common/Modal.vue";

const props = defineProps({ noteId: -1 });

const notes = useNoteStore();

const modal = reactive({
  body: notes.get(props.noteId),
  open: false,
});

const saveNote = () => {
  notes.update(props.noteId, modal.body);
  modal.open = false;
};
</script>
