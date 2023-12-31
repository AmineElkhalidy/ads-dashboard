import { writable } from "svelte/store";
import { goto } from "$app/navigation";
import { auth, googleProvider, db } from "$lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";

// Auth Store
export const authStore = writable({
  user: null,
  loading: true,
  data: {},
});

// Switcher store between Login & Sign up
export const switcher = writable({
  register: false,
});

export const authHandlers = {
  signup: async (
    name: string,
    email: string,
    password: string,
    telephone: string,
    profileImageUrl: string,
    dateCreated: Date,
    participatingCampaigns: {}[],
    managedCampaigns: {}[]
  ) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { user } = response;
      await setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        name,
        email,
        telephone,
        profileImageUrl,
        dateCreated,
        participatingCampaigns,
        managedCampaigns,
      });
      authStore.update((curr) => {
        return {
          ...curr,
          data: {
            name,
            email,
            telephone,
            profileImageUrl,
            participatingCampaigns,
            managedCampaigns,
          },
          loading: false,
        };
      });
      goto("/dashboard");
    } catch (err: any) {
      console.log(err.message);
    }
  },
  login: async (email: string, password: string) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      goto("/dashboard");
    } catch (err: any) {
      console.log(err.message);
    }
  },
  logout: async () => {
    await signOut(auth);
    goto("/");
  },
  loginWithGoogle: async () => {
    const reponse = await signInWithPopup(auth, googleProvider);
    const authUser = reponse.user;

    authStore.update((value) => {
      return {
        ...value,
      };
    });
    goto("/dashboard");
  },
};
