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
      if (body.trim().length) {
        const index = this.notes.findIndex((item) => item.id == id);
      this.notes[index] = { id, body };
      }
    },
    storeNote(body) {
      if (body.trim().length)
        this.notes = [...this.notes, { id: this.notes.length, body }];
    },
  },
});
