import { EventData } from "data/observable";
import { Page } from "ui/page";
import { SignupViewModel } from "./signup-view-model";
import frameModule = require("ui/frame");

const signupViewModel = new SignupViewModel();

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = signupViewModel;
}

/* ***********************************************************
* TODO: Implement Facebook sign up.
*************************************************************/
export function onSignupFacebookButtonTap() {
}

/* ***********************************************************
* TODO: Implement Google login up.
*************************************************************/
export function onSignupGoogleButtonTap() {
}

export function onSignupButtonTap() {
    signupViewModel.signup();
}
