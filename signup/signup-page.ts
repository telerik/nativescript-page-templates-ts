import { EventData } from "data/observable";
import { Page } from "ui/page";
import { <%=PascalCaseName%>ViewModel } from "./<%=OriginalName%>-view-model";
import frameModule = require("ui/frame");

const <%=CamelCaseName%>ViewModel = new <%=PascalCaseName%>ViewModel();

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = <%=CamelCaseName%>ViewModel;
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
    <%=CamelCaseName%>ViewModel.signup();
}
