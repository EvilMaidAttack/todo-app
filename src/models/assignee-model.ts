export class Assignee{

    constructor(private _name:string, private _email?:string){

    }

    get name(){
        return this._name;
    }
    set name(new_name:string){
        this._name = (new_name != "") ? new_name : this.name;
    }

    get email(){
        return this._email;
    }
    set email(new_email:string){
        this._email = (new_email != "") ? new_email : this._email;
    }

    
}