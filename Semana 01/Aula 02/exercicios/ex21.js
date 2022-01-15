function calculate(operacao = String,num1 = Number, num2 = Number) {
    switch (operacao) {
        case "somar": 
        return console.log(num1 + num2);
        case "dividir":
        return console.log(num1 / num2);   
        case "multiplicar":
        return console.log(num1 * num2);
        case "subtrair":
        return console.log(num1 - num2); 
    
    }
}

calculate("subtrair", 5, 5)