const multiplesOf = (numbers, clickedNum) => {
    // change to array (so that we can store multiple numbers - not just one multiple)
    let multiples = numbers.filter(number => {
        if (number % clickedNum === 0) {
            return number;
        }
    });
    // console.log('multiples-----', multiples)
    return multiples;
}

export default multiplesOf;