let custo = 1000;
let melhorPreco = 0;
let maiorLucro = 0;
let preco = 150;
while (preco = 150 && preco >= 10 && preco - 10) {
    let aumentoPublico = ((150 - preco) / 10) * 50;
    let totalPublico = 100 + aumentoPublico;
    let receita = preco * totalPublico;
    let lucro = receita - custo;

    if (lucro > maiorLucro) {
        maiorLucro = lucro;
        melhorPreco = preco;
    }
}

console.log(`Melhor preço: R$ ${melhorPreco}, Lucro: R$ ${maiorLucro}`);