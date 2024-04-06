function resultadoImc(peso, altura, sexo) {
    const imc = peso / altura ** 2

    if (sexo === "feminino")
        switch (imc) {
            case imc < 19.1:
                resultado = "Abaixo do peso"
                break
            case imc < 25.8:
                resultado = "Peso normal"
                break
            case imc < 27.3:
                resultado = "Marginalmente Acima do Peso"
                break
            case imc < 32.3:
                resultado = "Acima do Peso Ideal"
                break
            default:
                resultado = "Obeso"    
        }

    if (sexo === "masculino")
        switch (imc) {
            case imc < 20.7:
                resultado = "Abaixo do peso"
                break
            case imc < 26.4:
                resultado = "Peso normal"
                break
            case imc < 27.8:
                resultado = "Marginalmente Acima do Peso"
                break
            case imc < 31.1:
                resultado = "Acima do Peso Ideal"
                break
            default:
                resultado = "Obeso"    
        }
}

