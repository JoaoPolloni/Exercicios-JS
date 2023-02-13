//Solicitar o nome e o salário de uma pessoa. No final, apresente o nome e seu novo salário como aumento de 28,5%.
// Solicita o nome do usuário
var nome = prompt("Digite o seu nome:");

// Solicita o salário do usuário
var salario = prompt("Digite o seu salário:");

// Calcula o aumento de 28,5% no salário
var aumento = salario * 0.285;
var novoSalario = parseFloat(salario) + aumento;

// Exibe o nome e o novo salário
alert("Nome: " + nome + "\n Novo salário: " + novoSalario);