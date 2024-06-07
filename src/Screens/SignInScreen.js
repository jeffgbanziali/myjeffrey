import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();


    /* const handleLogin = (event) => {
         event.preventDefault();
 
         const user = usersData.find(user => user.username === username && user.password === password) || teachersData.find(user => user.username === username && user.password === password)
 
         if (user) {
             const token = btoa(`${username}:${password}`);
             localStorage.setItem('authToken', token);
             localStorage.setItem('user', JSON.stringify(user));
             console.log("Mon user token", token)
 
             navigate("/", { state: { user } });
             window.location.reload();
         } else {
             setError('Identifiant ou mot de passe incorrect');
         }
     };*/
    const handleLogin = (event) => {
        event.preventDefault();

        const studentsData = JSON.parse(localStorage.getItem('students'));
        const teachersData = JSON.parse(localStorage.getItem('teachers'));

        const user = studentsData.find(user => user.username === username && user.password === password) || teachersData.find(user => user.username === username && user.password === password)
        console.log("user user est là", user)
        console.log("mon username", user.username, "mon mot de passe", user.password)


        if (user) {
            const token = btoa(`${username}:${password}`);
            localStorage.setItem('authToken', token);
            console.log("Mon user token", token)

            navigate("/home", { state: { user } });
            window.location.reload();
        } else {
            setError('Identifiant ou mot de passe incorrect');
        }
    };

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-end'>
            <img src="https://auth.myefrei.fr/static/media/background-2x.6849df3c.jpg" alt="background" className="absolute h-full w-full object-cover" />
            <div className="flex z-30 items-center xl:mr-20 lg:mr-20 md:mr-20 justify-center w-full md:w-[60%] lg:w-[50%] xl:w-[40%] xl:h-[90%] h-full md:h-auto md:rounded-xl bg-white shadow-lg p-6 md:p-10">
                <div className='w-full '>
                    <div className='flex justify-center md:justify-start mb-6'>
                        <img src={"https://auth.myefrei.fr/static/media/logo-efrei.65d4f0ab.png"} alt="logo" className="h-16 md:h-24" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Connexion</h2>
                    <p className="text-lg md:text-xl font-bold text-blue-900 mt-2">Utiliser votre compte Efrei</p>
                    <form onSubmit={handleLogin} className="space-y-4 items-center mt-6">
                        <input
                            className='w-full border border-gray-300 p-3 rounded-md text-gray-800'
                            type="text"
                            name="email"
                            id="email"
                            placeholder='Identifiant ou n° de dossier'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <input
                            className='w-full border border-gray-300 p-3 rounded-md text-gray-800'
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Mot de passe'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <div className='w-full flex justify-end'>
                            <p className="text-sm text-black">
                                Identifiants oubliés ? <a href="https://www.efrei.fr/donnees-personnelles" className="underline hover:underline">Contactez-le +33 188 289 250</a>
                            </p>
                        </div>
                        <p className="text-xs text-black mt-4">
                            En me connectant, j'accepte les <a href="https://www.efrei.fr/donnees-personnelles" className="underline">conditions d'utilisation</a> du service SSO Efrei notamment en matière de données personnelles.
                        </p>
                        <p className="text-xs text-black mt-4">
                            Protection par reCAPTCHA - <a href="https://www.efrei.fr/donnees-personnelles" className="underline">Confidentialité</a> - <a href="https://www.efrei.fr/donnees-personnelles" className="underline">Conditions</a>
                        </p>

                    </form>
                    <div className='w-full  xl:mt-6 mt-6 lg:items-start md:items-start xl:items-start lg:justify-start md:justify-start xl:justify-start flex  items-center justify-center'>
                        <button
                            onClick={handleLogin}
                            className="xl:w-36  w-36 flex item-center justify-center bg-blue-500 text-white text-sm py-2 rounded-lg hover:bg-blue-600">
                            SE CONNECTER
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SignInScreen;
