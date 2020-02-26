// getting the input value;
const getInputValue = () => {
    document.getElementById("myNumber").value = '';
    const usersNumber = document.getElementById("myNumber");
    const currentVal = usersNumber.value;
    return currentVal;
}