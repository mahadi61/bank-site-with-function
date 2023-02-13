document.getElementById('btn-deposits').addEventListener('click', function(){
    const depositAmount = getInputFieldValueById('deposits-amount');
    const previousAmount = getElement('total-deposits');

    const newDepositAmount = previousAmount + depositAmount;
    
    setElementValueById('total-deposits', newDepositAmount);

    const previousTotalBalance = getElement('total-balance');

    const newTotalBalance = previousTotalBalance + depositAmount;
    setElementValueById('total-balance', newTotalBalance);
})