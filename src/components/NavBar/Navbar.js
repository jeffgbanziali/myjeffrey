import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ user }) => {
    const image = "https://www.efrei.fr/wp-content/uploads/2022/01/LOGO_EFREI-PRINT_EFREI-WEB.png";
    const navigation = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigateTo = (path) => {
        navigation(path, { state: { user } });
        setIsMenuOpen(false);
    };



    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        navigateTo('/sign-in');
        window.location.reload();

    };

    return (
        <>
            <div className='z-10 flex flex-col items-center justify-center  xl:h-[120px] h-[90px] shadow-lg w-full'>
                <div className='bg-blue-300 xl:h-[50%] h-full w-full flex items-center p-2'>
                    <div className='flex items-center w-full lg:w-1/3 p-2'>
                        <NavLink to="/" className='flex items-center'>
                            <img src={image} alt="logo" className="h-8 w-auto" />
                            <div className='ml-4 h-8 w-20 p-2 xl:text-[14px] text-[12px] flex border border-red-500 justify-center items-center rounded-xl'>
                                <p>{user.role}</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='hidden lg:flex items-center w-1/3 justify-center'>
                        <div className='h-8 w-full max-w-xs bg-gray-100 rounded-xl flex items-center'>
                            <FiSearch className='h-4 w-4 ml-2 text-gray-500' />
                            <input type="text" placeholder='Rechercher une ressource' className='h-full w-full bg-gray-100 rounded-full focus:outline-none ml-2' />
                        </div>
                    </div>
                    <div className='flex items-center w-full lg:w-1/3 justify-end'>
                        <p className='font-bold xl:text-[16px] text-[10px] text-white'>
                            {user.prenom} {user.nom}
                        </p>
                        <div className='ml-4 xl:w-8 xl:h-8 h-6 w-6 mr-4 rounded-full'>
                            <img className="w-full h-full rounded-full" src="https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png" alt="Profil" />
                        </div>
                        <button
                            onClick={handleLogout}
                            className="xl:w-24  w-24 flex item-center justify-center bg-blue-500 text-white text-[8px] py-2 rounded-lg hover:bg-blue-600">
                            SE DECONNECTER
                        </button>
                        <div className='lg:hidden ml-4'>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <FiX className='h-8 w-8 text-white' /> : <FiMenu className='h-8 w-8 text-white' />}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={` xl:h-[50%] w-[800px] xl:flex items-center justify-center ${isMenuOpen === true && 'hidden'} lg:flex`}>
                    <ul className={`xl:flex hidden  justify-around w-full  ${isMenuOpen === true && 'hidden'} p-4 `}>
                        {user.role === "student" ? (
                            <>
                                <li><button onClick={() => navigateTo('/home')}>Accueil</button></li>
                                <li><button onClick={() => navigateTo('/planning')}>Planning</button></li>
                                <li><button onClick={() => navigateTo('/scolarite')}>Scolarité</button></li>
                                <li><button onClick={() => navigateTo('/ecole')}>L'École</button></li>
                                <li><button onClick={() => navigateTo('/vie-etudiante')}>Vie étudiante</button></li>
                                <li><button onClick={() => navigateTo('/stage-alternance')}>Stage et alternance</button></li>
                                <li><button onClick={() => navigateTo('/outils-aides')}>Outils et aides</button></li>
                            </>
                        ) : user.role === "teacher" ? (
                            <>
                                <li><button onClick={() => navigateTo('/home')}>Accueil</button></li>
                                <li><button onClick={() => navigateTo('/planning')}>Planning</button></li>
                                <li><button onClick={() => navigateTo('/enter-note')}>Rentrer les notes</button></li>
                                <li><button onClick={() => navigateTo('/ecole')}>L'École</button></li>
                                <li><button onClick={() => navigateTo('/student-list')}>Mes étudiants</button></li>
                                <li><button onClick={() => navigateTo('/teacher')}>Mon parcours</button></li>
                                <li><button onClick={() => navigateTo('/outils-aides')}>Outils et aides</button></li>
                            </>
                        ) : null
                        }
                    </ul>
                </div>

            </div>  {
                isMenuOpen && (
                    <>
                        <div className='bg-blue-300 w-full h-[600px]'>
                            <ul className="flex flex-col  item-center justify-center space-y-2 lg:flex-row lg:w-[800px] h-full lg:justify-around p-4">
                                {user.role === "student" ? (
                                    <>
                                        <li><button onClick={() => navigateTo('/home')}>Accueil</button></li>
                                        <li><button onClick={() => navigateTo('/planning')}>Planning</button></li>
                                        <li><button onClick={() => navigateTo('/scolarite')}>Scolarité</button></li>
                                        <li><button onClick={() => navigateTo('/ecole')}>L'École</button></li>
                                        <li><button onClick={() => navigateTo('/vie-etudiante')}>Vie étudiante</button></li>
                                        <li><button onClick={() => navigateTo('/stage-alternance')}>Stage et alternance</button></li>
                                        <li><button onClick={() => navigateTo('/outils-aides')}>Outils et aides</button></li>
                                    </>
                                ) : user.role === "teacher" ? (
                                    <>
                                        <li><button onClick={() => navigateTo('/home')}>Accueil</button></li>
                                        <li><button onClick={() => navigateTo('/planning')}>Planning</button></li>
                                        <li><button onClick={() => navigateTo('/enter-note')}>Rentrer les notes</button></li>
                                        <li><button onClick={() => navigateTo('/ecole')}>L'École</button></li>
                                        <li><button onClick={() => navigateTo('/student-list')}>Mes étudiants</button></li>
                                        <li><button onClick={() => navigateTo('/teacher')}>Mon parcours</button></li>
                                        <li><button onClick={() => navigateTo('/outils-aides')}>Outils et aides</button></li>
                                    </>
                                ) : null
                                }
                            </ul>
                        </div>

                    </>
                )
            }
        </>
    );
}

export default Navbar;
