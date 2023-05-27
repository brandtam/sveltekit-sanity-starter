import type { LayoutServerLoad } from './$types';
import { client } from '$lib/utils/sanity';

export const load = (async () => {
	const data = await client.fetch(`*[_type == "settings"]`);

	if (data) {
		if (data.length === 0 || !data[0].greeting) {
			data[0].greeting =
				"You haven't added any content to Sanity yet. Visit /studio and add content to the Settings->Greeting";
		}
		return {
			settings: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}) satisfies LayoutServerLoad;
