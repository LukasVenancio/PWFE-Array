'use strict'

const numeros = [20, 131, 70, 279, 320]
// let numeros100 = []

// Acrescentar 100 a cada elemento

//------------------Resolução Imperativa---------------------
// for (let i = 0; i < numeros.length; i++){
//     numeros100[i] = numeros[i] + 100
// }

//------------------Resolução declarativa-------------------

const adicionar100 = (numero) => numero + 100
const numeros100 = numeros.map(adicionar100)
//.map() - percorre o array podendo modificar ou não e
//retornando um novo array de mesmo tamanho

//.map() possui três returns:
// 1º- Elemento
//2º-Índice
//3º-Array

console.log("Numeros: ", numeros)
console.log("Numeros mais 100: ", numeros100)

//----------PROBLEMA - Criar um novo array com os números menores que 100


//----------------Solução Imperativa-------------------
// let numerosMenoresQueCem = []

// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] < 100){
//         numerosMenoresQueCem[i] = numeros[i]
//     }
// }

//---------------Solução declarativa---------------
const determinarMenoresQueCem = (numero) => numero < 100
const numerosMenoresQueCem = numeros.filter(determinarMenoresQueCem)
//.filter() - Percorre todo o array filtrando os elementos a partir de 
//uma condição e retorna um array do mesmo tamanho ou menor.
//.filter() possui três returns:
// 1º- Elemento
//2º-Índice
//3º-Array

console.log(numerosMenoresQueCem)



//-------PROBLEMA-------Somar todos os elementos

//-------------Solução imperativa------------
// let somaElementos = 0
// for(let i = 0; i < numeros.length; i++){
//     somaElementos += numeros[i]
// }

//------------Solução Declarativa-----------
const soma =(a, b) => a + b
const somaElementos = numeros.reduce(soma, 0)
//.reduce(): Percorre todo o array aplicando uma função (callback) e 
//retorna um único valor
// 1º-Acumulador
//2º-Elemento
//3º-Indice
//4º-Array
console.log(somaElementos)





//PROBLEMA----Criar um array com os valores ao quadradro
const elevarValores = (numero) => numero * numero
const numerosAoQuadrado = numeros.map(elevarValores)

console.log(numerosAoQuadrado)




//PROBLEMA----Criar um array com os valores pares
const determinarPares = (numero) => numero % 2 == 0
const numerosPares = numeros.filter(determinarPares)

console.log(numerosPares)




//PROBLEMA----Calcular a media dos valores
const determinarMedia = (somaTotal) => somaTotal / 5

const somaTotal = numeros.reduce(soma, 0)

const media = determinarMedia(somaTotal)
console.log(media)




//PROBLEMA----Calcular a soma dos valores ímpares
const determinarNumerosImpares = (numero) => numero % 2 == 1

const impares = numeros.filter(determinarNumerosImpares)

const somaImpares = impares.reduce(soma, 0)

console.log(somaImpares)





//PROBLEMA----Calcular o valor total sabendo que,cada valor teve 20% de desconto
const descontarValores = (soma) => soma * 0.8

const somaParaDesconto = numeros.reduce(soma, 0)

const valoresComDesconto = descontarValores(somaParaDesconto)

console.log(valoresComDesconto)
