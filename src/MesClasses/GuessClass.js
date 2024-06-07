import { UserClass } from "./UserClass";

export class GuestClass extends UserClass {
    constructor(id, username, password, nom, prenom, email) {
        super(id, username, password, 'guest', nom, prenom, email);
    }
}
