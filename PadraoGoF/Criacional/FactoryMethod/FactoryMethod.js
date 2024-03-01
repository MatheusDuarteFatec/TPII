// Aplicação do padrão GoF - Criacional - FactoryMethod

// Classe base de veiculos
class Veiculo {
    constructor(modelo) {
        this.modelo = modelo
    }

    mostrarDetalhes() {
        console.log(`Modelo: ${this.modelo}`)
    }
}

// Subclasse de veiculos
class Carro extends Veiculo {
    constructor(modelo) {
        super(modelo)
    }
}

class Moto extends Veiculo {
    constructor(modelo) {
        super(modelo)
    }
}

// Fabrica abstrata de veiculo
class FabricaDeVeiculos {
    criarVeiculo(modelo) {
        throw new Error('O método criarVeiculo deve ser implementado pelas subclasses')
    }
}

// Fabrica concreta de carros
class FabricaDeCarros extends FabricaDeVeiculos {
    criarVeiculo(modelo) {
        return new Carro(modelo)
    }
}

// Fabrica concreta de motos
class FabricaDeMotos extends FabricaDeVeiculos {
    criarVeiculo(modelo) {
        return new Moto(modelo)
    }
}

// Uso da Fabrica - Interface
const mercedes = new FabricaDeCarros()
const carro = mercedes.criarVeiculo('Sedan')
carro.mostrarDetalhes()

const fabricaMotos = new FabricaDeMotos()
const moto = fabricaMotos.criarVeiculo('Sport')
moto.mostrarDetalhes()