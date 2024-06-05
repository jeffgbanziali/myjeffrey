import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import usersData from '../MyData/UserData.json';

const SignInScreen = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState(null);
    const [error, setError] = useState('');

    const navigation = useNavigate()


    const handleLogin = (event) => {
        // event.preventDefault();

        const usersData = JSON.parse(localStorage.getItem('users')) || [];
        const user = usersData.find(user => user.username === username && user.password === password);

        if (user) {
            console.log("Viens ici", user)
            if (user.role === 'student') {
                //alert("L'étudinat s'est connecté !!!");
                navigation("/", { state: { user } });
            } else if (user.role === "teacher") {
                alert("Le prof s'est connecté !!!");
                navigation("/", { state: { user } });
            } else {
                setError('Accès refusé vérifié vos coordonnées');
            }
        } else {
            setError('Identifiant ou mot de passe incorrect');
        }
    };


    return (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-end ' >
            <img src="https://auth.myefrei.fr/static/media/background-2x.6849df3c.jpg" alt="logo" className=" absolute h-[100%] w-[100%]" />

            <div className=" flex mr-20 items-center justify-center w-[40%] xl:w-[40%] rounded-xl h-[90%] xl:h-[90%]  bg-white  shadow-lg transform transition-all ease-in-out duration-300 scale-100">

                <div className='w-[80%] h-[80%] '>
                    <div className='flex w-[250px] h-24 '>
                        <img src={"https://auth.myefrei.fr/static/media/logo-efrei.65d4f0ab.png"} alt="logo" className="h-[100%] w-[100% text-gray-500" />
                    </div>

                    <div className=' w-full h-96 mt-10 '>
                        <h2 className="text-3xl font-bold text-blue-900">Connexion</h2>
                        <p className=" text-xl font-bold text-blue-900 mt-2">Utiliser votre compte Efrei</p>
                        <input
                            className='flex mt-7 items-center border border-black xl:pl-[8px] xl:w-[450px] xl:h-[45px] rounded-[10px] bg-white  text-gray-800'
                            type="text"
                            name="email"
                            id="email"
                            placeholder='Identiant ou n° de dossier'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <input
                            className='flex  xl:mt-2 items-center border  border-black xl:pl-[8px] xl:w-[450px] xl:h-[45px] rounded-[10px] bg-white  text-gray-800'
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Mot de passe'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <div className='w-full flex justify-end'>
                            <p className="mt-4 text-sm text-black">
                                Identifiants oubliés ?
                                <a href="https://www.efrei.fr/donnees-personnelles" className=" underline hover:underline"> Contactez-le +33 188 289 250</a>
                            </p>
                        </div>

                        <p className="mt-4 text-[12px] text-black">
                            En me connectant, j'accepte les {" "}
                            <a href="https://www.efrei.fr/donnees-personnelles" className="underline">conditions d'utilisations</a>
                            {" "}du service SSO Efrei notamment en matière de données personnelles.
                        </p>

                        <p className="mt-4 text-[12px] text-black">
                            Protection par reCAPTCHA  {" - "}
                            <a href="https://www.efrei.fr/donnees-personnelles" className="underline text-black">Confidentialité</a>
                            {" - "}
                            <a href="https://www.efrei.fr/donnees-personnelles" className="underline text-black">Conditions</a>

                        </p>
                        <button
                            onClick={handleLogin}
                            className="mt-6 w-36 bg-blue-500 text-white text-sm py-2 rounded-lg hover:bg-blue-600">
                            SE CONNECTER
                        </button>
                        {/*  <Link to="/">
                            
                        </Link>*/}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SignInScreen
