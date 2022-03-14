var itensClass = document.getElementsByClassName('item'); //seleciona todos os itens do código

console.log(itensClass);

// querySelectorAll

var itensQuery = document.querySelectorAll('#lista2 li'); //seleciona todos os itens da lista 2

console.log(itensQuery);

var itensQuery2 = document.querySelectorAll('#lista .item'); //seleciona todos os itens da lista 1

console.log(itensQuery2);

// querySelector

var lista = document.querySelectorAll('#lista'); //pega apenas o primeiro elemento que encontra no código

console.log(lista);

var span = document.querySelector('#paragrafo span'); //pega apenas um método span

console.log(span);