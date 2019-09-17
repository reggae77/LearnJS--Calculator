var displayVariable = "10";
/*Event Listeners Numbers */

document.addEventListener('click', function(e){
    if(e.target.id=="one"){
        displayVariable = 1;
    }
    if(e.target.id=="two"){
        displayVariable = 2;
    }
    if(e.target.id=="three"){
        displayVariable = 3;
      
    }
    if(e.target.id=="four"){
        displayVariable = 4;
       
    }
    if(e.target.id=="five"){
        displayVariable = 5;
       
    }
    if(e.target.id=="six"){
        displayVariable = 6;
       
    }
    if(e.target.id=="seven"){
        displayVariable = 7;
       
    }
    if(e.target.id=="eight"){
        displayVariable = 8;
       
    }
    if(e.target.id=="nine"){
        displayVariable = 9;
       
    }
    if(e.target.id=="null"){
        displayVariable = 0;
       
    }
    setDisplayVariable();
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

function operate(operator,a,b){
    if(operator ="plus") return add(a,b);
    if(operator ="minus") return subtract(a,b);
    if(operator ="multiplication") return multiply(a,b);
    if(operator ="obelus") return divide(a,b);
}

function setDisplayVariable(){
    document.getElementById("output").innerHTML = displayVariable;
}


