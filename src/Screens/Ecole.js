import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import { useLocation } from 'react-router'

const Ecole = () => {

    const location = useLocation()
    const { user } = location.state

    return (
        <div className='fixed top-0 left-0 w-full h-full  bg-opacity-75 flex '>
            <div className=" flex  flex-col justify-center w-[100%]  rounded-xl h-[100%]  shadow-lg transform transition-all ease-in-out duration-300 scale-100">

                <Navbar user={user} />
                <div className='  w-full h-full bg-opacity-75 flex justify-center items-center'>

                    <div className=" flex items-center justify-center w-[90%] rounded-xl h-[90%]   bg-white  shadow-lg transform transition-all ease-in-out duration-300 scale-100">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecole
