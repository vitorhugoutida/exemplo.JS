// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário
//  e verifica se eles estão em ordem crescente.
//   Exibindo uma mensagem indicando se os números estão
//    em ordem crescente ou não.

let primeiroNumero = parseFloat(prompt("Digite o primeiro número: "))
console.log(primeiroNumero);

let segundoNumero = parseFloat(prompt("Digite  o segundo número: ")) 

console.log(segundoNumero)

let terceiroNumero = parseFloat(prompt("Digite o terceiro número: ")) 

console.log(terceiroNumero)

// let crescenteOuNao = primeiroNumero + segundoNumero + terceiroNumero

// let crescenteOuNao > primeiroNumero)

if (primeiroNumero > segundoNumero > terceiroNumero) {
    console.log("Os números estão em ordem crescente");


}

// if (segundoNumero > terceiroNumero) {
    // alert("Os números estão em ordem crescente")

// else if (console.log("Os números não estão em ordem crescente"));

else if (primeiroNumero < segundoNumero < terceiroNumero) {
    console.log("Os números não estão em ordem crescente");
}