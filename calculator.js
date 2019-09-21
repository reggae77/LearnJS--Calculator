/*Init */
var preDisplayVariable = "0";
var displayVariable = "10";
var operator = "plus";
var result = "";

/*Event Listeners Numbers */

document.addEventListener('click', function(e){
    if(e.target.id=="one"){
        setDisplayVariable(1);
        setDisplayVariableHTML();
    }
    if(e.target.id=="two"){
        setDisplayVariable(2);   
        setDisplayVariableHTML();
    }
    if(e.target.id=="three"){
        setDisplayVariable(3);      
        setDisplayVariableHTML();
    }
    if(e.target.id=="four"){
        setDisplayVariable(4);       
        setDisplayVariableHTML();
    }
    if(e.target.id=="five"){
        setDisplayVariable(5);      
        setDisplayVariableHTML(); 
    }
    if(e.target.id=="six"){
        setDisplayVariable(6);   
        setDisplayVariableHTML();    
    }
    if(e.target.id=="seven"){
        setDisplayVariable(7); 
        setDisplayVariableHTML();    
    }
    if(e.target.id=="eight"){
        setDisplayVariable(8);  
        setDisplayVariableHTML();     
    }
    if(e.target.id=="nine"){
        setDisplayVariable(9); 
        setDisplayVariableHTML();      
    }
    if(e.target.id=="null"){
        setDisplayVariable(0);  
        setDisplayVariableHTML();     
    }
    if(e.target.id=="plus"){
        setOperator(plus);
    }
    if(e.target.id=="minus"){
        setOperator(minus);
    }
    if(e.target.id=="multiplication"){
        setOperator(multiplication);
    }
    if(e.target.id=="obelus"){
        setOperator(obelus);
    }
    if(e.target.id=="equal"){
        result = operate();
    }
})
/*Math functions */
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return Math.divide(a,b);
}

function operate(){
    if(operator ="plus") return add(preDisplayVariable,displayVariable);
    if(operator ="minus") return subtract(preDisplayVariable,displayVariable);
    if(operator ="multiplication") return multiply(preDisplayVariable,displayVariable);
    if(operator ="obelus") return divide(preDisplayVariable,displayVariable);
}

function setDisplayVariableHTML(){
    document.getElementById("output").innerHTML = preDisplayVariable + operator + displayVariable + result;
}

function setDisplayVariable(a){
    preDisplayVariable = displayVariable;
    displayVariable = a;
}
function setOperator(operator){
    operator = operator;
}
/* 
1. Userinput wegspeichern
2. zweiter Userinput eingeben überschreibt vorherige Variable
    und Wert davon wird in eine pre Variable weggespeichert

1. Userinput
2. Operator
3. Userinput
*/