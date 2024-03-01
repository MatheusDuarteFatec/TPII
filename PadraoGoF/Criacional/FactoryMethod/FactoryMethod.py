# Aplicação do padrão GoF - Criacional - FactoryMethod

# Classe base de veiculos
class Veiculo:
    def __init__(self, modelo):
        self.modelo = modelo

    def mostrarDetalhes(self):
        print(f"Modelo: {self.modelo}")

# Subclasse de veiculos
class Carro (Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

class Moto (Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

# Fabrica abstrata de veiculo
class FabricaDeVeiculos:
    def criarVeiculo(self, modelo):
        raise NotImplementedError('O método criarVeiculo deve ser implementado pelas subclasses')

# Fabrica concreta de carros
class FabricaDeCarros (FabricaDeVeiculos):
    def criarVeiculo(modelo):
        return Carro(modelo)

# Fabrica concreta de motos
class FabricaDeMotos (FabricaDeVeiculos):
    def criarVeiculo(modelo):
        return Moto(modelo)

# Uso da Fabrica - Interface
mercedes = FabricaDeCarros()
carro = mercedes.criarVeiculo('Sedan')
carro.mostrarDetalhes()

fabricaMotos = FabricaDeMotos()
moto = fabricaMotos.criarVeiculo('Sport')
moto.mostrarDetalhes()