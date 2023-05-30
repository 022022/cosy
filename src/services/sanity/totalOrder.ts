import { TotalOrder } from '../../features/order/totalOrderSlice';
import { PROJECT_ID } from './publicData';
import { DATASET } from './publicData';

export async function sendOrder(totalOrder: TotalOrder) {
	const date = new Date();
	const orderDate = date.toISOString();

	const mutations = [
		{
			create: {
				_type: 'orders',
				orderDate,
				...totalOrder,
			},
		},
	];

    const url = `https://${PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${DATASET}`;

	await fetch(
		`/.netlify/functions/secure-fetch?url=${url}`,
		{
			method: 'post',
			body: JSON.stringify({ mutations }),
		}
	);
}
