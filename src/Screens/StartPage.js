import React from 'react'
import { Link } from 'react-router-dom'

const StarPage = () => {

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center'>
            <div className=" flex items-center justify-center w-[63%] xl:w-[63%]  h-[100%] xl:h-[100%]  bg-black  shadow-lg transform transition-all ease-in-out duration-300 scale-100">
                <img src={"https://www.myefrei.fr/static/media/myefrei-background-2x.8a161d15.jpg"} alt="logo" className="h-[100%] w-[100%]" />

                <div className=' absolute  w-96 h-40 items-center justify-center '>
                    <img src={"https://www.myefrei.fr/static/media/logo-myefrei-pantheon-white-2x.5780b2a5.png"} alt="logo" className="h-[100%] w-[100%" />
                </div>

            </div>
            <div className=" w-[37%] xl:w-[37%] items-center justify-center flex h-[100%] xl:h-[100%] bg-white   transform transition-all ease-in-out duration-300 scale-100">
                <div className=" p-8 0 z-30 ">
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
                {/* <div className='flex absolute bottom-0 '>
                    <img src={"https://www.myefrei.fr/static/media/logo-pantheon.80e3b4fb.svg"} alt="logo" className="h-[100%] w-[100% text-gray-500" />
                </div>*/}
            </div>
        </div>
    )
}

export default StarPage
