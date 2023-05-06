import {createClient} from '@sanity/client'

export async function fetchBurger() {
    const PROJECT_ID = process.env.REACT_APP_API_PROJECT_ID;
    const DATASET = process.env.REACT_APP_API_DATASET;
    const client = createClient({
		projectId: PROJECT_ID,
		dataset: DATASET,
		useCdn: true,
		apiVersion: '2023-05-03',
	});

	const data = await client.fetch('*[_type == "category"]');
	return data;
}