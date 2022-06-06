export class Staff{
    private _name:string;
    private _email:string;
    private _age:number;
    constructor(name:string, email:string, age:number){
        this._name = name;
        this._email = email;
        this._age = age;
    }
    get Name(){
        return this._name;
    }
    set Name(name:string){
        this._name = name;
    }
    get Email(){
        return this._email;
    }
    set Email(email:string){
        this._email = email;
    }
    get Age(){
        return this._age;
    }
    set Age(age:number){
        this._age = age;
    }
}