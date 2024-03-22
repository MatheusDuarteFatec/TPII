import copy

# Classe Pessoa no qual será clonada
class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def __str__(self):
        return f'Nome: {self.nome}, idade: {self.idade}'
    
    def clone(self):
        return copy.copy(self)
    
#Classe Gerenciadora de Pessoa (Pessoa Manager)
class PessoaManager:
    def __init__(self):
        self.pessoas = {}

    def adicionarPessoa(self, nome, idade, id):
        pessoa = Pessoa(nome, idade)
        self.pessoas[id] = pessoa

    def getPessoa(self, id):
        return self.pessoas[id].clone()
    
# Interface para Usuário

# Criando uma instância de PessoaManager
manager = PessoaManager()

# Adicionando pessoas
manager.adicionarPessoa('Matheus', 19, 1)
manager.adicionarPessoa('Axur', 30, 2)
manager.adicionarPessoa('Maria', 24, 3)

# Clonando Pessoa e Modificando os dados
pessoaClone1 = manager.getPessoa(1)
pessoaClone1.nome = "Pietro"

pessoaClone2 = manager.getPessoa(3)
pessoaClone2.nome = 'Lobo'
pessoaClone2.idade = 23

# Imprimindo as pessoas (originais e clonadas)
print('Pessoas Originais')
print(manager.getPessoa(1))
print(manager.getPessoa(2))
print(manager.getPessoa(3))

print('--')

print('Pessoas Clonadas')
print(pessoaClone1)
print(pessoaClone2)