// step 1: add event listener to the deposit button         
document.getElementById("btn-deposit").addEventListener('click', function() {
// step 2: get  the deposit amount from the deposit field
const depositField = document.getElementById("deposit-field");
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);
if(isNaN(newDepositAmount)) {
    alert('Provide an absolute deposit amount');
    return;
}
// step 3: get the final deposit amount from the deposit field
const depositTotalElement = document.getElementById("deposit-total");
const previousDepositAmountString = depositTotalElement.innerText;
const previousDepositAmount = parseFloat(previousDepositAmountString);
// step 4: add the total amount to the deposit
const currentDepositAmount = previousDepositAmount + newDepositAmount;
// set the deposit total
depositTotalElement.innerText = currentDepositAmount;
// step 5: get the total account balance
const accountBalanceElement = document.getElementById("balance-total");
const previousAccountBalanceString = accountBalanceElement.innerText;
const previousAccountBalance = parseFloat(previousAccountBalanceString);
const TotalAccountBalance = previousAccountBalance + newDepositAmount;
// set the total balane
accountBalanceElement.innerText = TotalAccountBalance;

// step 
depositField.value = "";
// console.log(depositAmount);
});