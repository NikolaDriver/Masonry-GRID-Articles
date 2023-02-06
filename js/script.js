"use strict"

function imagesInit() {
	const images = document.querySelectorAll('.article__image');
	if (images.length) {
		images.forEach(image => {
			const imageItem = image.querySelector('img');
			const padding = imageItem.offsetHeight / imageItem.offsetWidth * 100;
			image.style.paddingBottom = `${padding}%`;
			imageItem.classList.add('init');
		})
	}
}

function gridInit() {
	const items = document.querySelector('.articles__items');
	const itemsGrid = new Isotope(items, {
		itemSelector: '.article',
		masonry: {
			fitWidth: true,
			gutter: 20
		}
	});
}

window.addEventListener('load', windowLoad);

function windowLoad() {
	imagesInit();
	gridInit();
}