/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/

import { EventData } from "data/observable";
import { Page } from "ui/page";
import { LoginViewModel } from "./login-view-model";
import frameModule = require("ui/frame");

import * as application from "application";

const loginViewModel = new LoginViewModel();

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = loginViewModel;
}

/* ***********************************************************
* TODO: Implement Facebook login.
*************************************************************/
export function onLoginFacebookButtonTap(): void {
}

/* ***********************************************************
* TODO: Implement Google login.
*************************************************************/
export function onLoginGoogleButtonTap(): void {
}

/* ***********************************************************
* TODO: Implement forgot password.
*************************************************************/
export function onForgotPasswordTap(): void {
}

export function onSignInButtonTap(): void {
    loginViewModel.signIn();
}
