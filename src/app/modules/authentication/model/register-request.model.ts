import { RegisteredUser } from "./registered-user.model";

export class RegisterRequest implements NewRegisterRequest {

    registeredUser: RegisteredUser;
    email: string;
    username: string;
    password: string;

    constructor(nrui: NewRegisterRequest)
    {
        this.registeredUser = nrui.registeredUser;
        this.email = nrui.email;
        this.username = nrui.username;
        this.password = nrui.password;
    }
}
interface NewRegisterRequest{

    registeredUser: RegisteredUser;
    email: string;
    username: string;
    password: string;

}