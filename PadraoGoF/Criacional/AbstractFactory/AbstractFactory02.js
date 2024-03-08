/* É implementado produtos eletronicos e produtos de moda, cada um com sua prórpia fabrica que cria produtos especificos. Considerando quatro tipos de produtos: telefone e televisao na fabrica de nome eletronico e camisa e bermuda na fabrica de nome moda. Nete caso, se tem duas fabricas onccretas: FabricaEletronico e FabricaModa. A função lojaVirtual simula o uso do padrão Abastract Factory em uma loja virtual, onde diferentes tipos de produtos são criado de acordo com a fábrica escolhida para cada cliente.
*/

// Interface da Fabrica Abstrata
class FabricaAbstrata {
    criarProdutoEletronico(){}
    criarProdutoModa(){}
}

// Fabrica Concreta - Produtos Eletrônicos
class FabricaEletronico extends FabricaAbstrata {
    criarProdutoEletronico() {
        return new Telefone()
    }
}

// Fabrica Concreta - Produtos Moda
class FabricaModa extends FabricaAbstrata {
    criarProdutoModa() {
        return new Camiseta()
    }
}

class FabricaCarro extends FabricaAbstrata {
    criarProdutoCarro() {
        return new Carro()
    }
}

class FabricaMoto extends FabricaAbstrata {
    criarProdutoMoto() {
        return new Moto()
    }
}

// Classe Abstrata para Eletronicos
class ProdutoEletronico {
    constructor() {
        this.tipo = 'Eletrônico'
    }

    descricao() {
        return `Produto ${this.tipo}: Telefone`
    }
}

// Classe Abstrata para Moda
class ProdutoModa {
    constructor() {
        this.tipo = 'Moda'
    }

    descricao() {
        return `Produto ${this.tipo}: Camiseta`
    }
}

class ProdutoCarro {
    constructor() {
        this.tipo = 'Carro'
    }

    descricao() {
        return `Produto ${this.tipo}: Carro`
    }
}

class ProdutoMoto {
    constructor() {
        this.tipo = 'Moto'
    }

    descricao() {
        return `Produto ${this.tipo}: Moto`
    }
}

// Classe Concreta de Produto Eletronico
class Telefone extends ProdutoEletronico {
    descricao() {
        return `Produto ${this.tipo}: Telefone`
    }
}

// Classe Concreta de Produto Moda
class Camiseta extends ProdutoModa {
    descricao() {
        return `Produto ${this.tipo}: Camiseta`
    }
}

class Carro extends ProdutoMoto {
    descricao() {
        return `Produto ${this.tipo}: Carro`
    }
}
class Moto extends ProdutoMoto {
    descricao() {
        return `Produto ${this.tipo}: Moto`
    }
}

// Uso no Padrão Abstract Factory em uma loja virtual
function lojaVirtual(cliente, fabrica) {
    const produtoEletronico = fabrica.criarProdutoEletronico()
    //const produtoModa = fabrica.criarProdutoModa()

    console.log(`${cliente} comprou: `)
    console.log(produtoEletronico.descricao())
    //console.log(produtoModa.descricao())
}

function lojaVirtual2(cliente, fabrica) {
    const produtoModa = fabrica.criarProdutoModa()

    console.log(`${cliente} comprou: `)
    console.log(produtoModa.descricao())
}

// Uso com fabrica de produtos eletornicos e moda
const cliente1 = 'Cliente 1'
const carrinho1 = new FabricaEletronico()
lojaVirtual(cliente1, carrinho1)

console.log('--------')

const cliente2 = 'Cliente 2'
const carrinho2 = new FabricaModa()
lojaVirtual2(cliente2, carrinho2)