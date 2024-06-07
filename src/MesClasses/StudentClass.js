import { UserClass } from "./UserClass";

export class StudentClass extends UserClass {
    constructor(id, username, password, nom, prenom, email, cours_suivis = [], notes = {}) {
        super(id, username, password, 'student', nom, prenom, email);
        this.cours_suivis = cours_suivis;
        this.notes = notes;
    }
}
