<template>
  <div>
    <NewNote />
    <div class="flex flex-col gap-4">
      <NoteBox
        v-for="item in state.notes.slice().reverse()"
        :key="item.id"
        :model="item"
      />
    </div>
  </div>
</template>

<script setup>
import { useNoteStore } from "@/store/notes";
import NoteBox from "@/components/notes/NoteBox.vue";
import NewNote from "@/components/notes/NewNote.vue";
const state = useNoteStore();
</script>
