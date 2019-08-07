import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";

import { <%= PascalCaseName %>ViewModel } from "./<%= OriginalName %>-view-model";

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new <%= PascalCaseName %>ViewModel();
}

function onLoginWithSocialProviderButtonTap() {
    /* ***********************************************************
    * For log in with social provider you can add your custom logic or
    * use NativeScript plugin for log in with Facebook
    * http://market.nativescript.org/plugins/nativescript-facebook
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
