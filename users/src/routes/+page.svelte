<script>
	import UserProfile from '$lib/Components/UserProfile.svelte';

	const { data } = $props();
	const { users } = data;
	console.log('users received in page: ', users);
</script>

{#each users.results as user}
	<UserProfile src={user.picture.large} name={user.name.first} email={user.email} age={user.dob.age}
	></UserProfile>
{/each}
