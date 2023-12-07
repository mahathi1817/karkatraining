function calc(){
    input1=document.getElementById("num1");
    input2=document.getElementById("SelectBox");
    operator=document.getElementById("num2");
    if(operator=="+"){
        result=input1+input2
    }
    else if(operator=="-"){
        result=input1-input2
    }
    else if(operator=="*"){
        result=input1*input2
    }
    else if(operator=="/"){
        result=input1/input2
    }
}