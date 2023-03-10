import { defineStore } from "pinia";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "@/libs/firebase";

export const useNoteStore = defineStore({
  id: "note",
  state: () => ({
    notes: [],
    loading: false,
  }),
  actions: {
    getAll() {
      this.loading = true;
      onSnapshot(collection(db, "notes"), (query) => {
        this.notes = [];
        query.forEach((doc) => {
          this.notes = [...this.notes, { id: doc.id, body: doc.data().body }];
        });
        this.loading = false;
      });
    },
    get(id) {
      return this.notes.find((item) => item.id == id)?.body;
    },
    stote(body) {
      if (body.trim().length)
        this.notes = [...this.notes, { id: this.notes.length, body }];
    },
    update(id, body) {
      if (body.trim().length) {
        const index = this.notes.findIndex((item) => item.id == id);
        this.notes[index] = { id, body };
      }
    },
    remove(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
});
