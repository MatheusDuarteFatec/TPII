// Aplicação do padrão GoF - Criacional - Prototype

// Classe Pessoa que será o Prototipo
class Pessoa {
    constructor(id, nome, idade) {
        this.id = id
        this.nome = nome
        this.idade = idade
    }

    // Método que clona para realizar a cópia do objeto
    clone() {
        return new Pessoa(this.id, this.nome, this.idade)
    }
}

// Classe PessoaManager que gerencia instancias de Pessoas
class PessoaManager {
    constructor() {
        this.pessoas = {}
    }

    // Adiciona uma nova pessoa (objeto) ao dicionario Pessoa
    adicionaPessoa(id, nome, idade) {
        const pessoa = new Pessoa(id, nome, idade)
        this.pessoas[id] = pessoa
    }

    // Solicita uma pessoa pelo id e retorna uma cópia dela
    getPessoaById(id) {
        const pessoaOriginal = this.pessoas[id]
        if (pessoaOriginal) {
            return pessoaOriginal.clone()
        } else {
            return null
        }
    }
}

// Interface para Usuário

// Criando uma instância de PessoaManager
const manager = new PessoaManager()

// Adicionando pessoas
manager.adicionaPessoa(1, 'Matheus', 19)
manager.adicionaPessoa(2, 'Axur', 30)
manager.adicionaPessoa(3, 'Maria', 24)

// Clonando Pessoa e Modificando os dados
const pessoaClone1 = manager.getPessoaById(1)
if (pessoaClone1) {
    pessoaClone1.nome = 'João Oliveira'
}

const pessoaClone2 = manager.getPessoaById(3)
if (pessoaClone2) {
    pessoaClone2.nome = 'Fátima'
    pessoaClone2.idade = 32
}

// Imprimindo as pessoas (originais e clonadas)
console.log('Pessoas Originais')
console.log(manager.getPessoaById(1))
console.log(manager.getPessoaById(2))
console.log(manager.getPessoaById(3))

console.log('--')

console.log('Pessoas Clonadas')
console.log(pessoaClone1)
console.log(pessoaClone2)