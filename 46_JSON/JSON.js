const objs = [
    {
        "nome": "Natalia",
        "idade": 25,
        "esta_trabalhando": true,
        "detalhes_profissao": {
            "profissao": "Técnica em Enfermagem",
            "empresa": "Empresa X"
        },
        "hobbies": ["Programar", "Ler"]
    },
    {
        "nome": "Pedro",
        "idade": 30,
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "profissao": null,
            "empresa": null
        },
        "hobbies": ["Estudar", "Correr"]
    }
]

// JSON
const jsonData = JSON.stringify(objs)

console.log(jsonData);
console.log(typeof jsonData)

// converter json para objeto
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
    console.log(pessoa.nome)
});