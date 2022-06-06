"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
class Staff {
    constructor(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    get Name() {
        return this._name;
    }
    set Name(name) {
        this._name = name;
    }
    get Email() {
        return this._email;
    }
    set Email(email) {
        this._email = email;
    }
    get Age() {
        return this._age;
    }
    set Age(age) {
        this._age = age;
    }
}
exports.Staff = Staff;
