import { Observable } from "data/observable";
import { ObservableProperty } from "./observable-property-decorator";

export class LoginViewModel extends Observable {
    @ObservableProperty() password: string;
    @ObservableProperty() username: string;

    constructor() {
        super();
    }

    signIn() {
    }
}
