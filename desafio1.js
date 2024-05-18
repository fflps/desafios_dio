const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Qual é o nome do seu herói? ", function(nomeHeroi) {
    rl.question("Qual é a quantidade de experiência(XP) que seu herói possui? ", function(quantXP) {
        quantXP = parseInt(quantXP);

        // função que retorna o print de saída
        function out(classificacao) {
            console.log(`O Herói de nome ${nomeHeroi} está no nível de ${classificacao}`);
        }

        // condicionais classificadoras de nível
        if (quantXP <= 1000) {
            out("Ferro");
        } else if (quantXP > 1000 && quantXP <= 2000) {
            out("Bronze");
        } else if (quantXP > 2000 && quantXP <= 5000) {
            out("Prata");
        } else if (quantXP > 5000 && quantXP <= 7000) {
            out("Ouro");
        } else if (quantXP > 7000 && quantXP <= 8000) {
            out("Platina");
        } else if (quantXP > 8000 && quantXP <= 9000) {
            out("Ascendente");
        } else if (quantXP > 9000 && quantXP <= 10000) {
            out("Imortal");
        } else if (quantXP >= 10001) {
            out("Radiante");
        }

        rl.close();
    });
});
