var opr = prompt("choose your operator: ")
var num1 = parseInt(prompt("your first number is: "))
var num2 = parseInt(prompt("your second number is: "))

    if(opr == '+')
    {
        console.log(num1 + num2 )
        alert(num1 + num2 )
    }
    else if(opr == '-'){
        console.log(num1 - num2 )
        alert(num1 - num2 )
    }
    else if(opr == '*'){
        console.log(num1 * num2 )
        alert(num1 * num2 )
    }
    else if(opr == '/') {
        console.log(num1 / num2 )
        alert(num1 / num2 )
    }