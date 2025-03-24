let calculation = localStorage.getItem('aktuellerechung') || '';
document.querySelector('.display').innerHTML = calculation || 0;

console.log(calculation);

function updateCalculation(parameter1) {
    calculation += parameter1;
    console.log(calculation);
    localStorage.setItem('aktuellerechung', calculation);
    document.querySelector('.display').innerHTML = calculation;
}

function reset() {
    calculation = '';
    console.log(calculation);
    localStorage.setItem('aktuellerechung', calculation);
    document.querySelector('.display').innerHTML = 0;
}