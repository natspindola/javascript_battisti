// length -> apresenta a quuantidade de caracteres que a string possui

var nome = "Natalia";

console.log(nome.length);

var obj = "bola";

console.log(obj.length);

// indexOf -> acessa os caractéres pelo número informado (ex: 2 = t)

console.log(nome[2]);

var frase = "O rato roeu a roupa do rei de Roma";

console.log(frase.indexOf("roeu"));

// slice -> remove uma parte de uma frase

var roeu = frase.slice(7, 11);

console.log(roeu);

// replace -> troca uma palavra da string

var novaFrase = frase.replace("roeu", "teste");

console.log(novaFrase);