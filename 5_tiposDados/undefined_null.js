console.log(sobrenome); //hoisting - ele inicializa mas não consegue puxar os dados das linhas de baixo, aparece como undefined

var nome = null;
var sobrenome = "Spindola";

console.log(nome);
console.log(sobrenome);

nome = "Natalia";

console.log(nome);