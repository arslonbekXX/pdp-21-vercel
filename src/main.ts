// @ts-ignore
import 'bootstrap/dist/css/bootstrap.min.css';
import { rootElement } from './elements';
import type { Path } from './types';
import { LOGICS, PAGES, REDIRECTS } from './constants';

function getRoute() {
	const path = window.location.pathname as Path;
	const pathname = REDIRECTS[path];

	if (!pathname) {
		window.location.pathname = '/404';
		return;
	}

	const page = PAGES[pathname];

	return { page, pathname };
}

function init() {
	const route = getRoute();

	if (!route) return;

	rootElement.innerHTML = route.page;
	const logicFn = LOGICS[route.pathname];
	logicFn();
}

window.addEventListener('load', init);
