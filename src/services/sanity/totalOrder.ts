import { nanoid } from '@reduxjs/toolkit';
import { TotalOrder } from '../../features/order/totalOrderSlice';
import { PROJECT_ID } from './publicData';
import { DATASET } from './publicData';

export async function sendOrder(totalOrder: TotalOrder) {
    const tokenWithWriteAccess = process.env.REACT_APP_TOKEN;
	const mutations = [
		{
			create: {
				_type: 'orders',
				totalOrderId: nanoid(),
				address: totalOrder.address,
				phone: totalOrder.phone,
				orderContents: totalOrder.orderContents,
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
		//.then((response) => response.json())
		//.catch((error) => console.error(error));
}
