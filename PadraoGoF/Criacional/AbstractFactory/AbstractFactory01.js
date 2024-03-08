// Aplicação do padrão GoF - Criacional - AbstractFactory

/* No código é implementado usando classes JS com uma hierarquia de classes que define as fábricas abstratas, produtos abstratos e suas implementações concretas. O cliente usa uma fábrica para criar prodtos do tipo A e B, sem se preocupar com as suas implementaçãoes  específicas das fábricas 
*/

// Interface de Fabrica Abstrata
class AbstractFactory {
    criaProdutoA() { }
    criaProdutoB() { }
}

// Fabrica Concreta 1 que cria Produtos do Tipo A e B - Opção A
class ConcretoFactory1 extends AbstractFactory {
    criaProdutoA() {
        return new ConcretoProdutoA1()
    }

    criaProdutoB() {
        return new ConcretoProdutoB1()
    }
}

// Fabrica Concreta 2 que cria Produtos do Tipo A e B  diferentes - Opção B
class ConcretoFactory2 extends AbstractFactory {
    criaProdutoA() {
        return new ConcretoProdutoA2()
    }

    criaProdutoB() {
        return new ConcretoProdutoB2()
    }
}

// Interface dos Produtos do Tipo A
class AbstractProdutoA {
    metodoA(){}
}

// Implementação concreta do Produto do Tipo A - Opção A
class ConcretoProdutoA1 extends AbstractProdutoA {
    metodoA() {
        return 'Produto do Tipo A criado pela fabrica 1'
    }
}

// Implementação concreta do Produto do Tipo A - OPção B
class ConcretoProdutoA2 extends AbstractProdutoA {
    metodoA() {
        return 'Produto do Tipo A criado pela fabrica 2'
    }
}

// Interface dos Produtos do Tipo B
class AbstractProdutoB {
    metodoB(){}
}

// Implementação concreta do Produto do Tipo B - Opção A
class ConcretoProdutoB1 extends AbstractProdutoB {
    metodoB() {
        return 'Produto do Tipo B criado pela Fábrica 1'
    }
}

// Implementação concreta do Produto do Tipo B - Opção B
class ConcretoProdutoB2 extends AbstractProdutoB {
    metodoB() {
        return 'Produto do Tipo B criado pela Fábrica 2'
    }
}

// Interface Cliente

// Função para demonstração do Padrão Abstract Factory
function clienteCod(factory) {
    const produtoA = factory.criaProdutoA()
    const produtoB = factory.criaProdutoB()

    console.log(produtoA.metodoA())
    console.log(produtoB.metodoB())
}

// Exemplo de uso com a primeira fábrica
const factory1 = new ConcretoFactory1()
clienteCod(factory1)

// Exemplo de uso com a segunda fábrica
const factory2 = new ConcretoFactory2()
clienteCod(factory2)

