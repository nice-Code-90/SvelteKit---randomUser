import { json } from '@sveltejs/kit';
export function GET() {
	const users = [
		{
			picture:
				'https://i0.wp.com/www.lifewaycenters.com/wp-content/uploads/2016/06/placeholder-150x150-1.png?fit=150%2C150&ssl=1',
			name: 'John Doe',
			email: 'john@someone.com',
			age: 40
		},
		{
			picture:
				'https://i0.wp.com/www.lifewaycenters.com/wp-content/uploads/2016/06/placeholder-150x150-1.png?fit=150%2C150&ssl=1',
			name: 'Jane Doe',
			email: 'jane@notexisting.com',
			age: 33
		},
		{
			picture:
				'https://i0.wp.com/www.lifewaycenters.com/wp-content/uploads/2016/06/placeholder-150x150-1.png?fit=150%2C150&ssl=1',
			name: 'Harry Potter',
			email: 'harry@hogwarts.com',
			age: 14
		}
	];

	return json(users);
}
