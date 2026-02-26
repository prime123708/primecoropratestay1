import {
	type RouteConfigEntry,
	index,
	route,
} from '@react-router/dev/routes';
function generateRoutesFromGlob(): RouteConfigEntry[] {
	const modules = import.meta.glob('./**/page.jsx', {});
	const routes: RouteConfigEntry[] = [];

	for (const componentPath of Object.keys(modules)) {
		const basePath = componentPath
			.replace(/^\.\//, '')
			.replace(/(?:^|\/)page\.jsx$/, '');

		if (basePath === '') {
			routes.push(index(componentPath));
			continue;
		}

		const segments = basePath.split('/');
		const processedSegments = segments.map((segment) => {
			if (segment.startsWith('[') && segment.endsWith(']')) {
				// Optional param [[id]] -> :id?
				if (segment.startsWith('[[') && segment.endsWith(']]')) {
					return `:${segment.slice(2, -2)}?`;
				}
				const inner = segment.slice(1, -1);
				// Catch-all [...ids] -> *
				if (inner.startsWith('...')) {
					return '*';
				}
				// Regular param [id] -> :id
				return `:${inner}`;
			}
			return segment;
		});

		const routePath = processedSegments.join('/');
		routes.push(route(routePath, componentPath));
	}

	return routes;
}
if (import.meta.env.DEV) {
	import.meta.glob('./**/page.jsx', {});
	if (import.meta.hot) {
		import.meta.hot.accept((newSelf) => {
			import.meta.hot?.invalidate();
		});
	}
}
const notFound = route('*', './__create/not-found.tsx');
const routes = [...generateRoutesFromGlob(), notFound];

export default routes;
