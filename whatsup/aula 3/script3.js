let valoresA = []
let valorInicial
let valoresB = []
let valorAleatorio
let resultado

for (let i = 0; i < 5; i++) {
    valorInicial = Number(prompt("Digite 5 valores: "))
    valoresA.push(valorInicial)
}
console.log(valoresA)
for (let i = 0; i < 5; i++) {
    valorAleatorio = Math.floor(Math.random() * 100)
    valoresB.push(valorAleatorio)
}
console.log(valoresB)

for (let i = 0; i < 5; i++) {
    resultado = valoresB[i] * valoresA[i]
    console.log(resultado)
}
