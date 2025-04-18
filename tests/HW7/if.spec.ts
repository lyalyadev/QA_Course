import {expect, test} from "@playwright/test";

/*
ДЗ №7
1️ Парне чи непарне число
Напишіть програму, яка визначає, чи число парне або непарне.
    Вхід: Число (наприклад, 4)
Вихід:
    "Число парне."
"Число непарне."*/

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

test('u1 number is even', ()=>{
    const even = evenOrOddNumbers(8);
    expect(even).toBeTruthy();
});

test('u2 number is not even', ()=>{
    const even = evenOrOddNumbers(7);
    expect(even).toBeFalsy();
});

test('u3 0 should throw error message', () => {
    let exception = "";
    try {
        evenOrOddNumbers(0)
    } catch (error) {
        exception = error.message;
    }
    expect(exception).toMatch('Make sure if you put a number')
});

/*
2️ Привітання за часом
 Залежно від часу доби, виведіть привітання: "Доброго ранку!", "Доброго дня!" або "Доброго вечора!".
    Вхід: Година (наприклад, 15)
Вихід:
    Якщо год < 12: "Доброго ранку!"
Якщо год 12–18: "Доброго дня!"
Якщо год > 18: "Доброго вечора!"*/


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

test('u4 show good morning min value', () => {
    const result = greetings(0);
    expect(result).toBeTruthy()
});

test('u5 show goog morning max value', () => {
    const result = greetings(11);
    expect(result).toBeTruthy()
});

test('u6 show good evening max value', () => {
    const result = greetings(12);
    expect(result).toBeTruthy()
});

test('u7 show good evening min value', () => {
    const result = greetings(18);
    expect(result).toBeTruthy()
});

test('u8 show good night max value', () =>{
    const result = greetings(24);
    expect(result).toBeTruthy()
});

test('u9 show good night min value', () => {
    const result = greetings(19);
    expect(result).toBeTruthy()
});

test('u10 show error if number mote then 24', () => {
    let exception = "";
    try {
        greetings(25)
    } catch (error) {
        exception = error.message;
    }
    expect(exception).toMatch("Please, make sure that you put hours between 0 and 24");
});


/*Перевірка оцінки
📚 Якщо бал >= 50 — "Тест складено". Якщо < 50 — "Тест не складено".*/

function notes (note: number) {
    if (note >= 50) {
        console.log("You have passed");
        return true
    }
    else {
        console.log("You are down");
        return false
    }
};
notes(45);


/*4️ Вік для голосування
 Напишіть програму, яка перевіряє, чи можна користувачу голосувати.
    Вхід: Вік (наприклад, 17)
Вихід:
    Якщо >= 18: "Ви можете голосувати."
Інакше: "Ви ще не можете голосувати."*/

function voteApp (voteAge: number) {
    if(voteAge >= 18) {
        console.log("You may vote")
            return true
    } else {
        console.log("You are not allowed to vote")
        return false
    }
};
voteApp(15);


/*5️ Порівняння чисел
⚖️ Порівняйте два числа: виведіть більше, або повідомте, що числа рівні.
    Вхід: Два числа (наприклад, 8 і 10)
Вихід:
    "Перше число більше."
"Друге число більше."
"Числа рівні."*/

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

/*6️ Дорога і світлофор
Якщо зелений — переходьте. Жовтий — підготуйтеся. Червоний — зачекайте.*/


function pedestrianRules (light: string){
    if (light = "green") {
    return "Go"
    } else if (light = "yellow") {
        return "Wait"
    } else if (light = "red") {
        return "Stop"
    } else {
        throw Error("")
    }
}



/*
7️ Визначення типу числа
Напишіть програму, яка визначає, чи число додатнє, від’ємне або дорівнює нулю.
Вхід: Число (наприклад, -5)
Вихід:
"Число додатнє."
"Число від’ємне."
"Число дорівнює нулю." */

function numberState(number: number){

};




/*
ДЗ №7
1️ Парне чи непарне число
Напишіть програму, яка визначає, чи число парне або непарне.
    Вхід: Число (наприклад, 4)
Вихід:
    "Число парне."
"Число непарне."*/














