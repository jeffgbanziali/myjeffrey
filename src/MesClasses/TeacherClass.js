import { UserClass } from "./UserClass";

export class TeacherClass extends UserClass {
    constructor(id, username, password, nom, prenom, email, courses = []) {
        super(id, username, password, 'teacher', nom, prenom, email);
        this.courses = courses;
    }
}