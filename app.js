let result = document.querySelector(".result");
let operator = document.querySelector(".operator");
let input = document.querySelector(".input");
let calcbtn = document.querySelector(".calcbtn");

calcbtn.addEventListener("click", () =>{
    if (operator.value == "weight"){
        result.textContent =  input.value  *  1000  + "gram";
    }
    if (operator.value == "temperature"){
        result.textContent =  ((input.value - 32)*5)/9   + "degree";
    }
    if (operator.value == "currency"){
        result.textContent =  input.value  *  415  + "naira";
    }
    if (operator.value == "distance"){
        result.textContent =  input.value  *  1000  + "meter";
    }
    if (operator.value == "money"){
        result.textContent =  input.value  *  0.00241  + "dollar";
    }
    if (operator.value == "measurement"){
        result.textContent =  input.value  / 2  + "radius";
    }
    if (operator.value == "movement"){
        result.textContent =  input.value  *  100  + "centimeter";
    }
    if (operator.value == "climate"){
        result.textContent =  (9/5 * input.value)  + 32  + "degree" ;
    }
    if (operator.value == "opposite"){
        result.textContent =  input.value  / 60 + "speed";
    }
    if (operator.value == "condition"){
        result.textContent =  (input.value - 273)  + "celsuis  ";
    }
    if (operator.value == "cash"){
        result.textContent =  input.value  *  8.52  + "chinese yuan";
    }
} )


let x = Math.PI;
console.log(x);
let n = Math.floor(x)
console.log(n);

let y = Math.pow(3,4);
console.log(y);

let u = Math.sqrt(64);
console.log(u);



let answer = document.querySelector(".answer");
let inp = document.querySelector(".inp");
let factor = document.querySelector(".factor");
let output = document.querySelector(".output");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    if (factor.value == "+"){
        answer.textContent = Number(inp.value) + Number(output.value)
    }
    if (factor.value == "-"){
        answer.textContent = Number(inp.value) - Number(output.value)
    }
    if (factor.value == "*"){
        answer.textContent = Number(inp.value) * Number(output.value)
    }
    if (factor.value == "/"){
        answer.textContent = Number(inp.value) / Number(output.value)
    }
    if (factor.value == "**"){
        answer.textContent = Number(inp.value) ** Number(output.value)
    }
    if (factor.value == "%"){
        answer.textContent = Number(inp.value) % Number(output.value)
    }
})