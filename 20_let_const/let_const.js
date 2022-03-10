let x = 5; //var x = 5
const y = 10; //o valor é constante, não é possível mudar ao longo do código

x = 12;

console.log(x);
console.log('const ' + y);

if(true) {
    let x = 20;
    console.log(x); //esse elemento não é alterado pelo elemento fora desse escopo

    const y = 50;
    console.log('const if ' + y); //é possível ter duas constantes, uma em cada escopo
}

console.log(x);

if(20 > 10) {
    const y = 100;
    console.log('const if 3 ' + y);
}

for(let x = 0; x < 10; x++) {
    console.log(x);
}