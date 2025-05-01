export async function load({ fetch }) {
	const res = await fetch('https://randomuser.me/api/?results=3');

	const users = await res.json();

	return { users };
}
