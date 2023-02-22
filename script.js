let button = window.document.querySelector('button#calculateButton');
let checkbox = window.document.querySelector('input#unilateralSwitch');
let result = window.document.querySelector('div#result');

button.addEventListener('click', mainFunction);

function mainFunction() {
    let totalWeightText = window.document.querySelector('input#inputWeight');
    let totalWeight = Number(totalWeightText.value);
    let mainWeight

    if (totalWeight > 0) {
        if (checkbox.checked == false){
        mainWeight = (totalWeight / 2);
        } else {
        mainWeight = (totalWeight);
        }

        function calculator(plateWeight) {     
            
            let plateAmount = Math.floor(mainWeight / plateWeight);
            mainWeight %= plateWeight;
            return plateAmount;
        }

        let amountTwenty = calculator(20);
        let amountFifteen = calculator(15);
        let amountTen = calculator(10);
        let amountFive = calculator(5);
        let amountTwoAndAHalf = calculator(2.5);

        let isRemaining

        if (mainWeight > 0) {
            isRemaining = `<br> Remaining weight: ${checkbox.checked ? mainWeight : mainWeight*2}kg`
        } else {
            isRemaining = ''
        }
        
        result.innerHTML =
        `20 kg plates: ${amountTwenty}<br>
        15 kg plates: ${amountFifteen}<br>
        10 kg plates: ${amountTen}<br>
        05 kg plates: ${amountFive}<br>
        2.5 kg plates: ${amountTwoAndAHalf}
        ${isRemaining}`;
    } else {
        result.innerHTML = `Please input a valid number`
    }
}