import { Observable } from 'data/observable';

export class SignupViewModel extends Observable {
    private _name: string;
    private _email: string;
    private _password: string;

    constructor() {
        super();
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    set name(value: string) {
        if (this._name !== value) {
            this._name = value;
            this.notifyPropertyChange('name', value)
        }
    }

    set email(value: string) {
        if (this._email !== value) {
            this._email = value;
            this.notifyPropertyChange('email', value)
        }
    }

    set password(value: string) {
        if (this._password !== value) {
            this._password = value;
            this.notifyPropertyChange('password', value)
        }
    }

    signup() {
    }
}