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

/* 
Tarefa 8 — Registrar uma venda
function registrarVenda(lista, nome, quantidade)
Registre a venda de uma quantidade de um produto, usando a função da Tarefa 5 para encontrá-lo pelo nome. A venda não acontece se o produto não existir ou se não houver unidades suficientes em estoque; nesse caso, a função retorna false. Se a venda for possível, diminua a quantidade em estoque, aumente os vendidos e retorne true.
Conceitos envolvidos: reutilização de funções, if, operadores lógicos, alteração de propriedades, valores booleanos, return.
Pense antes de codificar:
Qual função que você já criou encontra um produto pelo nome?
Quais são as duas situações que impedem a venda? Como verificar as duas em uma única condição?
Quais duas propriedades mudam quando uma venda acontece? Uma aumenta e outra diminui: qual é qual?
Como testar: venda 3 unidades de um produto com estoque suficiente e, se o retorno for true, exiba o nome, a nova quantidade em estoque e o total de vendidos. Depois tente vender mais unidades do que existem e, se o retorno for false, exiba Venda não realizada: estoque insuficiente ou produto inexistente.
Saída esperada:
Venda realizada! Caderno: 9 un. em estoque, 6 vendidos.
Venda não realizada: estoque insuficiente ou produto inexistente.
*/

function registrarVenda(lista, nome, quantidade) {
    const produtoEncontrado = lista.find((produto) => produto.nome.toLowerCase() === nome.toLowerCase());
    const produtoExiste = buscarProduto(lista, nome) !== "Produto não encontrado.";

    if (!produtoExiste || !produtoEncontrado || quantidade <= 0 || produtoEncontrado.quantidade < quantidade) {
        return false;
    }

    produtoEncontrado.quantidade -= quantidade;
    produtoEncontrado.vendidos += quantidade;
    return true;
}

console.log("--- Tarefa 8: registrar venda ---");
const vendaValida = registrarVenda(produtos, "Minecraft", 3);
if (vendaValida) {
    const produtoVendido = produtos.find((produto) => produto.nome.toLowerCase() === "minecraft");
    console.log(`Venda realizada! ${produtoVendido.nome}: ${produtoVendido.quantidade} un. em estoque, ${produtoVendido.vendidos} vendidos.`);
} else {
    console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
}

const vendaInvalida = registrarVenda(produtos, "Fifa 23", 999);
if (!vendaInvalida) {
    console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
}

/*
Tarefa 9 — Padronizar nomes
function formatarNome(texto)
Retorne o texto sem espaços nas pontas, com a primeira letra maiúscula e o restante em minúsculas. Depois, altere a função da Tarefa 3 para que todo produto cadastrado tenha o nome salvo já formatado.
Conceitos envolvidos: métodos de string (remover espaços, pegar um caractere, recortar, maiúsculas e minúsculas), concatenação.
Pense antes de codificar:
O texto deve ser limpo antes ou depois de separar a primeira letra?
Como pegar só a primeira letra? E todo o texto a partir da segunda?
Como juntar as duas partes em um único texto?
Como testar: exiba o resultado da função para o texto "   bORRACHA branca  ".
Saída esperada:
Borracha branca
*/

function formatarNome(texto){
    let textoFormatado = texto.trim();
    let primeiraLetra = textoFormatado.charAt(0).toUpperCase();
    let restoDoTexto = textoFormatado.slice(1).toLowerCase();
    return primeiraLetra + restoDoTexto;
}

console.log("--- Tarefa 9: Padronizar nomes ---");
console.log(formatarNome("   FiFa 23  "));

/*
Tarefa 10 — Salvar e recuperar em JSON
function converterParaJSON(lista) e function lerJSON(texto)
converterParaJSON deve retornar o array convertido em texto JSON. lerJSON deve retornar o array de volta, a partir do texto JSON.
Conceitos envolvidos: JSON.stringify, JSON.parse, typeof.
Pense antes de codificar:
Qual método transforma objetos em texto? E qual faz o caminho inverso?
Como provar que o resultado da conversão é mesmo um texto?
Como testar: converta os produtos, exiba o tipo do resultado, recupere o array e exiba quantos itens voltaram e o nome do primeiro.
Saída esperada:
string
Itens recuperados: 7 | Primeiro: Caderno
*/

function converterParaJSON(lista) {
    return JSON.stringify(lista);
}

function lerJSON(texto) {
    return JSON.parse(texto);
}

console.log("--- Tarefa 10: JSON ---");
const produtosJSON = converterParaJSON(produtos);
console.log(typeof produtosJSON);
const produtosRecuperados = lerJSON(produtosJSON);
console.log(`Itens recuperados: ${produtosRecuperados.length} | Primeiro: ${produtosRecuperados[0].nome}`);

/*
Tarefa 11 — Relatório final
function gerarRelatorio(nome, lista)
Exiba um relatório da loja, no formato da saída abaixo, com:
o nome da loja em maiúsculas;
a quantidade de produtos cadastrados;
o valor total do estoque, usando a função da Tarefa 4;
a quantidade e a lista dos produtos com menos de 5 unidades, usando a função da Tarefa 6.
Conceitos envolvidos: reutilização de funções, template literal, laço de repetição.
Pense antes de codificar:
Quais funções que você já criou resolvem parte deste relatório?
Como chamar uma função dentro de outra e usar o valor que ela retorna?
Como testar: chame a função passando nomeLoja e produtos.
Saída esperada:
===== RELATÓRIO: PAPELARIA EXEMPLO =====
Produtos cadastrados: 7
Valor total em estoque: R$ 738.6
Produtos com estoque baixo: 3
- Lápis (2 un.)
- Mochila (1 un.)
- Caderno de desenho (4 un.)
 */

function gerarRelatorio(nome, lista) {
    const produtosBaixoEstoque = produtosEmFalta(lista, 5);
    console.log(`===== RELATÓRIO: ${nome.toUpperCase()} =====`);
    console.log(`Produtos cadastrados: ${lista.length}`);
    console.log(calcularValorEstoque(lista));
    console.log(`Produtos com estoque baixo: ${produtosBaixoEstoque.length}`);
    for (let i = 0; i < produtosBaixoEstoque.length; i++) {
        console.log(`- ${produtosBaixoEstoque[i].nome} (${produtosBaixoEstoque[i].quantidade} un.)`);
    }
}  

console.log("--- Tarefa 11: relatório ---");
gerarRelatorio(nomeLoja, produtos);