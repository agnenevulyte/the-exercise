import addClassToMultiples from './addClassMultiplesOf'

let lastClicked;

const calculations = (rows, clickedNum, el) => {
    // add class name on the clicked element
    el.className = 'clicked';
    // if the lastClicked element is the same as the current clicked, remove the class
    if (lastClicked) {
        lastClicked.className = '';
    }
    lastClicked = el;
    // console.log('lastClicked------------', lastClicked);

    // handling multiples
    if (el.classList.contains('clicked')) {
        addClassToMultiples(rows, clickedNum);
    } else {
        const tds = document.querySelectorAll('.grid td');
        for (let i = 0; i < rows; i++) {
            tds[i].classList.remove('multiples');
        }
    }
}

export default calculations;