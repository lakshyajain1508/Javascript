function print_result(){

    let number1 = document.getElementById("n1").value;
    let number2 = document.getElementById("n2").value;
    let operator = document.getElementById("opp").value;

    print = document.getElementById("result");


    switch(operator){
        case '+' : print.innerHTML = +number2+ +number1;
        break;
        case '-' : print.innerHTML = number2- number1;
        break;
        case '*' : print.innerHTML = number2*number1;
        break;
        case '/' : print.innerHTML = number2 /number1;
        break;
        default : alert("select one");
    }

}