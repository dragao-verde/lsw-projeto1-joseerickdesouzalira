# Minha Loja - Jogolândia

Aluno(a): José Erick de Souza Lira - 202612010020

Como executar: node loja.js

Funcionalidades:

- listarProdutos(lista): exibe todos os produtos em ordem numerada, mostrando nome, categoria, preço, quantidade em estoque e quantidade vendida.
- cadastrarProduto(lista, nome, categoria, preco, quantidade): cria um novo produto com vendidos igual a 0 e adiciona ao final da lista.
- calcularValorEstoque(lista): retorna o valor total do estoque calculado pela soma de preço × quantidade de cada produto.
- buscarProduto(lista, termo): procura o primeiro produto cujo nome contenha o termo informado, ignorando maiúsculas e minúsculas.
- produtosEmFalta(lista, minimo): retorna apenas os produtos com quantidade menor que o valor informado.
- aplicarDesconto(lista, categoria, percentual): aplica desconto aos produtos da categoria informada e retorna quantos itens foram alterados.
- registrarVenda(lista, nome, quantidade): registra uma venda, validando a existência do produto e a disponibilidade em estoque antes de atualizar os dados.