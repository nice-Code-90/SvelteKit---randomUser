export async function load({ fetch }) {
	const res = await fetch('api/users');

	const users = await res.json();

	return { users };
}
