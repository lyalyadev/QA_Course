function evenOrOddNumbers(value: number){
    if ( value%2 === 0) {
        console.log("Число парне.");
        return true
    }
    else if (value%2 != 0 ) {
        console.log("Число непарне.");
        return false
    } else {
        throw Error('Make sure if you put a number')
    }
};

function greetings(hour: number) {
    if (hour  >= 0 &&  hour < 12) {
        return 'Good morning!'
    } else if (hour > 18 && hour <= 24) {
        return 'Good night!'
    } else if (hour >=12 || hour <= 18) {
        return 'Good evening!'
    } else {
        throw Error("Please, make sure that you put hours between 0 and 24")
    }
};
greetings(23);

function notes (note: number) {
    if (note >= 50) {
        console.log("You have passed");
    }
    else {
        console.log("You are down")
    }
};
notes(45);

function voteApp (voteAge: number) {
    if(voteAge >= 18) {
        console.log("You may vote")
    } else {
        console.log("You are not allowed to vote")
    }
};
voteApp(15);

function numberComparison (a: number, b: number) {
    if (a > b) {
        console.log("Перше число більше.")
    } if (a < b) {
        console.log("Друге число більше.")
    } else {
        console.log("Числа рівні.")
    }
};
numberComparison(3, 5);


 const num = 0;

 function isPositive(number: number){
     if(number > 0 ) {
         return true
     }
      else {
         return false
     }
 }
