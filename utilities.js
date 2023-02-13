function getInputFieldValueById(inputFieldId){
    const getInputField = document.getElementById(inputFieldId);
    const inputFieldValueString = getInputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    getInputField.value = '';
    return inputFieldValue; 
}

function getElement(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setElementValueById(elementId, newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;

}