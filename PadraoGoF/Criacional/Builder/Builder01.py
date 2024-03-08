#Aplicação do padrão GoF - Criacional - Builder
#É criado um software que simula a construção de um carro, onde o Builder nos permitirá definir diferentes partes do carro de forma flexível. Começa definindo as diferentes partes do carro e na sequência se cria o Builder, que permite construir diferentes tipos de carros; Se cria uma classe Carro que receberá as partes contruídas pelo Builder e na para fechar, usa-se o Builder para construir diferentes tipos de carros

# Define as partes de um carro
class NomeCarro:
    def __init__(self, nome):
        self.nome = nome

class Motor:
    def __init__(self, tipo):
        self.tipo = tipo

class Carroceria:
    def __init__(self, estilo):
        self.estilo = estilo

class Rodas:
    def __init__(self, tamanho):
        self.tamanho = tamanho

class CorVeiculo:
    def __init__(self, cor):
        self.cor = cor

# Builder
class CarroBuilder:
    def __init__(self):
        self.nome = None
        self.motor = None
        self.carroceria = None
        self.rodas = None
        self.corVeiculo = None

    def adicionarNome(self, nome):
        self.nome = NomeCarro(nome)
        return self

    def adicionarMoto(self, tipo):
        self.tipo = Motor(tipo)
        return self

    def adicionarCarroceria(self, estilo):
        self.estilo = Motor(estilo)
        return self
    
    def adicionarRodas(self, tamanho):
        self.tamanho = Rodas(tamanho)
        return self
    
    def adicionarCorVeiculo(self, cor):
        self.cor = CorVeiculo(cor)
        return self

    def montar(self):
        return Carro(
            self.motor,
            self.carroceria,
            self.rodas,
            self.corVeiculo
        )
    
# Construtor do Carro
class Carro:
    def __init__(self, nome, motor, carroceira, rodas):
        self.nome = nome
        self.motor = motor
        self.carroceira = carroceira
        self.rodas = rodas
        self.corVeiculo = corVeiculo

    def mostrarDetalhes(self):
        print(f"Nome: {self.nome.nome} Carro com motor: {self.motor.tipo}, \nCarroceria: ${self.carroceria.estilo}, \nRodas de Tamanho: ${self.rodas.tamanho} e \nCor ${self.corVeiculo.cor}")

# Interface do Usuário - utilização do padrão
builder = CarroBuilder()

# Construtor do Carro (com Padrão Builder)carroEsportivo = 
carroEsportivo = builder\
    .adicionarMotor('V8')\
    .adicionarCarroceria('Esportiva')\
    .adicionarRodas(18)\
    .adicionarCorVeiculo('Vermelho')\
    .montar()

carroSedan = builder\
    .adicionarMotor('4 Cilindros')\
    .adicionarCarroceria('Sedan')\
    .adicionarRodas(16)\
    .adicionarCorVeiculo('Preto')\
    .montar()

carroEsportivo.mostrarDetalhes()
carroSedan.mostrarDetalhes()
