/* Desenvolver um programa com o uso do padrão de projeto GoF - Criacional - Builder, em relação no qual deve conter:
Tamanho (Grande, Padrão e Pequeno)
Massa (Tradicional, Integral, Fitness)
Molho (Tomate, Temperado, Ervas)
Proteínas (Calabresa, Frango, Presunto, Atum)
Queijos (Mussarelo, Catupiry, Cheddar)
Complemento (Azeitona, Organo, Tomate, Cebelo, Bacon)

Montar o objeto da pizza com Builder
Gerar o modelo default para 'limpar' o pedido antes;
O usuario pode personalizar e no final deve msotrar como ficou a pizza
*/

class Tamanho {
    constructor(opcaoTamanho) {
        this.opcaoTamanho = opcaoTamanho
    }
}

class Molho {
    constructor(opcaoMolho) {
        this.opcaoMolho = opcaoMolho
    }
}

class Proteina {
    constructor(opcaoProteina) {
        this.opcaoProteina = opcaoProteina
    }
}

class Queijos {
    constructor(opcaoQueijos) {
        this.opcaoQueijos = opcaoQueijos
    }
}

class Complemento {
    constructor(opcaoComplemento) {
        this.opcaoComplemento = opcaoComplemento
    }
}

class PizzaBuilder {
    constructor() {
        this.tamanho = null
        this.molho = null
        this.proteina = null
        this.queijos = null
        this.complemento = null
    }

    adicionarTamanho(opcaoTamanho) {
        this.tamanho = new Tamanho(opcaoTamanho)
        return this
    }

    adicionarMolho(opcaoMolho) {
        this.molho = new Molho(opcaoMolho)
        return this
    }

    adicionarProteina(opcaoProteina) {
        this.proteina = new Proteina(opcaoProteina)
        return this
    }

    adicionarQueijos(opcaoQueijos) {
        this.queijos = new Queijos(opcaoQueijos)
        return this
    }
    adicionarComplemento(opcaoComplemento) {
        this.complemento = new Complemento(opcaoComplemento)
        return this
    }

    limparPedido() {
        return new Pizza (
            this.tamanho = null,
            this.molho = null,
            this.proteina = null,
            this.queijos = null,
            this.complemento = null
        )
    }

    montarPizza() {
        return new Pizza (
            this.tamanho,
            this.molho,
            this.proteina,
            this.queijos,
            this.complemento
        )
    }
}

class Pizza {
    constructor(tamanho, molho, proteina, queijos, complemento) {
        this.tamanho = tamanho
        this.molho = molho
        this.proteina = proteina
        this.queijos = queijos
        this.complemento = complemento
    }

    mostrarDetalhes() {
        console.log(`\n Pizza com tamanho: ${this.tamanho.opcaoTamanho}, \n molho: ${this.molho.opcaoMolho}, \n proteina: ${this.proteina.opcaoProteina}, \n queijos: ${this.queijos.opcaoQueijos}\n e complemento: ${this.complemento.opcaoComplemento}`)
    }
}

const builder = new PizzaBuilder()

const pizzaMatheus = builder
    .adicionarTamanho('Mais maior')
    .adicionarMolho('do Amor')
    .adicionarProteina('Trembolona')
    .adicionarQueijos('Fedido')
    .adicionarComplemento('Óregano')
    .montarPizza()
    
const pizzaJulia = builder
    .adicionarTamanho('Grande')
    .adicionarMolho('Molho de ervas')
    .adicionarQueijos('Mussarela')
    .montarPizza()

//pizzaMatheus.mostrarDetalhes()
pizzaJulia.mostrarDetalhes()