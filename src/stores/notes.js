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

let notesCollections;
let notesSubscriber = null;

export const useNoteStore = defineStore({
  id: "note",
  state: () => ({
    notes: [],
    loading: true,
  }),
  actions: {
    init(uid) {
      notesCollections = collection(db, "users", uid, "notes");
    },
    getAll() {
      this.loading = true;
      if (notesSubscriber) notesSubscriber(); // unsubscribe from any active session
      notesSubscriber = onSnapshot(
        query(notesCollections, orderBy("date", "desc")),
        (query) => {
          this.notes = [];
          query.forEach((doc) => {
            this.notes = [...this.notes, { id: doc.id, ...doc.data() }];
          });
          this.loading = false;
        }
      );
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
    clear() {
      this.notes = [];
    },
  },
});
