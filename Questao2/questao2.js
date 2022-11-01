/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo
 valor sempre será a soma dos 2 valores anteriores 
 (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa 
 na linguagem que desejar onde, informado um número, ele calcule a 
 sequência de Fibonacci e retorne uma mensagem avisando se o número
  informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada
 de sua preferência ou pode ser previamente definido no código;*/

 
let numInput = document.getElementById('number')
let form = document.getElementById('form')
let resultado = document.getElementById('result')

form.addEventListener('submit', (e) => {

  let termo1 = 0
  let termo2 = 1
  let termo3 = 0
  
  let numInserido = numInput 
  
  while (numInserido.value > termo3 ) {
      termo3 = termo1 + termo2
      termo1 = termo2
      termo2 = termo3
  }
  
  if (numInserido.value == 0 || numInserido.value == 1) {
    resultado.innerText = ('O número informado faz parte da sequência de Fibonacci.');
  } if (numInserido.value == termo3) {
    resultado.innerText = ('O número informado faz parte da sequência de Fibonacci.')
  } else {
    resultado.innerText = ('O número informado não faz parte da sequência de Fibonacci.')
  }

    e.preventDefault();
})
  






