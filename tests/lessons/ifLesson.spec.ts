import {test, expect} from "@playwright/test";

const a = 10;
const b = 11;

console.log( a < b );
console.log( b < a );


const res1 = {
    a: 23,
    b: 55,
    c: 67
};

const res2 = {
    a: 20,
    b: 35,
    c: 40
}

const comparisonResult = res1.c > res2.c;

console.log(comparisonResult);

// false, o, '', null, undefined or NaN
// toBeTruthy or Falsy для проверки, что пришли данные
// пример: проверяем, что пришле какой то пользовательнь с бека

const responce  = null;
expect(responce).toBeFalsy();


expect(" ").toBeTruthy();
expect(0).toBeFalsy();





test( 'expect testing', async ({}) => {

    // 10 >
    expect(10).toBeGreaterThan(9);
    // 10>=
    expect(10).toBeGreaterThanOrEqual(10);
    // 10<
    expect(10).toBeLessThan(11);
    // 10<=
    expect(10).toBeLessThanOrEqual(10);
 // boolean
    expect(true).toBeTruthy();
    expect(false).toBeFalsy()

});

// if

const temperature = 10;

if(temperature >= 15 ) {
    console.log("jacket");
};

if(temperature < 15) {
    console.log("sweater");
};

let hasTicket = true;

if(hasTicket=== true) {
    console.log('go')
};

// @ts-ignore
if(hasTicket === false){
    console.log('NoGo')
};

if(!hasTicket) {
    console.log("NoGo")
};


const young = 12;

if (young < 18) {
    console.log("Alcohol is not allowed!")
} else {
    console.log("Ok" )
};


test ('show all tags', async ({page}) => {
    await page.goto('https://demo.learnwebdriverio.com/', {
        waitUntil: "networkidle"
    });

    const tags = page.locator('.tag-list a');
    const allTags = await tags.all();

    if (allTags.length > 0) {
        for (const tag of allTags) {
            expect(await tag.textContent()).toBeTruthy();
        }
    }

});

// write a programm that will show if the number is added or not
const num = 0;

function isPositive(number: number){
    if(number > 0 ) {
        return true
    } else if (number === 0) {
        throw Error("number is zero")
    }
    else {
        return false
    }
}

test('should be positive', ()=> {
    const result = isPositive(1);
    expect(result).toBeTruthy();
});

test('should be negative', () =>{
    const result = isPositive(-1);
    expect(result).toBeFalsy();
});

test('zero should throw error', () =>{

    try { isPositive(0);
    } catch (error) {
        expect(error.message).toMatch("number is zero");
    }
});







