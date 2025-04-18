

storageState: async ({ browser, authData }, use) => {

    console.log("storageState");
    const filePath = "tests/lessons/"

    await signUpPage.registerUser(authData);

    await page.waitForResponse("**/api?users");

    await page.context().storageState({path: filePath});

    await page.close();

}


}