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

function onSignupWithSocialProviderButtonTap() {
    /* ***********************************************************
    * For sign up with social provider you can add your custom logic or
    * use NativeScript plugin for sign up with Facebook
    * http://market.nativescript.org/plugins/nativescript-facebook
    *************************************************************/
}

export function onSignupButtonTap(args: EventData) {
    const button = <Button>args.object;
    const bindingContext = <<%= PascalCaseName %>ViewModel>button.bindingContext;

    bindingContext.signUp();
}
