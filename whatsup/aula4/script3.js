let carrosVetor = []
let alternativas, i, a, contador = 1

do {
    let carros = {
        modelo: prompt("Qual o modelo do carro?"),
        marca: prompt("Qual a marca do carro?"),
        ano: prompt("Qual o ano do carro?"),
        valor: Number(prompt("Qual o valor do carro?"))
    }
    carrosVetor.push(carros)

    console.log(`Carro: ${contador} \nModelo: ${carros.modelo}\nMarca: ${carros.marca}\nAno do carro: ${carros.ano}\nValor do carro: ${carros.valor}\n`)

    alternativas = Number(prompt("Se deseja continuar a inserir dados, pressione 1, caso queira finalizar pressione 0"))
    contador++
} while (alternativas != 0);

if (carrosVetor.length > 0) {
    carroMaisCaro = carrosVetor[0];

    for (i = 1; i < carrosVetor.length; i++) {
        if (carrosVetor[i].valor > carroMaisCaro.valor) {
            carroMaisCaro = carrosVetor[i];
        }
    }

    console.log(`Carro mais caro:\nModelo: ${carroMaisCaro.modelo}\nMarca: ${carroMaisCaro.marca}\nAno do carro: ${carroMaisCaro.ano}\nValor do carro: ${carroMaisCaro.valor}\n`);
} else {
    console.log("Nenhum carro foi adicionado.");
}

