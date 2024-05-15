export class User {
    email: string = '';
    employeeID: number = 0;
    password: string = '';

    constructor(email:string, employeeID:number, password:string) {
        this.email = email;
        this.employeeID = employeeID;
        this.password = password;
    }
}

