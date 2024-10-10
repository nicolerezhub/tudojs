function sortearCarta() {
    const naipes = ['Copas', 'Ouros', 'Espadas', 'Paus'];
    const numero = Math.round(Math.random() * 9) + 1;
    return `${numero} de ${naipes[Math.floor(Math.random())]}`;
}
let i = 0
const quantidade = parseInt(prompt("Quantas cartas você deseja virar?"), 10);
while (i < quantidade) {
    i++
    console.log(sortearCarta());
}
