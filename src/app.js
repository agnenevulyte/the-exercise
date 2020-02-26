// source goes here
import clickableGrid from './clickableGrid';
import calculations from './calculations';

const app = function() {
	// get the value from the result, and add as many rows
	const input = document.getElementById('myNumber');
	input.addEventListener('change', (event) => {
		const result = document.getElementById('result');
		result.textContent = event.target.value;
		let rows = result.textContent;
		// console.log('rows--------', rows )

	// draw the table
	const grid = clickableGrid(rows, function(el, i) {
		const clickedNum = i;
		calculations(rows, clickedNum, el);
	});

	// render the table in the front end
	document.body.appendChild(grid);
}, false)}

export default app;
