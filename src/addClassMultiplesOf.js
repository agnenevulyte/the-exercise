import multiplesOf from './multiplesOf';

const addClassToMultiples = (rows, clickedNum) => {
    // the number of the input field saved in an array 
    let arrOfNums = [];
    for (let m = clickedNum; m <= rows; m++) {
        arrOfNums.push(m);
    }

    // array of clicked number and it's multiples
    const myArr = multiplesOf(arrOfNums, clickedNum);
    // console.log('myArr--------', myArr)
    let tds = document.querySelectorAll('.grid td');
    //iterate over each td
    for (let i = 0; i < rows; i++) {
        const number = tds[i].innerText;
        // console.log('number-------', number)
        tds[i].classList.remove('multiples');
        myArr.forEach(function(value) {
            if (number === value.toString()) {
                //add the class 'multiples' to the element containing this number
                // console.log('tds[i]', tds[i]);
                tds[i].classList.add('multiples');
                tds[clickedNum - 1].classList.remove('multiples');
            }
        });
    }
}

export default addClassToMultiples;