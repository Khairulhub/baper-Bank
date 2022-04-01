document.getElementById('deposit-btn').addEventListener('click',function(){
    // console.log('btn clicked');
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value ;
//    deposit total 
    const depositTotal = document.getElementById('deposit-total');
    // console.log(deposit.innerText);
    const currentDepositAmmount = depositTotal.innerText;
    // set the inner text of deposit total 
     depositTotal.innerText = parseFloat(currentDepositAmmount) + parseFloat(depositValue);
    depositInput.value = '';
    // console.log(depositValue);

    // add money with balance

    const balanceTotal = document.getElementById('balance-total');
    const currentBalanceAmmount = balanceTotal.innerText;
    balanceTotal.innerText = parseFloat(currentBalanceAmmount) + parseFloat(depositValue);


})
document.getElementById('withdrow-btn').addEventListener('click',function(){
    // console.log('btn clicked');
    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowValue = withdrowInput.value ;
    console.log(withdrowValue);
//    deposit total 
    const withdrowTotal = document.getElementById('withdrow-total');
    console.log(withdrowTotal.innerText);
    const currentwithdrowAmmount = withdrowTotal.innerText;
    // set the inner text of deposit total 
     withdrowTotal.innerText = parseFloat(currentwithdrowAmmount) + parseFloat(withdrowValue);
    withdrowInput.value = '';
    console.log(withdrowTotal);

    // add money with balance

    const balanceTotal = document.getElementById('balance-total');
    const currentBalanceAmmount = balanceTotal.innerText;
    balanceTotal.innerText = parseFloat(currentBalanceAmmount) - parseFloat(withdrowValue);


})