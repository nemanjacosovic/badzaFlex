const bflexGrid = document.querySelector('.bflex');
const pxSize = document.querySelector('.px-size');

function getSize() {
	const bflexGridWidth = bflexGrid.offsetWidth;
	const bflexGridHeight = bflexGrid.offsetHeight;

	pxSize.innerText = `${bflexGridWidth}x${bflexGridHeight}`;
}

getSize();

window.addEventListener('resize', function () {
	getSize();
});
