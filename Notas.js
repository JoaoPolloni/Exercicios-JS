/* ### Transformar notas escolares  
Converte os numeros das notas para letras na classificação 
* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F
*/

function getScore(score){

let score = 90
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;

if (scoreA) {
    scoreFinal = "A"
} else if (scoreB) {
    scoreFinal = "B"
}else if (scoreC) {
    scoreFinal = "C"
}else if (scoreD) {
    scoreFinal = "D"
}else if (scoreF) {
    scoreFinal = "F"
}else{
    scoreFinal = "Nota Inválida"
}
return 
    scoreFinal
}


//Validação de valores
console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(10))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(62))
console.log(getScore(75))
console.log(getScore(81))
console.log(getScore(93))
console.log(getScore(99))
console.log(getScore(100))