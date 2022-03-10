var x = 1; //escopo global, é possível chamar dentro de uma função
var y = 3; //escopo global, é possível chamar dentro de uma função

console.log(x, y); //escopo global, é possível chamar dentro de uma função

function teste() { //escopo global, é possível chamar dentro de uma função
    var z = 0; //escopo local, não é possível ter acesso fora da função
    console.log(z); //escopo local, não é possível ter acesso fora da função
}

teste();

function testando() { //escopo global, é possível chamar dentro de uma função
    var z = 5; //escopo local, não é possível ter acesso fora da função
    console.log(z); //escopo local, não é possível ter acesso fora da função
}

testando(); //escopo global, é possível chamar dentro de uma função

if(true) { //o if não limita o escopo, então pode ser chamado fora da função
    var p = 1;
}

console.log(p);