import { defineStore } from "pinia";
import {
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc,
  query,
  orderBy,
  addDoc,
} from "firebase/firestore";
import { db } from "@/libs/firebase";

const notesCollections = collection(db, "notes");

export const useNoteStore = defineStore({
  id: "note",
  state: () => ({
    notes: [],
    loading: false,
  }),
  actions: {
    getAll() {
      this.loading = true;
      onSnapshot(query(notesCollections, orderBy("date", "desc")), (query) => {
        this.notes = [];
        query.forEach((doc) => {
          this.notes = [...this.notes, { id: doc.id, ...doc.data() }];
        });
        this.loading = false;
      });
    },
    get(id) {
      return this.notes.find((item) => item.id == id)?.body;
    },
    async store(body) {
      if (body.trim().length) {
        const date = new Date().getTime().toString();
        await addDoc(notesCollections, { body, date });
      }
    },
    async update(id, body) {
      if (body.trim().length) {
        await updateDoc(doc(notesCollections, id), { body });
      }
    },
    async remove(id) {
      await deleteDoc(doc(notesCollections, id));
    },
  },
});
