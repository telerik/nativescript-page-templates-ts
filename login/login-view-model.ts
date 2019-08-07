import { Observable } from "tns-core-modules/data/observable";
import { ObservableProperty } from "./observable-property-decorator";

export class <%= PascalCaseName %>ViewModel extends Observable {
    @ObservableProperty() email: string;
    @ObservableProperty() password: string;

    constructor() {
        super();
    }

    signIn(): void {
        const email = this.email;
        const password = this.password;

        /* ***********************************************************
        * Call your custom sign in logic using the email and password data.
        *************************************************************/
    }
}
