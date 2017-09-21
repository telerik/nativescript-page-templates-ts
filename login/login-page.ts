import { EventData } from "data/observable";
import { Button } from "ui/button";
import { Page } from "ui/page";

import { <%= PascalCaseName %>ViewModel } from "./<%= OriginalName %>-view-model";

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new <%= PascalCaseName %>ViewModel();
}

export function onLoginFacebookButtonTap(): void {
    /* ***********************************************************
    * Call your Facebook login logic here.
    *************************************************************/
}

export function onLoginGoogleButtonTap(): void {
    /* ***********************************************************
    * Call your Google login logic here.
    *************************************************************/
}

export function onSignInButtonTap(args: EventData): void {
    const button = <Button>args.object;
    const bindingContext = <<%= PascalCaseName%>ViewModel>button.bindingContext;

    bindingContext.signIn();
}

export function onForgotPasswordTap(): void {
    /* ***********************************************************
    * Call your Forgot Password logic here.
    *************************************************************/
}
