const bcrypt = require('bcrypt');
const readline = require('readline'); // Biblioteca para entrada de dados por linha de comando
const chalk = require('chalk'); // Biblioteca para facilitar o uso de cores ANSI

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gerarHash = async () => {
  console.log(chalk.bgWhiteBright.blue('Este script gera hashes de senhas utilizando o algoritmo bcrypt.'));
  console.log(chalk.bgWhiteBright.blue('O bcrypt é amplamente utilizado para armazenar senhas de forma segura em bancos de dados.'));
  console.log(chalk.bgBlackBright.yellowBright('O número de rounds define a quantidade de iterações que o algoritmo realiza para gerar o hash.'));
  console.log(chalk.bgBlackBright.yellowBright('Quanto maior o número de rounds, mais seguro o hash, mas também mais lento o processo de geração.'));
  console.log('Você deseja continuar? (s/n)');

  rl.question('', async (resposta) => {
    if (resposta.toLowerCase() !== 's') {
      console.log('Operação cancelada.');
      rl.close();
      return;
    }

    rl.question('Digite sua senha: ', async (senha) => {
      rl.question('Digite o número de rounds (deixe em branco para usar o padrão 10): ', async (rounds) => {
        const saltRounds = parseInt(rounds) || 10;
        try {
          const hash = await bcrypt.hash(senha, saltRounds);
          console.log('Hash gerado: ', hash);
          console.info(chalk.bgWhiteBright.red('**Importante:** Guarde este hash com segurança. Ele NÃO pode ser usado para recuperar a senha original.'));
          rl.close();
        } catch (err) {
          console.error('Erro ao gerar o hash:', err.message);
        }
      });
    });
  });
};

gerarHash();
