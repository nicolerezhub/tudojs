let altura, alturaj, peso, pesov = 0, idade, idadev = 0, idadej = 150, mediaid, rep, n = 0

do {
    idade = Number(prompt("Digite a idade de uma pessoa: "))
    altura = Number(prompt("Digite a altura dessa pessoa em cm: "))
    peso = Number(prompt("Digite seu peso de uma pessoa: "))
    rep = Number(prompt("Você quer inserir os dados(Digite 1 para sim ou 2 para não)?"))
    if (idade > idadev) {
        pesov = peso
        idadev = idade
    }
    if (idade < idadej) {
        alturaj = altura
        idadej = idade
    }
    mediaid = mediaid + idade
    n++
} while (rep == 1);
mediaid = mediaid / n
alert("A altura da pessoa mais nova é: " + alturaj)
alert("O peso da pessoa mais velha é: " + pesov)
alert("A média da idade é: " + mediaid)
//Nao tem como fazer