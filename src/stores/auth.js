import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../libs/firebase";
import { useNoteStore } from "./notes";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: {},
    isLoggedIn: false,
  }),
  actions: {
    async init() {
      const noteStore = useNoteStore();
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.user.username = user.email.split("@")[0];
          this.isLoggedIn = true;
          noteStore.init(user.uid);
          this.router.push("/");
        } else {
          this.isLoggedIn = false;
          noteStore.clear()
          this.router.replace("/login");
        }
      });
    },
    async register(email, password) {
      await createUserWithEmailAndPassword(auth, email, password).catch((e) => {
        console.log(e.message);
      });
    },
    async login(email, password) {
      await signInWithEmailAndPassword(auth, email, password).catch((e) => {
        console.log(e.message);
      });
    },
    async logout() {
      await signOut(auth);
    },
  },
});
