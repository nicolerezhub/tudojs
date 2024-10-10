let elefante = Number(prompt("Quantos elefantes tem na sala?"))
let i = 1
while (i < elefante) {
    i++
    if (i == 1) {
        console.log(`${i} elefante incomoda muita gente ${i + 1} elefantes incomodam muito mais`)
    } else {
        console.log(`${i} elefantes incomodam muita gente ${i + 1} elefantes incomodam muito mais`)
    }

}