// source goes here

const app = function() {

		const input = document.getElementById('myNumber');
		input.addEventListener('change', (event) => {
			const result = document.getElementById('result');
			result.textContent = event.target.value;
			let rows = result.textContent;
			console.log('rows--------', rows )

	const clickableGrid = callback => {
		let i = 0;
		// const rows = 2;
		const cols = 1;
		const grid = document.createElement('table');
		grid.className = 'grid';

		for (let r = 0; r < rows; ++r) {
			const tr = grid.appendChild(document.createElement('tr'));
			// console.log('tr', tr.rowIndex);
			for (let c = 0; c < cols; ++c) {
				const cell = tr.appendChild(document.createElement('td'));
				// console.log('td', cell.cellIndex);
				cell.innerHTML = ++i;
				cell.addEventListener(
					'click',
					(function(el, i) {
						return function() {
							callback(el, i);
						};
					})(cell, i),
					false
				);
			}
		}
		return grid;
	}
	// table
	let lastClicked;


	const grid = clickableGrid(function(el, i) {
		// multiples
		const n = 144;
		const clickedNum = i;

		calculations(n, clickedNum, el);
	});

	const calculations = (n, clickedNum, el) => {
		// array of all numbers
		let arrOfNums = [];
		for (let m = clickedNum; m <= n; m++) {
			arrOfNums.push(m);
		}

		// finding multiples
	const multiplesOf = numbers => {
			// change to array (so that we can store multiple numbers - not just one multiple)
			let multiples = numbers.filter(number => {
				if (number % clickedNum === 0) {
					return number;
				}
			});
			
			return multiples;
		}

		console.log(multiplesOf(arrOfNums, clickedNum));
		const myArr = multiplesOf(arrOfNums, clickedNum);

		const addClassToMultiples = () => {
			let tds = document.querySelectorAll('.grid td');
			//iterate over each td
			for (let i = 0; i < n; i++) {
				const text = tds[i].innerText;
				tds[i].classList.remove('multiples');
				myArr.forEach(function(value) {
					if (text === value.toString()) {
						//add your class to the element containing this text
						console.log('tds[i]', tds[i]);
						tds[i].classList.add('multiples');
						// tds[i].classList.toggle('multiples');
						tds[clickedNum - 1].classList.remove('multiples');
					}
				});
			}
		}

		el.className = 'clicked multiples';
		if (lastClicked) {
			lastClicked.className = '';
		}
		lastClicked = el;
		console.log('lastClicked------------', lastClicked);

		if (el.classList.contains('clicked')) {
			addClassToMultiples();
		} else {
			let tds = document.querySelectorAll('.grid td');
			//iterate over each td
			for (let i = 0; i < n; i++) {
				tds[i].classList.remove('multiples');
			}
		}
	}
	document.body.appendChild(grid);
}, false)}

export default app;
