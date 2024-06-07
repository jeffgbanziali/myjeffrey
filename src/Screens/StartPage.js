import React from 'react';
import { Link } from 'react-router-dom';

const StarPage = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center'>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full bg-black shadow-lg transform transition-all ease-in-out duration-300 scale-100">
        <div className="flex flex-1 items-center justify-center w-full xl:w-[63%] h-[50%] xl:h-full bg-black">
          <img src={"https://www.myefrei.fr/static/media/myefrei-background-2x.8a161d15.jpg"} alt="background" className="h-full w-full object-cover" />
          <div className='absolute w-64 h-24 xl:w-96 xl:h-40 flex items-center justify-center'>
            <img src={"https://www.myefrei.fr/static/media/logo-myefrei-pantheon-white-2x.5780b2a5.png"} alt="logo" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="flex flex-1 w-full xl:w-[37%] h-[50%] xl:h-full items-center justify-center bg-white">
          <div className="p-8 z-30 text-center xl:text-left">
            <h2 className="text-3xl font-bold text-blue-900">BIENVENUE</h2>
            <p className="text-orange-500 mt-2">SUR LA PLATEFORME WEB DE L'EFREI</p>
            <p className="text-gray-600 mt-4">Retrouvez l'ensemble de vos services sur myEfrei.</p>
            <Link to="/sign-in">
              <button className="mt-6 w-48 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                SE CONNECTER
              </button>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              © 2024 Efrei | Établissement d'enseignement supérieur technique privé
              <br />
              <a href="https://www.efrei.fr/donnees-personnelles" className="text-blue-500 hover:underline">Données personnelles</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarPage;
