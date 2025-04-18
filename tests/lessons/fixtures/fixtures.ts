import {test as base} from "@playwright/test";
import {SignInPage} from "../../app/pages/SignInPage";
import {SignUpPage} from "../../app/pages/SignUpPage";


type Fixture = {
    signUpPage: SignUpPage;
}

export const test = base.extend<Fixture>({
    signUpPage: async ({}, use) => {
        const signUpPage = new SignUpPage(page);

        await use(signUpPage)



});

export const throwError = base.extend<Fixture>({
    signUpPage: async ({}, use) => {
        const signUpPage = new SignUpPage(page);

        await use(signUpPage)

    });