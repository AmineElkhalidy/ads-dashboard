<script>
  let email = "";

  function navigateAndRefresh() {
    const targetUrl = "/";

    // Navigate to the URL and force a page refresh
    window.location.href = targetUrl;
  }

  export let title = "Forgot password";
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2
      class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
    >
      Forgot Password
    </h2>
    <p class="text-center text-gray-500">
      Remember your password? <button
        on:click={navigateAndRefresh}
        class="text-indigo-600 hover:text-indigo-500 inline">Login here</button
      >
    </p>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] mx-4">
    <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <form class="space-y-6">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              bind:value={email}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Reset Password</button
          >
        </div>
      </form>
    </div>
  </div>
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
