import { Observable } from "data/observable";
import { ObservableProperty } from "./observable-property-decorator";

export class <%=PascalCaseName%>ViewModel extends Observable {
    @ObservableProperty() password: string;
    @ObservableProperty() name: string;
    @ObservableProperty() email: string;

    constructor() {
        super();
    }

    /* ***********************************************************
    * TODO: Implement sign up.
    *************************************************************/
    signup() {
    }
}
