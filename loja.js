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

/* 
Tarefa 3 — Cadastrar um produto
function cadastrarProduto(lista, nome, categoria, preco, quantidade)
Crie um novo produto com os 4 dados recebidos e com vendidos igual a 0 (um produto novo ainda não foi vendido). Adicione-o ao final do array e retorne a nova quantidade de produtos da lista.
Conceitos envolvidos: objeto, parâmetros, método de array para adicionar elementos, return.
*/

function cadastrarProduto(lista, nome, categoria, preco, quantidade) {
    const novoProduto = {
        nome: nome,
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        vendidos: 0
    };
    lista.push(novoProduto);
    let qtdeProdutos = lista.length;
    return `Produto cadastrado! Agora a loja tem ${qtdeProdutos} produtos.`
} 

console.log("--- Tarefa 3: cadastrar ---");
console.log(cadastrarProduto(produtos, "God of War", "Ação", 250.00, 3));

/*
Tarefa 4 — Valor do estoque
function calcularValorEstoque(lista)
Retorne o valor total do estoque: a soma de preço × quantidade de todos os produtos. Exemplo: o Caderno vale 25 × 12 = 300 e a Caneta azul vale 3 × 50 = 150; o resultado é a soma dos valores de todos os produtos.
Conceitos envolvidos: variável acumuladora, laço de repetição, operadores aritméticos, return.
Pense antes de codificar:
Onde a soma deve começar e com qual valor inicial? Pelo valor do primeiro objeto da lista
O que precisa acontecer com a soma a cada produto percorrido?
Em que momento o resultado deve ser retornado: dentro ou depois do laço?
Como testar: exiba Valor do estoque: R$ ... com o valor retornado pela função.
*/

function calcularValorEstoque(lista){
    let somaTotal = 0;
    let qtdeProdutos = lista.length;
    for(let i = 0; i < qtdeProdutos; i++){
        let somaParcial = lista[i].quantidade * lista[i].preco;
        somaTotal += somaParcial;
    }
    return `Valor do estoque: R$ ${somaTotal.toFixed(2)}`
}

console.log("--- Tarefa 4: valor do estoque ---");
console.log(calcularValorEstoque(produtos));

/*
Tarefa 5 — Buscar um produto
function buscarProduto(lista, termo)
Procure o primeiro produto cujo nome contém o termo pesquisado, sem diferenciar maiúsculas de minúsculas (buscar "MOCHILA" deve encontrar "Mochila"). Retorne o produto encontrado ou null se nenhum produto corresponder.
Conceitos envolvidos: laço de repetição, if, métodos de string (minúsculas e “contém”), return, null.
Pense antes de codificar:
Como comparar dois textos ignorando maiúsculas e minúsculas?passando os dois pro mesmo “tamanho”, tudo maiusc ou tudo minusc
Qual método verifica se um texto contém outro?include
Se a função encontrar o produto, ela precisa continuar procurando?não
Onde deve ficar o retorno de null para que só aconteça quando nada for encontrado?
Como testar: busque um produto que existe (escrito em maiúsculas) e exiba seu nome e preço. Depois busque um produto que não existe e, quando o resultado for null, exiba Produto não encontrado.
Saída esperada:
Encontrado: Mochila - R$ 120
Produto não encontrado.
*/

function buscarProduto(lista, termo) {
    let qtdeProdutos = lista.length;
    termo = termo.toLowerCase();
    for(let i = 0; i < qtdeProdutos; i++){
        if(lista[i].nome.toLowerCase().includes(termo)){
            return `Encontrado: ${lista[i].nome} - R$ ${lista[i].preco.toFixed(2)}`;
        }
    }
    return "Produto não encontrado.";
}

console.log("--- Tarefa 5: buscar ---");
console.log(buscarProduto(produtos, "fifa 23"));
console.log(buscarProduto(produtos, "fortnite"));

/*
Tarefa 6 — Produtos em falta
function produtosEmFalta(lista, minimo)
Retorne um novo array apenas com os produtos cuja quantidade é menor que minimo. O array original não deve ser alterado.
Conceitos envolvidos: array vazio, laço de repetição, if, adicionar elementos, return.
Pense antes de codificar:
Onde os produtos selecionados serão guardados?
Qual condição decide se um produto entra ou não no novo array?
Como testar: chame a função com mínimo 5 e exiba quantos produtos foram retornados.
Saída esperada:
Produtos com menos de 5 unidades: 3
*/

function produtosEmFalta(lista, minimo) {
    let produtosFaltando = [];
    let qtdeProdutos = lista.length;
    for(let i = 0; i < qtdeProdutos; i++){
        if(lista[i].quantidade < minimo){
            produtosFaltando.push(lista[i]);
        }
    }
    return produtosFaltando;
}

console.log("--- Tarefa 6: produtos em falta ---");
console.log(`Produtos com menos de 5 unidades: ${produtosEmFalta(produtos, 5).length}`);

/*
Tarefa 7 — Aplicar desconto
function aplicarDesconto(lista, categoria, percentual)
Para cada produto da categoria informada, altere o preço aplicando o desconto. Retorne quantos produtos foram alterados. Fórmula: novo preço = preço - (preço × percentual ÷ 100). Exemplo: 10% de desconto em R$ 3 resulta em R$ 2.7.
Conceitos envolvidos: laço de repetição, if, alteração de propriedade de objeto, contador, return.
Pense antes de codificar:
Como identificar se um produto pertence à categoria recebida?
Como alterar o valor de uma propriedade de um objeto que já existe?
Como contar quantos produtos foram alterados?
Como testar: aplique 10% de desconto em uma categoria, exiba quantos produtos foram alterados e o novo preço de um deles.
Saída esperada:
3 produtos receberam desconto.
Novo preço da caneta: R$ 2.7
*/

function aplicarDesconto(lista, categoria, percentual) {
    let qtdeProdutosAlterados = 0;
    let qtdeProdutos = lista.length;
    for(let i = 0; i < qtdeProdutos; i++){
        if(lista[i].categoria.toLowerCase() === categoria.toLowerCase()){
            lista[i].preco = lista[i].preco - (lista[i].preco * percentual / 100);
            qtdeProdutosAlterados++;
        }
    }
    return `${qtdeProdutosAlterados} produtos receberam desconto.`;
}

console.log("--- Tarefa 7: aplicar desconto ---");
console.log(aplicarDesconto(produtos, "Esportes", 10));
console.log(`Novo preço do FIFA 23: R$ ${produtos[3].preco.toFixed(2)}`);