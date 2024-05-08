// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

while {
 let ano = parseFloat(prompt("Digite seu ano de nascimento: "))
 if (ano <= 2006 )
     alert("maior de idade")
 if (ano > 2006 )
     alert("menor de idade")
}