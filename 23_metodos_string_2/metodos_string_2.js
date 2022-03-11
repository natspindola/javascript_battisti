// toLowerCase e toUpperCase -> altera as letras para minuscula ou maiuscula

var frase = "Esta frase é a que vamos manipular";

var fraseCaixaAlta = frase.toLocaleUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLocaleLowerCase());

// trim -> ajusta os espaços existentes na string

var nome = "        Natalia     ";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split -> transforma o texto em array ou adiciona separador em string

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// lastIndexOf -> encontra a última palavra da frase, mesmo que haja duas palavras iguais

var fraseDois = "Eu quero a ultima palavra teste dessa frase de teste";

console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.lastIndexOf("teste"));