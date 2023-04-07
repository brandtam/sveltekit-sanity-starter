import { defineConfig } from 'sanity';
import { schemaTypes } from './schemas';
import { deskTool } from 'sanity/desk';

// Actions available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

// Document types that should only have a single instance
const singletonTypes = new Set(['settings']);

// Sanity configuration
export default defineConfig({
	basePath: '/studio',
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
	dataset: import.meta.env.VITE_SANITY_DATASET,
	title: import.meta.env.VITE_SANITY_PROJECT_TITLE,
	plugins: [
		deskTool({
			structure: (S) =>
				S.list()
					.title('Content')
					.items([
						// Set Singleton in Desk Tool
						S.listItem()
							.title('Settings')
							.id('settings')
							.child(S.document().schemaType('settings').documentId('settings')),
						// Regular document types
						S.documentTypeListItem('page').title('pages')
					])
		})
	],
	schema: {
		types: schemaTypes,
		// Special template for singleton documents
		templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
	},
	document: {
		// For singleton types, filter out the `create` action
		actions: (input, context) =>
			singletonTypes.has(context.schemaType)
				? input.filter(({ action }) => action && singletonActions.has(action))
				: input
	}
});
