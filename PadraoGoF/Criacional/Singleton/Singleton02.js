// E-commerce utiliza em apenas 1 carrinho de compra para adiciona n formas de compras.

// Criação do Carrinho:
const Carrinho = (function () {
    let instancia

    function criarInstancia() {
        let produtos = []

        function adicionarProduto(produto) {
            produtos.push(produto)
        }

        function obterProduto() {
            return produtos
        }

        function limparCarrinho() {
            produtos = []
        }

        return {
            adicionarProduto, obterProduto, limparCarrinho
        }
    }

    return {
        obterInstance: function() {
            if (!instancia) {
                instancia = criarInstancia()
            }
            return instancia
        }
    }
})()

const carrinhoInstancia1 = Carrinho.obterInstance()
const carrinhoInstancia2 = Carrinho.obterInstance()

console.log(carrinhoInstancia1 == carrinhoInstancia2)

// Inserir produtos na listas de produtos
carrinhoInstancia1.adicionarProduto({ id: 1, nome: 'Produto 1', preco: 10.00 })
carrinhoInstancia2.adicionarProduto({ id: 2, nome: 'Produto 2', preco: 20.00 })
carrinhoInstancia1.adicionarProduto({ id: 3, nome: 'Produto 3', preco: 30.00 })

// Apresenta os produtos os carrinho
console.log(carrinhoInstancia1.obterProduto())
console.log(carrinhoInstancia2.obterProduto())

// Limpa o carrinho de instancia 1
carrinhoInstancia1.limparCarrinho()

// Apresenta os produtos no carrinho após limpeza. Limpa pq é o mesmo objeto
console.log(carrinhoInstancia1.obterProduto())
console.log(carrinhoInstancia2.obterProduto())