<script>
	let title = $state('Welcome to SvelteKit world. This is dynamic');
	let text = $state('This is my first component');
</script>

<h1>{title}</h1>
<h2 onclick={() => alert('you clicked the message')}>{text}</h2>

<style>
</style>
