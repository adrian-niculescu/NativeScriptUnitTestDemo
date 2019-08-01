import { Observable } from "tns-core-modules/data/observable";
import * as application from 'tns-core-modules/application';

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // androidx.core.compo
        // Initialize default values.
        this._counter = 42;
        this.updateMessage();

        if (!application) {
            console.log(`application = ${application}`);
        } else if (!application.android) {
            console.log(`application.android = ${application.android}`);
        } else {
            console.log(`application.android.startAcitivity = ${application.android.startActivity}`);
            console.log(`application.android.foregroundActivity  = ${application.android.foregroundActivity}`);
        }
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange("message", value);
        }
    }

    onTap() {
        this._counter--;
        this.updateMessage();
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = "Hoorraaay! You unlocked the NativeScript clicker achievement!";
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}
