/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

store(
	'core/gallery',
	{
		callbacks: {
			init() {
				const { ref } = getElement();
				const ctx = getContext();
				ctx.galleryRef = ref;
			},
		},
	},
	{
		lock: false,
	}
);
