<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  export let title = "Sponsors";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<slot />
