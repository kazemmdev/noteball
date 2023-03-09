import { defineStore } from "pinia";

const samples = [
  {
    id: 1,
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa laboriosam vero natus ut rerum quaerat, saepe praesentium tempore et hic velit odio nemo minus labore quam ullam quod architecto?",
  },
  {
    id: 2,
    body: "Lorem ipsum dolor adipisicing elit. Beatae ipsa laboriosam ut rerum quaerat, saepe praesentium tempore et hic velit odio nemo minus labore quam ullam quod architecto?",
  },
  {
    id: 3,
    body: "Beatae ipsa laboriosam vero natus ut rerum quaerat, saepe praesentium tempore et hic velit odio nemo minus labore quam ullam quod architecto?",
  },
];

export const useNoteStore = defineStore({
  id: "note",
  state: () => ({
    notes: samples,
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
  },
});
