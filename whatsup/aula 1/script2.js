var resultado

for (let multiplicacao = 1; multiplicacao <= 10; multiplicacao++) {
    for (var numero = 1; numero < 10; numero++) {
        resultado = numero * multiplicacao
        alert(+numero + "x" + multiplicacao + "=" + resultado)
    }
    numero = 1
}