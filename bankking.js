//add evenlistener on the deposite btn
document.getElementById('deposite-btn').addEventListener('click', function () {

    //set the deposite input value   (id='deposite-input')
    const depositeInputFlied = document.getElementById('deposite-input');
    const getDepositeValueText = depositeInputFlied.value;
    const getDepositeValue = parseFloat(getDepositeValueText)


    //get and set deposite money on up  (id='deposite-totall');.ay id value(innerText hisabe use hobe )
    const depoTotallInput = document.getElementById('deposite-totall');
    const oldDopositValueText = depoTotallInput.innerText;
    const oldDopositValue = parseFloat(oldDopositValueText);
    const addOldValueAndNewValue = oldDopositValue + getDepositeValue;

    depoTotallInput.innerText = addOldValueAndNewValue;

    //clear the input value 
    depositeInputFlied.value = '';


    //update the balance ay id value(innerText hisabe use hobe ) 
    const balance = document.getElementById('update-blance');
    const updateBalanceText = balance.innerText;
    const updateBalance = parseFloat(updateBalanceText);
    const balanceIsUpdate = updateBalance + addOldValueAndNewValue;
    balance.innerText = balanceIsUpdate;

})