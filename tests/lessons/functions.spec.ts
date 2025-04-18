/*import {test, expect, Page} from "@playwright/test";

function sayHi (name)
//
{
    const greetings = `Hello, my name is ${name}`;
    console.log(greetings)
}

sayHi('Pavlo');

//  параметр vs аргумент


// function = enum
enum COFFEES {
    EspressoMacchiato = "Espresso_Macchiato",
    Espresso = "Espresso",
    Cappuccino = "Cappuccino",
    Americano = "Americano",
    FlatWhite = "Flat_white",
}

function getCoffeeTypesByName (page: Page, coffeeName: COFFEES) {
    return page.locator(`//!*[@data-test="${coffeeName}"]`)
}

test('add order by dialog mode', async({page}) =>{

    await page.goto('https://coffee-cart.app/');
    await getCoffeeTypesByName(page, COFFEES.Americano).click({button: "right"});

    let dialogAddToCart = page.locator('[data-cy="add-to-cart-modal"]');
    await expect(dialogAddToCart).toContainText('Add Americano to the cart?YesNo');

    await dialogAddToCart.getByRole('button', {name: "Yes"}).click();
    await page.locator('[href="/cart"]').click();

    await expect(page.locator('div').filter({ hasText: /^Americano$/ })).toBeVisible();

})
*/

// function constructor

function User(name, id, age){
    this.name = name;
    this.id = id;
    this.age = age;
    this.admin = false;
    this.hello = function () {
        console.log(`Hello ${this.name}`)
    }
}

const igor = new User('Igor', 13, 18);
console.log(igor.hello());

// to add a new function to the function constuctor

User.prototype.exit = function ()  {
    console.log(`Goodbye ${this.name}`)
    }


// типизация объектов
type DataGeneral = {
    a: number,
    b: boolean,
    c: string,
    d: () => void | number  // type is void OR number
    e?: () => void
};

let data1: DataGeneral =  {
    a: 5,
    b: true,
    c: "text",
    d: function(): number {
        return this.a
    },
    e: function (): void {
        return
    }
};

let data2: DataGeneral = {
    a: 66,
    b: false,
    c: "tram",
    d: function (){
        return
}
}