import { defineStore } from "pinia";

export const useNoteStore = defineStore({
  id: "note",
  state: () => ({
    notes: [],
    loading: false,
  }),
  actions: {
    remove(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
    getBody(id) {
      return this.notes.find((item) => item.id == id)?.body;
    },
    setBody(id, body) {
      const index = this.notes.findIndex((item) => item.id == id);
      this.notes[index] = { id, body };
    },
    storeNote(body) {
      this.notes.push({ id: this.notes.length, body });
    },
  },
});
