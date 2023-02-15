/**
 * promise
 * a proposta de qua algo irá acontecer
 * poderá dar certo ou errado,
 * mas ira acontecer
 * 
 * é um objeto JavaScript com a promessa de que algo será realizado
 * é usado para operações assincronas:
 * caregar um arquivo
 * Leituar de dadps de uma APi
 * promise poderá server:
 * Pending:Estado inicial, assim que o objeto da promessa é iniciado
 * Fulfilled: A promessa foi concluida com sucesso
 * Rejected: A promessa foi rejeitada, erro
 * Settled: Seja com sucesso ou com erro, ela foi finalmente concluida
 * **/

let aceitar = true /** true ou false */

console.log('pedir uber')
 const promessa = new Promise((resolve,reject) => {
    if (aceitar) {
    return resolve('pedido aceito!')
 }

 return reject('pedido negado!')
})

 console.log('aguardando')

 promessa
 .then(result => console.log(result))
 .catch (erro => console.log(erro))
 .finally(() => console.log('finalizada'))