<template>
  <div class="bg-white border rounded-lg shadow w-full overflow-hidden">
    <div class="p-5 pb-8 text-lg">{{ model.body }}</div>
    <div class="flex justify-start px-5 py-3">
      <span class="text-sm text-gray-500">{{ date }}</span>
    </div>
    <div class="flex items-center border-t border-solid divide-x">
      <NoteEditModal :noteId="model?.id" />
      <NoteRemoveModal :noteId="model?.id" />
    </div>
  </div>
</template>

<script setup>
import NoteRemoveModal from "./NoteRemoveModal.vue";
import NoteEditModal from "./NoteEditModal.vue";
import { computed } from "vue";
import { useDateFormat } from "@vueuse/core";

const props = defineProps({
  model: {
    type: Object,
    default: {},
  },
});

const date = computed(() => {
  const date = new Date(parseInt(props.model?.date));
  const formated = useDateFormat(date, "YYYY-MM-DD");

  return formated.value;
});
</script>
