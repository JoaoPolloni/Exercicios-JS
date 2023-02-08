function primo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
//Adicionar aqui o numero para a verificação
let number = 7;
if (primo(number)) {
    console.log(number + " é um número primo");
} else {
    console.log(number + " não é um número primo");
}
