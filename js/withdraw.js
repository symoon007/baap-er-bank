/* 
1. add event handler in the withdraw button 
*/

// step 1:
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step 2: get  the withdraw amount from the deposit field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmoutString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmoutString);
   // clear input field
  withdrawField.value = "";
  

  if (isNaN(newWithdrawAmount) || newWithdrawAmount === 'string' || newWithdrawAmount < 0 || newWithdrawAmount.length !== 'number') {
    alert('Provide an absolute withdrawal Amount');
    return;
  }
  // step 3: get the final withdraw amount from the deposit field
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawAmountString = withdrawTotalElement.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

  // step 5: get the total account balance
  const accountBalanceElement = document.getElementById("balance-total");
  const previousAccountBalanceString = accountBalanceElement.innerText;
  const previousAccountBalance = parseFloat(previousAccountBalanceString);

  //   validation withdraw
  if (newWithdrawAmount > previousAccountBalance) {
    alert("Do Not Have Sufficiant Balance");
    return
  }
  
  // step 4: add the total amount to the withdraw
  const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
  //   step 5: set the withdraw amount
  withdrawTotalElement.innerText = currentWithdrawAmount;
  const TotalAccountBalance = previousAccountBalance - newWithdrawAmount;
  // set the total balane
  accountBalanceElement.innerText = TotalAccountBalance;
 

  
});
