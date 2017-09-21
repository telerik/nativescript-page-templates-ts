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

export function onSignupFacebookButtonTap() {
    /* ***********************************************************
    * Call your Facebook signup logic here.
    *************************************************************/
}

export function onSignupGoogleButtonTap() {
    /* ***********************************************************
    * Call your Google signup logic here.
    *************************************************************/
}

export function onSignupButtonTap(args: EventData) {
    const button = <Button>args.object;
    const bindingContext = <<%= PascalCaseName %>ViewModel>button.bindingContext;

    bindingContext.signUp();
}
