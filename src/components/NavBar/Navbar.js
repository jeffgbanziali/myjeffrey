import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";

const Navbar = ({ user }) => {
    const image = "https://www.efrei.fr/wp-content/uploads/2022/01/LOGO_EFREI-PRINT_EFREI-WEB.png";
    const navigation = useNavigate();

    const navigateTo = (path) => {
        navigation(path, { state: { user } });
    };

    return (
        <>
            <div className='z-10 flex flex-col justify-center h-[120px] shadow-lg xl:w-[100%]'>
                <div className='bg-blue-300  h-[50%] w-full  items-center flex'>
                    <div className='flex items-center p-2'>
                        <div className='flex justify-center h-10 w-72'>
                            <NavLink to="/">
                                <img src={image} alt="logo" className="h-[100%] w-[100%" />
                            </NavLink>
                            <div className='ml-10 h-8 w-20 flex border border-red-500 justify-center items-center rounded-xl'>
                                <p>{user.role}</p>
                            </div>
                        </div>
                        <div className='h-8 w-[500px]  bg-gray-100 rounded-xl justify-center hidden xl:flex xl:items-center ml-4'>
                            <FiSearch className='h-4 w-4 ml-2 text-gray-500' />
                            <input type="text" placeholder='Rechercher une ressource' className='h-full w-full  bg-gray-100 rounded-full focus:outline-none ml-2' />
                        </div>
                    </div>
                    <div className='flex w-[1000px] items-center justify-end'>
                        <div className='w-[200px] items-center flex'>
                            <p className='font-bold text-white'>
                                {user.prenom} {user.nom}
                            </p>
                            <div className='ml-4 mr-10 w-8 h-8 rounded-full'>
                                <img className="w-full h-full rounded-full" src={"https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png"} alt="Profil" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[50%] w-full items-center justify-center flex'>
                    <div className='flex  w-[800px] h-full'>
                        <ul className="flex justify-around w-full p-4">
                            {
                                user.role === "student" ? (
                                    <>

                                        <li><button onClick={() => navigateTo('/')}>Accueil</button></li>
                                        <li><button onClick={() => navigateTo('/planning')}>Planning</button></li>
                                        <li><button onClick={() => navigateTo('/scolarite')}>Scolarité</button></li>
                                        <li><button onClick={() => navigateTo('/ecole')}>L'École</button></li>
                                        <li><button onClick={() => navigateTo('/vie-etudiante')}>Vie étudiante</button></li>
                                        <li><button onClick={() => navigateTo('/stage-alternance')}>Stage et alternance</button></li>
                                        <li><button onClick={() => navigateTo('/outils-aides')}>Outils et aides</button></li>
                                    </>

                                ) : (
                                    <>

                                        <li><button onClick={() => navigateTo('/')}>Accueil</button></li>
                                        <li><button onClick={() => navigateTo('/planning')}>Planning</button></li>
                                        <li><button onClick={() => navigateTo('/enter-note')}>Rentrer les notes</button></li>
                                        <li><button onClick={() => navigateTo('/ecole')}>L'École</button></li>
                                        <li><button onClick={() => navigateTo('/student-list')}>Mes étudiants</button></li>
                                        <li><button onClick={() => navigateTo('/techear')}>Mon parcours</button></li>
                                        <li><button onClick={() => navigateTo('/outils-aides')}>Outils et aides</button></li>
                                    </>

                                )
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
