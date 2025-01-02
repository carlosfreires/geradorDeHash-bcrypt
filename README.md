# Gerador de Hashes de Senhas com Bcrypt

Este é um script em Node.js que utiliza o algoritmo de hash `bcrypt` para gerar hashes seguros de senhas. O bcrypt é amplamente utilizado para armazenar senhas de forma segura em bancos de dados, pois é resistente a ataques de força bruta.

## Funcionalidade

Este script solicita ao usuário uma senha e gera um hash usando o algoritmo bcrypt. Ele também permite que o usuário defina o número de "rounds" (iterações) para o processo de hashing, o que influencia a segurança e o tempo de execução. Quanto maior o número de rounds, mais seguro e mais lento será o processo de hash.

## Como usar

### Requisitos

- Node.js (recomendado: versão 14 ou superior)
- Dependências:
  - `bcrypt` - Algoritmo para hashing de senhas
  - `readline` - Para entrada de dados no terminal
  - `chalk` - Para colorir as saídas no terminal

### Instalação

1. Clone este repositório ou baixe o arquivo do script.
   
2. Navegue até a pasta do projeto e instale as dependências:

  ```bash
  npm install bcrypt readline chalk
  ```
   
### Execução
Execute o script diretamente no terminal com o comando:
  ```bash
  node geradorDeHash-bcrypt.js
  ```
O script pedirá para que você insira uma senha e, em seguida, definirá o número de "rounds" para gerar o hash.

```bash
$ node gerarHash.js
Este script gera hashes de senhas utilizando o algoritmo bcrypt.
O bcrypt é amplamente utilizado para armazenar senhas de forma segura em bancos de dados.
O número de rounds define a quantidade de iterações que o algoritmo realiza para gerar o hash.
Quanto maior o número de rounds, mais seguro o hash, mas também mais lento o processo de geração.
Você deseja continuar? (s/n)
s
Digite sua senha: **********
Digite o número de rounds (deixe em branco para usar o padrão 10): 
Hash gerado: $2b$10$VwVZFr...   (hash gerado)
**Importante:** Guarde este hash com segurança. Ele NÃO pode ser usado para recuperar a senha original.
```
#### Opções
* Número de rounds: O número de rounds pode ser deixado em branco para usar o valor padrão de 10.
* Você também pode fornecer um valor personalizado. Quanto maior o número de rounds, maior a segurança, mas o tempo de execução também aumenta.

#### Avisos
* O hash gerado não pode ser revertido para obter a senha original.
* Guarde o hash gerado com segurança.

### Licença
Este projeto é licenciado sob a Licença MIT - consulte o arquivo LICENSE para mais detalhes.
