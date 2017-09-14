import { Observable } from "data/observable";
import { ObservableProperty } from "./observable-property-decorator";

export class <%=PascalCaseName%>ViewModel extends Observable {
    @ObservableProperty() password: string;
    @ObservableProperty() username: string;

    constructor() {
        super();
    }

    /* ***********************************************************
    * TODO: Implement signin.
    *************************************************************/
    signIn(): void {
    }
}
