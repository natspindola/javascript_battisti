// splice -> adiciona ou remove um novo elemento no meio do array

var arr = [1,2,3,4,5];

arr.splice(2, 0, 999); //adicionou o 999
console.log(arr);

arr.splice(4, 1); //removeu o 4
console.log(arr);

// indexOf -> acha o índice de um elemento

console.log(arr.indexOf(5));

// join -> transforma array em string

var arr2 = ["O", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(","));

// reverse -> inverte a ordem dos elementos

console.log(arr2.reverse());