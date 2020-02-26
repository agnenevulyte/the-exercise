// create the table
const clickableGrid = (rows, callback) => {
    // check if the element with class 'grid' exists, if yes, remove it
    let elem = document.querySelector('.grid');
    if (elem) {
        elem.remove();
    }
    let i = 0;
    const cols = 1;
    const grid = document.createElement('table');
    grid.className = 'grid';

    for (let r = 0; r < rows; r++) {
        const tr = grid.appendChild(document.createElement('tr'));
        for (let c = 0; c < cols; c++) {
            const cell = tr.appendChild(document.createElement('td'));
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

export default clickableGrid;