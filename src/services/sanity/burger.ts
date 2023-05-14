import {createClient} from '@sanity/client'

export const PROJECT_ID = 'er1cil54';
export const DATASET = 'production';

export async function fetchBurger() {
    const client = createClient({
		projectId: PROJECT_ID,
		dataset: DATASET,
		useCdn: true,
		apiVersion: '2023-05-03',
	});

	const data = await client.fetch('*[_type == "category"]');
	return data;
}