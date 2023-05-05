import {createClient} from '@sanity/client'

export function fetchBurger() {
    const PROJECT_ID = process.env.REACT_APP_API_PROJECT_ID;
    const DATASET = process.env.REACT_APP_API_DATASET;
    const client = createClient({
		projectId: PROJECT_ID,
		dataset: DATASET,
		useCdn: true,
		apiVersion: '2023-05-03',
	});

    async function getData() {
        //const data = await client.fetch('*[type == "radio"]')
        return {data: 111};
    }

    console.log(getData());
    return getData();
}