<template>
  <div class="bg-white border rounded-lg shadow w-full overflow-hidden">
    <div class="p-5 pb-8 text-lg">{{ model.body }}</div>
    <div class="flex items-center border-t border-solid divide-x">
      <button
        @click="showEditModal = true"
        class="flex-1 py-3 text-sm hover:bg-slate-50 active:bg-slate-100 transition"
      >
        Edit
      </button>
      <button
        @click="showDeleteModal = true"
        class="flex-1 py-3 text-sm hover:bg-slate-50 active:bg-slate-100 transition text-red-500"
      >
        Delete
      </button>
    </div>
  </div>
  <NoteRemoveModal
    v-if="showDeleteModal"
    v-model="showDeleteModal"
    :noteId="model?.id"
  />
  <NoteEditModal
    v-if="showEditModal"
    v-model="showEditModal"
    :noteId="model?.id"
  />
</template>

<script setup>
import { ref } from "vue";
import NoteRemoveModal from "./NoteRemoveModal.vue";
import NoteEditModal from "./NoteEditModal.vue";

defineProps({
  model: {
    type: Object,
    default: {},
  },
});
const showDeleteModal = ref(false);
const showEditModal = ref(false);
</script>
