let res, rf = 0
let n = 1
res = Number(prompt("Digite o numero de inicio: "))
while (n <= 20) {
    n++
    console.log(res)
    res = res + res + 1
    rf = rf + res
}
alert(`Soma: ${rf}`)