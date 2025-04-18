
var var1 = "test";
var var1 = "rest";

console.log(var1);

//let var1 = "urufhn";

console.log(var1);

// область видимости

if(true){
    // блоковая область видимости
    let someBlockVariable = 124587;
    console.log(someBlockVariable);
};

// console.log(someBlockVariable) - is not seen, because let is in the function
