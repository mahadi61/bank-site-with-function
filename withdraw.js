document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmount = getInputFieldValueById('withdraw-amount');
    const previousWithdrawAmount = getElement('total-withdraw');
    const newTotalWithdraw = previousWithdrawAmount + withdrawAmount;

    setElementValueById('total-withdraw', newTotalWithdraw);

    const previousTotalBalance = getElement('total-balance');
    const newTotalBalance = previousTotalBalance - withdrawAmount;
    setElementValueById('total-balance', newTotalBalance);
})