<template>
  <div>
    <NewNote />
    <div class="flex flex-col gap-4">
      <Loading v-if="state.loading" />
      <NoteBox
        v-for="item in state.notes.slice().reverse()"
        :key="item.id"
        :model="item"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useNoteStore } from '@/stores/notes';
import NoteBox from '@/components/notes/NoteBox.vue';
import NewNote from '@/components/notes/NewNote.vue';
import Loading from '@/components/common/Loading.vue';
const state = useNoteStore();

onMounted(() => {
  state.getAll();
});
</script>
