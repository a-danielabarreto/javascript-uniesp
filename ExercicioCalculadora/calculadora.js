let operador = "+"
let numero1 = 1
let numero2 = 2

switch (operador) {
    case "+":
        resultado = numero1 + numero2
        break
    case "-":
        resultado = numero1 - numero2
        break
    case "*":
        resultado = numero1 * numero2
        break
    case "/":
        resultado = numero1 / numero2
        break
    default:
        resultado = "Operador inválido!"
    
}

console.log(resultado)