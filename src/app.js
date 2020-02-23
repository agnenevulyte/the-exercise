// source goes here
const app = function() {
	// table
	var lastClicked;
	var grid = clickableGrid(4, 3, function(el, row, col, i) {
		// console.log("You clicked on item #:",i);
		// console.log("row #:",row);
		// console.log("col #:",col);

		// multiples
		var n = 12;
		var clickedNum = i;

		// array of numbers
		var arrOfNums = [];
		for (var m = clickedNum; m <= n; m++) {
			arrOfNums.push(m);
		}

		// finding multiples
		function multiplesOf(numbers, number) {
			// add second argument
			var multiples = []; // change to array (so that we can store multiple numbers - not just one multiple)
			for (var j = 0; j < numbers.length; j++) {
				if (numbers[j] % number === 0) {
					// divide by the number
					multiples.push(numbers[j]); // add the current multiple found to the multiples array
				}
			}
			return multiples;
		}

		console.log(multiplesOf(arrOfNums, clickedNum));
		var myArr = multiplesOf(arrOfNums, clickedNum);

		el.className = 'clicked multiples';
		if (lastClicked) {
			lastClicked.className = '';
		}
		lastClicked = el;
		console.log('lastClicked------------', lastClicked);
		addClassToMultiples();

		//https://stackoverflow.com/questions/36313778/adding-class-to-specific-cells-of-a-html-table
		function addClassToMultiples() {
			var tds = document.querySelectorAll('.grid td');
			//iterate over each td
			for (var i = 0; i < n; i++) {
				var text = tds[i].innerText;
				myArr.forEach(function(value) {
					if (text === value.toString()) {
						//add your class to the element containing this text
						console.log('tds[i]', tds[i]);
						tds[i].classList.toggle('multiples');
						tds[clickedNum - 1].classList.remove('multiples');
					}
				});
			}
		}
	});

	document.body.appendChild(grid);

	function clickableGrid(rows, cols, callback) {
		var i = 0;
		var grid = document.createElement('table');
		grid.className = 'grid';
		for (var r = 0; r < rows; ++r) {
			var tr = grid.appendChild(document.createElement('tr'));
			// console.log('tr', tr.rowIndex);
			for (var c = 0; c < cols; ++c) {
				var cell = tr.appendChild(document.createElement('td'));
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
};

export default app;
