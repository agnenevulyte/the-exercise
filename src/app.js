// source goes here
const app = function() {

	const clickableGrid = callback => {
		let i = 0;
		let rows;
		let cols;
		const mobileWidth = 768;
		const ipadWidth = 1024;
		const grid = document.createElement('table');
		grid.className = 'grid';
		if (window.innerWidth <= mobileWidth) {
			rows = 12;
			// console.log(rows);
			cols = 1;
		}
		if (mobileWidth < window.innerWidth <= ipadWidth) {
			rows = 6;
			// console.log(rows);
			cols = 2;
		}
		if (window.innerWidth > ipadWidth) {
			rows = 4;
			// console.log(rows);
			cols = 3;
		}

		// if (window.matchMedia("(max-width: 1000px)").matches) {
		// 	rows = 6;
		// 	cols = 2;
		// 	console.log(rows)
		// 	} else {
		// 	rows = 4;
		// 	cols = 3;
		// 	}
		// }
		// window.onresize = getDimensions;

		for (let r = 0; r < rows; ++r) {
			const tr = grid.appendChild(document.createElement('tr'));
			// console.log('tr', tr.rowIndex);
			for (let c = 0; c < cols; ++c) {
				const cell = tr.appendChild(document.createElement('td'));
				// console.log('td', cell.cellIndex);
				cell.innerHTML = ++i;
				cell.addEventListener(
					'click',
					(function(el, r, c, i) {
						return function() {
							callback(el, r, c, i);
						};
					})(cell, r, c, i),
					false
				);
			}
		}
		return grid;
	}
	// table
	let lastClicked;

	const grid = clickableGrid(function(el, row, col, i) {
		// multiples
		const n = 12;
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
	const multiplesOf = (numbers, number) => {
			// add second argument
			let multiples = []; // change to array (so that we can store multiple numbers - not just one multiple)
			for (let j = 0; j < numbers.length; j++) {
				if (numbers[j] % number === 0) {
					// divide by the number
					multiples.push(numbers[j]); // add the current multiple found to the multiples array
				}
			}
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

};

export default app;
