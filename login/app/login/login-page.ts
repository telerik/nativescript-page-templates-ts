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
