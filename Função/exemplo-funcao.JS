// Fazer um menu de exercicios utilizando o exemplo dado em aula
// Criar um menu, onde é possível executar 6 dos exercícios anteriores.
// Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário poderá escolher qual exercicio ele quer visualizar.

// O usuário deverá digitar 0 para sair do menu.

let opcao = prompt("Escolha uma opção: \n\n1 - Imprimir números de 1 a 10 usando FOR \n\n2 - Imprimir números pares de 1 a 10 usando FOR \n\n3 - Imprima os números ímpares de 0 a 50 usando FOR \n\n4 - imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10 usando FOR \n\n5 - Imprimir os primeiros 10 números da sequência de Fibonacci usando FOR \n\n6 - Imprimir números pares de 0 a 20 usando WHILE \n\n0 - Para sair")
switch (opcao) {

    case "1":

    console.log("FOR 1. Imprimir números de 1 a 10 utilizando o loop for")
    
    for(let num = 1; num <= 10; num++){
        console.log(num)
    }
    break;

    case "2":

    console.log("FOR 2. imprimir números pares de 1 a 10.")

for (let num = 1; num <= 10; num++){
    if(num % 2 == 0){
        console.log(num);
    }
}
    break;

    case "3":

    console.log("FOR faça um programa que imprima os números ímpares de 0 a 50.")

for(let num = 0; num <= 50; num++){
    if(num % 2 !== 0){
        console.log(num);
    }
}
    break;

    case "4":

    console.log("FOR faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.")

    let numero = parseInt(prompt("Digite um número para ver na tabuada: "))

if(!isNaN(numero)){

    for(let num = 1; num <=10; num++){
        console.log(numero + " X " + num + " = " + (numero*num));
    }

}else{
    console.log("Número invalido. Por favor, digite um número válido.")
}

    break;
    
    case "5":

    console.log("FOR imprimir os primeiros 10 números da sequência de Fibonacci.")


let fib1 = 1;
let fib2 = 1;

console.log("Os primeiro 10 números da sequência de Fibonacci são: ")
console.log(fib1);
console.log(fib2);

for(let i = 2; i < 10; i++){
    let nextFib = fib1 + fib2;
    console.log(nextFib);

    fib1 = fib2;
    fib2 = nextFib;
}

    break;

    case "6":

    console.log("WHILE imprimir números pares de 0 a 20 utilizando o loop while")

let num = 0;

console.log("Números pares de 0 a 20: ");

while(num <= 20){
    if(num % 2 == 0){
        console.log(num)
    }
    num ++;
}

    break;

}

// while (opcao !=1, 2, 3, 4, 5, 6 ) {
// let opcao = prompt("Escolha uma opção: \n\n1 - Imprimir números de 1 a 10 usando FOR \n\n2 - Imprimir números pares de 1 a 10 usando FOR \n\n3 - Imprima os números ímpares de 0 a 50 usando FOR \n\n4 - imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10 usando FOR \n\n5 - Imprimir os primeiros 10 números da sequência de Fibonacci usando FOR \n\n6 - Imprimir números pares de 0 a 20 usando WHILE \n\n0 - Para sair")
// }
// while (opcao = 0) {

// }








