export const initialUsers = () => {
    const users = [
        {
            username: "etudiant123",
            password: "motdepasse123",
            role: 'student'
        },
        {
            username: "teacher1",
            password: "motdepasse1",
            role: 'teacher'
        },

    ];

    try {
        localStorage.setItem("users", JSON.stringify(users));
        console.log("Les utilisateurs ont été stockés avec succès dans le local storage");
    } catch (error) {
        console.error("Erreur lors du stockage des utilisateurs dans le local storage :", error);
    }
}


