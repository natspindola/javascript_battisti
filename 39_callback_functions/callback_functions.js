function exibir(num) {
    console.log("A operação resultou em: " + num);
}

function soma(a, b, callback) {
    var op = a + b;
    callback(op);
}

function multiplicacao(a, b, cb) { //cb = callback
    var op = a * b;
    cb(op);
}

soma(2, 2);

multiplicacao(2, 4);