window.onload = function() {
    console.log("Carregou o DOM");

    var title2 = document.querySelector("#title");

    console.log(title2);
}

console.log("Carregou o JS"); //o JS carrega primeiro pois no HTML ele está na parte do head e não no body

var title = document.querySelector("#title");

console.log(title);