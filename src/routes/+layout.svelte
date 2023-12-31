<script>
  import { onMount } from "svelte";
  import { auth } from "$lib/firebase";
  import Toaster from "../lib/components/Toaster/index.svelte";
  import "../app.css";

  export const title = "Fajr Lions";

  // onMount(() => {
  //   const unsubscribe = auth.onAuthStateChanged(async (user) => {
  //     const currentPath = window.location.pathname;

  //     if (!user && currentPath !== "/") {
  //       window.location.href = "/";
  //       return;
  //     }

  //     if (user && currentPath === "/") {
  //       window.location.href = "/dashboard";
  //       return;
  //     }

  //     if (!user) return;
  //   });
  // });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Toaster />

<slot />
