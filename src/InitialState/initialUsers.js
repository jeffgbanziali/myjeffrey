import usersData from '../MyData/Students.json';
import teachersData from '../MyData/Teachers.json';




export const initialUsers = () => {

    const students = usersData
    const teachers = teachersData


    try {
        localStorage.setItem("teachers", JSON.stringify(teachers));
        localStorage.setItem("students", JSON.stringify(students));
        console.log("Les utilisateurs ont été stockés avec succès dans le local storage");
    } catch (error) {
        console.error("Erreur lors du stockage des utilisateurs dans le local storage :", error);
    }
}



