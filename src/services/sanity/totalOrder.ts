import { TotalOrder } from '../../features/order/totalOrderSlice';
import { PROJECT_ID } from './publicData';
import { DATASET } from './publicData';

export async function sendOrder(totalOrder: TotalOrder) {
    const tokenWithWriteAccess = process.env.REACT_APP_TOKEN;

    const date = new Date();
    const orderDate = date.toISOString();

	const mutations = [
		{
			create: {
				_type: 'orders',
                orderDate,
                ...totalOrder
			},
		},
	];
	await fetch(
		`https://${PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${DATASET}`,
		{
			method: 'post',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${tokenWithWriteAccess}`,
			},
			body: JSON.stringify({ mutations }),
		}
	)
}
