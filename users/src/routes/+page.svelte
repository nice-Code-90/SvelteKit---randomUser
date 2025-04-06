<script>
	let title = $state('Welcome to svelteKit world');
	let text = $state('This is my first project');

	function update() {
		setTimeout(() => {
			title = title + 'This is reactive.';
		}, 4000);
	}
	update();
</script>

<h1>{title}</h1>
<h2
	onclick={() => {
		alert('clicked');
	}}
>
	{text}
</h2>

<style>
</style>
