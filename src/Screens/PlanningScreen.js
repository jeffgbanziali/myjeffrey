import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import { useLocation, useParams } from 'react-router-dom';
import MyCalendar from '../components/MyCalendar/MyCalendar';

const PlanningScreen = () => {
    const location = useLocation()
    const { user } = location.state




    return (
        <div className=' top-0 left-0 w-full h-full  bg-opacity-75 flex '>
            <div className=" flex  flex-col justify-center w-[100%]  rounded-xl h-[100%]  shadow-lg transform transition-all ease-in-out duration-300 scale-100">

                <Navbar user={user} />
                <div className='bg-white pt-10 pb-10 w-full h-full bg-opacity-75 flex justify-center items-center'>

                    <div className=" flex items-center justify-center w-[80%] rounded-xl h-[100%]   shadow-lg transform transition-all ease-in-out duration-300 scale-100">
                        <MyCalendar user={user} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanningScreen
