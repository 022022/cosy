import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
    const tokenWithWriteAccess = process.env.REACT_APP_TOKEN;

    if (event.queryStringParameters?.url){
		await fetch(
			event.queryStringParameters?.url,
			{
				method: event.httpMethod,
				body: event.body,
				headers: {
					'Content-type': 'application/json',
					Authorization: `Bearer ${tokenWithWriteAccess}`,
				},
			}
		);
        return {
			statusCode: 200,
			body: JSON.stringify({ event }),
		};
    }

    return {
		statusCode: 404,
        body: 'error: no url'
	};

}
