import addClassToMultiples from './addClassMultiplesOf'

let lastClicked;

const calculations = (rows, clickedNum, el) => {

    el.className = 'clicked multiples';
    if (lastClicked) {
        lastClicked.className = '';
    }
    lastClicked = el;
    // console.log('lastClicked------------', lastClicked);

    if (el.classList.contains('clicked')) {
        addClassToMultiples(rows, clickedNum);
    } else {
        let tds = document.querySelectorAll('.grid td');
        for (let i = 0; i < rows; i++) {
            tds[i].classList.remove('multiples');
        }
    }
}

export default calculations;