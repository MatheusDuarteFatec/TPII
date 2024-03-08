/*
Aplicação do padrão GoF - Criacional - Builder
É criado um software que simula a construção de um carro, onde o Builder nos permitirá definir diferentes partes do carro de forma flexível. Começa definindo as diferentes partes do carro e na sequência se cria o Builder, que permite construir diferentes tipos de carros; Se cria uma classe Carro que receberá as partes contruídas pelo Builder e na para fechar, usa-se o Builder para construir diferentes tipos de carros
*/

// Define as partes de um carro
class Motor {
    constructor(tipo) {
        this.tipo = tipo
    }
}

class Carroceria {
    constructor(estilo) {
        this.estilo = estilo
    }
}

class Rodas {
    constructor(tamanho) {
        this.tamanho = tamanho
    }
}

class CorVeiculo {
    constructor(cor) {
        this.cor = cor
    }
}

// Builder
class CarroBuilder {
    constructor() {
        this.motor = null
        this.carroceria = null
        this.rodas = null
        this.corVeiculo = null
    }

    adicionarMotor(tipo) {
        this.motor = new Motor(tipo)
        return this
    }

    adicionarCarroceria(estilo) {
        this.carroceria = new Carroceria(estilo)
        return this
    }

    adicionarRodas(tamanho) {
        this.rodas = new Rodas(tamanho)
        return this
    }

    adicionarCorVeiculo(cor) {
        this.corVeiculo = new CorVeiculo(cor)
        return this
    }

    montar() {
        return new Carro(
            this.motor,
            this.carroceria,
            this.rodas,
            this.corVeiculo
        )
    }
}

// Construtor do Carro
class Carro {
    constructor(motor, carroceria, rodas, corVeiculo) {
        this.motor = motor
        this.carroceria = carroceria
        this.rodas = rodas
        this.corVeiculo = corVeiculo
    }

    mostrarDetalhes() {
        console.log(`\nCarro com motor: ${this.motor.tipo}, \nCarroceria: ${this.carroceria.estilo}, \nRodas de Tamanho: ${this.rodas.tamanho} e \nCor ${this.corVeiculo.cor}`)
    }
}

// Interface do Usuário - utilização do padrão
const builder = new CarroBuilder()

//Construtor do Carro (com Padrão Builder)
const carroEsportivo = builder
    .adicionarMotor('V8')
    .adicionarCarroceria('Esportiva')
    .adicionarRodas(18)
    .adicionarCorVeiculo('Vermelho')
    .montar()

    const carroSedan = builder
    .adicionarMotor('4 Cilindros')
    .adicionarCarroceria('Sedan')
    .adicionarRodas(16)
    .adicionarCorVeiculo('Preto')
    .montar()

carroEsportivo.mostrarDetalhes()
carroSedan.mostrarDetalhes()
