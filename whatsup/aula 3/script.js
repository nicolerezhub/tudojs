let nomes = []
let notas = []
let media, soma = 0

for (let i = 0; i < 5; i++) {
    notas[i] = Number(prompt("Digite sua nota: "))
    nomes[i] = Number(prompt("Digite sua nota: "))
    soma = soma + notas[i]
}
media = soma / 5
for (let n = 0; n < 5; n++) {
    if (notas[n] < media) {
        console.log(notas[n])
    }
}
