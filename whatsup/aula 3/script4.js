let valores = []
let valor
let intervalo1
let intervalo2
for (let i = 0; i < 10; i++) {
    valor = Number(prompt("DIgite 10 numeros: "))
    valores.push(valor)
}

intervalo1 = Number(prompt("Digite o primeiro valor do intervalo"))
intervalo2 = Number(prompt("Digite o segundo valor do intervalo"))

for (let i = 0; i < 10; i++) {
    if (valores[i] >= intervalo1 && valores[i] < intervalo2)
        console.log(`Indice: ${i} Valor: ${valores[i]}`)
}
