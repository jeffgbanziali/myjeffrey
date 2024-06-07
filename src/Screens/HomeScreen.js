import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import { useLocation, useNavigate} from 'react-router-dom';
import studentsData from '../MyData/Students.json';
import teacherData from '../MyData/Teachers.json';

const HomeScreen = () => {
    const location = useLocation()
    const { user } = location.state
    const navigateTo = useNavigate();

    const myUser = studentsData.find(userLocal => userLocal.username === user.username) ||
        teacherData.find(userLocal => userLocal.username === user.username);

    console.log("my user", myUser)

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        navigateTo('/sign-in');
        window.location.reload();

    };
    return (
        <div className='fixed top-0 left-0 w-full h-full  bg-opacity-75 flex '>
            <div className=" flex  flex-col justify-center w-[100%]  rounded-xl h-[100%]  shadow-lg transform transition-all ease-in-out duration-300 scale-100">

                <Navbar user={myUser} />
                <div className='  w-full h-full bg-opacity-75 flex justify-center items-center'>

                    <div className=" flex items-center justify-center w-[90%] rounded-xl h-[90%]   bg-white  shadow-lg transform transition-all ease-in-out duration-300 scale-100">
                        <button
                            onClick={handleLogout}
                            className="xl:w-36  w-36 flex item-center justify-center bg-blue-500 text-white text-sm py-2 rounded-lg hover:bg-blue-600">
                            SE DECONNECTER
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeScreen
