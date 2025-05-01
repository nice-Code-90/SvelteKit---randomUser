<script>
	let showAge = $state(true);
	let data = $props();

	function toggleAge() {
		showAge = !showAge;
	}

	import { fly } from 'svelte/transition';
</script>

<div class="contact-card">
	<img src={data.src} />

	<div class="user-details">
		<p>Name: {data.name}</p>
		<p>Email: {data.email}</p>
		<button onclick={toggleAge}>
			{showAge ? 'Hide Age' : 'Show Age'}
		</button>
		{#if showAge}
			<p transition:fly={{ duration: 300 }}>Age: {data.age}</p>
		{/if}
	</div>
</div>

<style>
	.contact-card {
		display: flex;
		padding: 10px;
		color: #ffffff;
		background-color: rgb(42, 84, 104);
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		box-shadow: 10px 10px 25px -16px rgba(0, 0, 0, 0.75);
		border-radius: 10px;
		max-width: 500px;
		max-height: 125px;
		margin-bottom: 10px;
	}

	.contact-card p {
		margin-left: 10px;
		margin-top: 0;
	}

	button {
		margin-left: 10px;
		margin-bottom: 10px;
	}
</style>
