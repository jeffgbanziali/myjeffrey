import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentClass } from '../MesClasses/StudentClass';
import { TeacherClass } from '../MesClasses/TeacherClass';
import { GuestClass } from '../MesClasses/GuessClass';

const RegisterScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const generateEmail = (prenom, nom) => {
        const email = `${prenom.toLowerCase()}.${nom.toLowerCase()}@myjeffrey.net`;
        return email;
    };

    const handleRegister = (event) => {
        event.preventDefault();
        const email = generateEmail(prenom, nom);

        let newUser;
        if (role === 'student') {
            newUser = new StudentClass(Date.now(), username, password, nom, prenom, email);
        } else if (role === 'teacher') {
            newUser = new TeacherClass(Date.now(), username, password, nom, prenom, email);
        } else {
            newUser = new GuestClass(Date.now(), username, password, nom, prenom, email);
        }

        if (newUser.role === "student") {
            const usersData = JSON.parse(localStorage.getItem('students')) || [];
            usersData.push(newUser);
            localStorage.setItem('students', JSON.stringify(usersData));
        } else if (newUser.role === "teacher") {
            const usersData = JSON.parse(localStorage.getItem('teachers')) || [];
            usersData.push(newUser);
            localStorage.setItem('teachers', JSON.stringify(usersData));
        } else {
            const usersData = JSON.parse(localStorage.getItem('guest')) || [];
            usersData.push(newUser);
            localStorage.setItem('guest', JSON.stringify(usersData));
        }

        setUsername('');
        setPassword('');
        setRole('student');
        setNom('');
        setPrenom('');
        setError('');

        console.log("Mon nouvel user", newUser)
        navigate('/');
    };

    return (
        <div className="flex  items-center justify-center min-h-screen bg-gray-900 bg-opacity-75 px-4 sm:px-6 lg:px-8">
            <img src="https://auth.myefrei.fr/static/media/background-2x.6849df3c.jpg" alt="background" className="absolute h-full w-full object-cover" />
            <div className="max-w-md w-full space-y-8 z-10 bg-white p-8 rounded-lg shadow-lg">
                <div className='flex justify-center md:justify-start mb-6'>
                    <img src={"https://auth.myefrei.fr/static/media/logo-efrei.65d4f0ab.png"} alt="logo" className="h-16 md:h-24" />
                </div>
                <h2 className="text-xl font-bold text-center text-blue-900">Enregistrer vous sur notre espace</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleRegister} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm space-y-2">
                        <div className="mb-4">
                            <input
                                id="username"
                                name="username"
                                placeholder='Identifiant ou n° de dossier'
                                type="text"
                                autoComplete="username"
                                required
                                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder='Mot de passe'
                                required
                                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <select
                                id="role"
                                name="role"
                                autoComplete="role"
                                required
                                placeholder='Entrer votre rôle sur notre espace'
                                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                                <option value="guest">Guest</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <input
                                id="prenom"
                                name="prenom"
                                type="text"
                                autoComplete="given-name"
                                required
                                placeholder='Entrer votre nom'
                                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={prenom}
                                onChange={(e) => setPrenom(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                id="nom"
                                name="nom"
                                type="text"
                                autoComplete="family-name"
                                required
                                placeholder='Entrer votre prenom'
                                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                            />
                        </div>

                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Register
                        </button>
                        <button
                            onClick={() => navigate('/start')}
                            className="group mt-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Aller vous connecter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterScreen;
