# Aplicação do padrão GoF - Criacional - AbstractFactory

# No código é implementado usando classes Python com uma hierarquia de classes que define as fábricas abstratas, produtos abstratos e suas implementações concretas. O cliente usa uma fábrica para criar prodtos do tipo A e B, sem se preocupar com as suas implementaçãoes  específicas das fábricas 

# INTERFACE DA FABRICA ABSTRATA
class AbstractFactory:
    def criaProdutoA(self):
        pass
    def criaProdutoB(self):
        pass
 
# Fabrica Concreta 1 que cria Produtos do Tipo A e B - Opção A:
class ConcretaFactory1(AbstractFactory):
    def criaProdutoA(self):
        return ConcretoProdutoA1()
 
    def criaProdutoB(self):
        return ConcretoProdutoB1()
   
# Fabrica Concreta 2 que cria Produtos do Tipo A e B - Opção B:
class ConcretaFactory2(AbstractFactory):
    def criaProdutoA(self):
        return ConcretoProdutoA2()
 
    def criaProdutoB(self):
        return ConcretoProdutoB2()
 
# PRODUTO A
# Interface dos produtos do tipo A:
class AbstractProdutoA:
    def metodoA(self):
        pass
 
# Implementação concreta do Produto do Tipo A - Opção A:
class ConcretoProdutoA1(AbstractProdutoA):
    def metodoA(self):
        return "Produto do Tipo A criado pela fabrica 1"
 
# Implementação concreta do Produto do Tipo A - Opção B:
class ConcretoProdutoA2(AbstractProdutoA):
    def metodoA(self):
        return "Produto do tipo A criado pela fabrica 2"
 
# PRODUTO B
# Interface dos Produtos do Tipo B:
class AbstractProdutoB:
    def metodoB(self):
        pass

# Implementação concreta do Produto do Tipo B - Opção A:
class ConcretoProdutoB1(AbstractProdutoB):
    def metodoB(self):
        return "Produto do tipo B criado pela fabrica 1"
 
# Implementação concreta do Produto do Tipo B - Opção B:
class ConcretoProdutoB2(AbstractProdutoB):
    def metodoB(self):
        return "Produto do tipo B criado pela fabrica 2"
 
# INTERFACE (SIMULADA) PARA O USO DO PADRÃO - CLIENTE ############################
def clientCode(factory):
    produtoA = factory.criaProdutoA()
    produtoB = factory.criaProdutoB()
 
    print(produtoA.metodoA())
    print(produtoB.metodoB())

# Exemplo de Uso com a Primeira Fabrica:
factory1 = ConcretaFactory1()
clientCode(factory1)

# Exemplo de Uso com a Segunda Fabrica:
factory2 = ConcretaFactory2()
clientCode(factory2)