<script>
	import UserProfile from '$lib/Components/UserProfile.svelte';

	const { data } = $props();
	const { users } = data;
	console.log('users received in page: ', users);
</script>

{#each users as user}
	<UserProfile name={user.name} email={user.email} age={user.age}></UserProfile>
{/each}
