<script lang="ts">
	export let data;
	const { greeting } = data.settings[0];
</script>

<h1 class="text-lg">{greeting}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
