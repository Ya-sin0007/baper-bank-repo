//add evenlistener on the deposite btn
document.getElementById('deposite-btn').addEventListener('click', function () {

    //set the deposite input value   (id='deposite-input')
    const depositeButton = document.getElementById('deposite-input');
    const getDepositeValueText = depositeButton.value;
    const getDepositeValue = parseFloat(getDepositeValueText)


    //get and set deposite money on up  (id='deposite-totall');.ay id value(innerText hisabe use hobe )
    const depoTotallInput = document.getElementById('deposite-totall');
    const oldDopositValueText = depoTotallInput.innerText;
    const oldDopositValue = parseFloat(oldDopositValueText);
    const addOldValueAndNewValue = oldDopositValue + getDepositeValue;

    depoTotallInput.innerText = addOldValueAndNewValue;

    //clear the input value 
    depositeButton.value = '';


    //update the balance ay id value(innerText hisabe use hobe ) 
    const balance = document.getElementById('update-blance');
    const updateBalanceText = balance.innerText;
    const updateBalance = parseFloat(updateBalanceText);
    const balanceIsUpdate = updateBalance + addOldValueAndNewValue;

    balance.innerText = balanceIsUpdate;

})

//now withdrew section ar kaj
document.getElementById('withdrew-btn').addEventListener('click', function () {

    //withdrew inputflied 
    const withdreInputFlied = document.getElementById('withdre-input');
    const withdreInputFliedText = withdreInputFlied.value;
    const withdreInputValue = parseFloat(withdreInputFliedText);

    //set and get withdrew money on up 
    const withdreTotall = document.getElementById('withdrew-totall');
    const withdrewTotallText = withdreTotall.innerText;
    const oldWithdrewTotall = parseFloat(withdrewTotallText)
    const addOldAndNewWithdrew = oldWithdrewTotall + withdreInputValue;
    withdreTotall.innerText = addOldAndNewWithdrew;

    //clear the withdrew flied value
    withdreInputFlied.value = '';

    //set withdrew button and balance amount
    const balance = document.getElementById('update-blance');
    const updateBalanceText = balance.innerText;
    const updateBalance = parseFloat(updateBalanceText);
    const minusBalancToWithdrew = updateBalance - addOldAndNewWithdrew;
    balance.innerText = minusBalancToWithdrew;

})