let numeros = []

for (let i = 0; i < 10; i++) {
    numeros[i] = Number(prompt("Digite 10 numeros: "))
    if (numeros[i] < 0) {
        console.log(`${numeros[i]}`)
    }
}