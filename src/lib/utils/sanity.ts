import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
	useCdn: false
});
