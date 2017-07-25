import { Observable } from "data/observable";
import { ObservableProperty } from "./observable-property-decorator";

export class SignupViewModel extends Observable {
    @ObservableProperty() password: string;
    @ObservableProperty() name: string;
    @ObservableProperty() email: string;

    constructor() {
        super();
    }

    /* ***********************************************************
    * TODO: Implement signin.
    *************************************************************/
    signup() {
    }
}
