import { Observable } from 'data/observable';

export class LoginViewModel extends Observable {
    private _password: string;
    private _username: string;

    constructor() {
        super();
    }

    get password(): string {
        return this._password;
    }

    get username(): string {
        return this._username;
    }

    set password(value: string) {
        if (this._password !== value) {
            this._password = value;
            this.notifyPropertyChange('password', value)
        }
    }

    set username(value: string) {
        if (this._username !== value) {
            this._username = value;
            this.notifyPropertyChange('username', value)
        }
    }

    signIn() {
    }
}