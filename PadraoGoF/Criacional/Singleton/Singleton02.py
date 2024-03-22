class Carrinho:
    instancia = None

    def __new__(cls):
        if not cls.instancia:
            cls.instancia = super().__new__(cls)
            cls.instancia.listaProdutos = []
        return cls.instancia
    
    def adicionarProduto(self, produto):
        self.listaProdutos.append(produto)

    def obterProduto(self):
        return self.listaProdutos
    
    def limparCarrinho(self):
        self.listaProdutos = []

# Instancias de Carrinho
carrinhoInstancia1 = Carrinho()
carrinhoInstancia2 = Carrinho()

print(carrinhoInstancia1 == carrinhoInstancia2)

# Adiciona produtos no carrinho
carrinhoInstancia2.adicionarProduto({ "id": 1, "Nome": "Produto 1", "Preco": 10.00 })
carrinhoInstancia2.adicionarProduto({ "id": 2, "Nome": "Produto 2", "Preco": 20.00 })
carrinhoInstancia1.adicionarProduto({ "id": 3, "Nome": "Produto 3", "Preco": 30.00 })

#Mostra produtos
print(carrinhoInstancia1.obterProduto())
print(carrinhoInstancia2.obterProduto())

# Limpa Carrinho - Instancia 1
carrinhoInstancia1.limparCarrinho()

# Apresenta produtos no carrinho
print(carrinhoInstancia1.obterProduto())
print(carrinhoInstancia2.obterProduto())