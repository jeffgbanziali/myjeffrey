import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';

const HomeScreen = () => {
    const location = useLocation();
    const { user } = location.state;
    const navigateTo = useNavigate();

    const studentsData = JSON.parse(localStorage.getItem('students'));
    const teachersData = JSON.parse(localStorage.getItem('teachers'));
    const myUser = studentsData.find(userLocal => userLocal.username === user.username) ||
        teachersData.find(userLocal => userLocal.username === user.username);

    return (
        <div className='top-0 left-0 w-full h-full bg-gray-100 flex flex-col'>
            <Navbar user={myUser} />
            <div className='flex flex-col items-center justify-start w-full h-full pt-6'>
                <div className='w-full max-w-7xl px-6'>

                    <div className='mb-6'>
                        <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between'>
                            <img src="https://www.efrei.fr/wp-content/uploads/2022/01/Fusion-Efrei-x-Assas-site-Efrei.png" alt="Toolbox TP / Projets" className='w-full md:w-1/2 rounded-lg mb-4 md:mb-0' />
                            <div className='md:ml-6 text-center md:text-left'>
                                <p className='text-lg font-semibold'>Toolbox TP / Projets</p>
                                <p>Jeudi 23 mai - 18h</p>
                                <p>Ouvert à tous</p>
                                <p>Inscription et informations</p>
                                <div className='flex justify-center md:justify-start'>
                                    <img src="https://logodownload.org/wp-content/uploads/2021/06/google-cloud-logo-1.png" alt="Google Cloud" className='h-8 mx-2' />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/1144px-Matlab_Logo.png" alt="MATLAB" className='h-8 mx-2' />
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/microsoft_azure_logo_icon_168977.png" alt="Microsoft Azure" className='h-8 mx-2' />
                                    <img src="https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png" alt="AWS" className='h-8 mx-2' />
                                    <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png" alt="GitHub" className='h-8 mx-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <h2 className='text-xl font-semibold mb-4'>Sur les réseaux</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg'>
                                <h3 className='text-lg font-semibold'>Instagram</h3>
                                <p className='text-sm'>Partager la passion du drone #FPV !</p>
                                <p className='text-xs text-gray-600'>15 mai 2024</p>
                                <img src="https://www.efrei.fr/wp-content/uploads/2022/05/IMG_0009-scaled.jpg" alt="Toolbox TP / Projets" className='w-full  md:w-1/2 rounded-lg mb-4 md:mb-0' />

                            </div>
                            <div className='flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg'>
                                <h3 className='text-lg font-semibold'>YouTube</h3>
                                <p className='text-sm'>Découvrir l'association @efreifalcon et son projet #solidaire FlyForEveryone.</p>
                                <p className='text-xs text-gray-600'>15 mai 2024</p>
                                <img src="https://www.efrei.fr/wp-content/uploads/2022/05/IMG_0009-scaled.jpg" alt="Toolbox TP / Projets" className='w-full  md:w-1/2 rounded-lg mb-4 md:mb-0' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
