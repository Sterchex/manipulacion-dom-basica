const h1 = document.querySelector('h1')
const div = document.querySelector('div');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

function btnfuncion() {
    let resultado = parseInt(input1.value) + parseInt(input2.value);
    result.innerHTML = `Resultado: ${resultado}`;
};

btnCalcular.addEventListener("click", btnfuncion)






const h2 = document.createElement('h2');
h2.innerHTML = "curso de manipulación del Dom"

div.appendChild(h2);
