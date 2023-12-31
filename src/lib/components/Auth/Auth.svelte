<script>
  import { switcher } from "$lib/store";
  import Login from "./Login.svelte";
  import SignUp from "./SignUp.svelte";

  /**
   * @type {boolean}
   */
  let isSignUp;
  switcher.subscribe((value) => (isSignUp = value.register));
</script>

{#if isSignUp}
  <SignUp />
{:else}
  <Login />
{/if}
