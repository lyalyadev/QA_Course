import {Locator, Page} from "@playwright/test";


const car = {
    color: "red",
    size: "small",
    wheelsNumber: 4,
    engine: "Electric",
    isAutomate: true,
    sitsNumber: 4,
    speedLimit: 100,
    startEngine: ()=> {console.log("Whroom")}, // method, поведение
    drive: () => {
        console.log("Car is in action")
    },
    drivetMaxSpeed: function () {
        console.log (`I am driving ${this.speedLimit} km/h`)
    },
};

/*function StudentForm(page) {
    this.page = page,
        this.fieldLocator = this.page.locator('');
    this.fieldLocator = this.page.locator('');
    this.fieldLocator = this.page.locator('');
    this.fieldLocator = this.page.locator('');
    this.fieldLocator = this.page.locator('');
}
const studentForm = new StudentForm(page).new*/

car.startEngine();
car.drive();
car.drivetMaxSpeed();

// class with definite parameters

class Car {
    color1: string;
    size: string = "small";
    wheelsNumber: number = 4;
    engine: string = "Electric";
    isAutomate: boolean = true;
    sitsNumber: number = 4;
    speedLimit: number = 100;

    constructor(color2: string) {
        this.color1 = color2;
    };

    startEngine() {
        {console.log("Whroom")}
    };

    drive() {
        console.log("Car is in action")
    };
    drivetMaxSpeed () {
    console.log (`I am driving ${this.speedLimit} km/h`)
};
    };

const yellowCar = new Car("black");
const yellowCar1 = new Car("green");

console.log(yellowCar.color1);
yellowCar;
yellowCar1



class SignUpPage {
    page: Page;
    usernameLocator: Locator;
    passwordLocator: Locator;
    emailLocator: Locator;
    signUpButtonLocator: Locator;
    baseUrl: string = "mbbjm"
    url: string = this.baseUrl + "/register";
}


    let page
    let usernameLocator
    let passwordLocator
    let emailLocator
    let signUpButtonLocator

    function setVariables(page) {
        page = page;
        usernameLocator = this.page.locator('[placeholder="Username"]');
        passwordLocator = this.page.locator('[placeholder="Password"]');
        emailLocator = this.page.locator('[placeholder="Email"]');
        signUpButtonLocator = this.page.locator('.btn');

    }










