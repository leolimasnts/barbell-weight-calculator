var button = window.document.querySelector('button#calculateButton')
var checkbox = window.document.querySelector('input#unilateralSwitch')

button.addEventListener('click', mainFunction)


function mainFunction() {
    let totalWeightText = window.document.querySelector('input#inputWeight');
    let totalWeight = Number(totalWeightText.value)
    
    if (checkbox.checked == false){
    var mainWeight = (totalWeight / 2)
    } else {
    var mainWeight = (totalWeight)
    }

    function calculator(plateWeight) {
        return Math.floor(mainWeight / plateWeight)
    }

    var amountTwenty = calculator(20);
    mainWeight %= 20
    var amountFifteen = calculator(15);
    mainWeight %= 15
    var amountTen = calculator(10);
    mainWeight %= 10
    var amountFive = calculator(5);
    mainWeight %= 5
    var amountTwoAndAHalf = calculator(2.5);
    mainWeight %= 2.5

    var result = window.document.querySelector('div#result');
    result.innerHTML =
    `20 kg plates: ${amountTwenty}<br>
    15 kg plates: ${amountFifteen}<br>
    10 kg plates: ${amountTen}<br>
    05 kg plates: ${amountFive}<br>
    2.5 kg plates: ${amountTwoAndAHalf}`;
}