// parseFloat

console.log(parseFloat('12.999')); //transforma a string em number
console.log(Number.parseFloat('12.999'));

// parseInt

console.log(parseInt('10')); //transforma uma string em inteiro
console.log(parseInt('16.96'));

// toFixed

console.log(23.9999.toFixed(1)); //limita as casas decimais do número

// isNan

console.log(isNaN("teste")); //verifica se tem número
console.log(isNaN(12)); //no console aparece false, pois tem um número
console.log(isNaN("14")); //converte a string pra number

// max_value e min_value
console.log(Number.MAX_VALUE); //o máximo e o mínimo que o JS aceita, acima disso dá infinity e abaixo dá -infinity
console.log(Number.MIN_VALUE);

console.log(2.7854564874545468);