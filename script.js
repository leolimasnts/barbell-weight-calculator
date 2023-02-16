var button = window.document.querySelector('button#calculateButton')


button.addEventListener('click', mainFunction)

function mainFunction() {
    var totalWeightText = window.document.querySelector('input#inputWeight');
    var totalWeight = Number(totalWeightText.value)
    var lateralWeight = (totalWeight / 2)
    
    
    function calculator(plateWeight) {
        return Math.floor(lateralWeight / plateWeight)
    }

    var amountTwenty = calculator(20);
    lateralWeight %= 20
    var amountFifteen = calculator(15);
    lateralWeight %= 15
    var amountTen = calculator(10);
    lateralWeight %= 10
    var amountFive = calculator(5);
    lateralWeight %= 5
    var amountTwoAndAHalf = calculator(2.5);
    lateralWeight %= 2.5

    var result = window.document.querySelector('div#result');
    result.innerHTML =
    `20 kg plates: ${amountTwenty}<br>
    15 kg plates: ${amountFifteen}<br>
    10 kg plates: ${amountTen}<br>
    05 kg plates: ${amountFive}<br>
    2.5 kg plates: ${amountTwoAndAHalf}<br><br>
    Each side!`;
}