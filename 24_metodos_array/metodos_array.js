// length -> número de elementos no método

var arr = [1,2,3,4,5];
console.log(arr.length);

// push -> adiciona elementos no array

arr.push(6);
arr.push('Qualquer coisa');

console.log(arr);

// pop -> remove elementos no array

arr.pop();

console.log(arr);

// unshift -> adiciona elemento no início do array

arr.unshift(0);
arr.unshift('teste');

console.log(arr);

// shift -> remove elemento do inicio do array
arr.shift();

console.log(arr);

// acessar o último elemento da array

console.log(arr[arr.length - 1]);

// isArray -> verifica se o elemento é um array

console.log(Array.isArray(5));

console.log(Array.isArray(arr));