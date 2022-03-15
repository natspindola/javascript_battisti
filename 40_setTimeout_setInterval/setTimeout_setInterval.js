// setTimeout
console.log("Antes do setTimeout");

setTimeout(function() {
    console.log("Testando o setTimeout");

}, 2000); // = 2 segundos

console.log("Depois do setTimeout"); // mesmo estando depois, vai ser executado antes do setTimeout por causa dos 2 segundos

// setInterval
setInterval(function() {
    console.log("Testando setInterval"); // aparece no console antes do teste de setTimeout por causa dos segundos definidos

}, 1000); // = 1 segundo | fica rodando até que seja inserida uma pausa 