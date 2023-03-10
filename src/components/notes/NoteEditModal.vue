<template>
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
import { onMounted, reactive, watch } from "vue";
import { useNoteStore } from "@/stores/notes";
import { vAutofocus } from "@/directives/vAutofocus";
import Modal from "@/components/common/Modal.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: Number,
    default: -1,
  },
});
const emit = defineEmits(["update:modelValue"]);

const notes = useNoteStore();

const modal = reactive({ body: "", open: false });
modal.body = notes.getBody(props.noteId);

onMounted(() => {
  modal.open = true;
});

const saveNote = () => {
  notes.setBody(props.noteId, modal.body);
  emit("update:modelValue", false);
};

watch(modal, () => {
  if (!modal.open) {
    emit("update:modelValue", false);
  }
});
</script>
