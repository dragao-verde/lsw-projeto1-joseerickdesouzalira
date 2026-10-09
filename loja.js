/*
Tarefa 1 — Dados da loja
No início do arquivo, crie a constante nomeLoja, com o nome da sua loja, e o array produtos, com no mínimo 6 produtos.
Cada produto é um objeto com exatamente 5 propriedades: nome (texto), categoria (texto), preco (número), quantidade (número de unidades em estoque) e vendidos (número de unidades já vendidas). Use pelo menos 2 categorias diferentes e deixe pelo menos 2 produtos com quantidade menor que 5 (eles serão usados na Tarefa 6).
Exemplo de um produto da Papelaria Exemplo:
{ nome: "Caderno", categoria: "cadernos", preco: 25, quantidade: 12, vendidos: 3 }
Conceitos envolvidos: constantes, array, objeto, tipos de dados (texto e número).

*/

const nomeLoja = "Jogolândia";
const produtos = [{
    nome: "GTA V",
    categoria: "Ação",
    preco: 150.00,
    quantidade: 4,
    vendidos: 10,
},
{
    nome: "The Witcher 3",
    categoria: "RPG",
    preco: 200.00,
    quantidade: 6,
    vendidos: 15,
}, 
{
    nome: "EaFc26",
    categoria: "Esportes",
    preco: 200.00,
    quantidade: 5,
    vendidos: 8,
},
{
    nome: "FIFA 23",
    categoria: "Esportes",
    preco: 120.00,
    quantidade: 2,
    vendidos: 20,
},
{
    nome: "Nba2k26",
    categoria: "Esportes",
    preco: 300.00,
    quantidade: 1,
    vendidos: 5,
},
{
    nome: "Minecraft",
    categoria: "Aventura",
    preco: 20.00,
    quantidade: 10,
    vendidos: 25,
}
];

/* 
Tarefa 2 — Listar os produtos
function listarProdutos(lista)
Exiba cada produto do array em uma linha, numerada a partir de 1, no formato: número. nome | categoria | R$ preço | quantidade un. | vendidos vendidos
Conceitos envolvidos: laço de repetição, índice do array, length, acesso a propriedades, template literal.
*/

function listarProdutos(lista) {
    let quantidadeProdutos = lista.length;
    for (let i = 0; i < quantidadeProdutos; i++) {
        const produto = lista[i];
        console.log(`${i + 1}. ${produto.nome} | ${produto.categoria} | R$ ${produto.preco.toFixed(2)} | ${produto.quantidade} un. | ${produto.vendidos} vendidos`);
    }
}

console.log("--- Tarefa 2: Listar ---");
listarProdutos(produtos);