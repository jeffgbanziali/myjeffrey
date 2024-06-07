import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../Screens/HomeScreen"
import SignInScreen from "../Screens/SignInScreen"
import StarPage from '../Screens/StartPage';
import PlanningScreen from '../Screens/PlanningScreen';
import ReleveNoteScreen from '../Screens/ReleveNoteScreen';
import Teacher from '../Screens/Teacher';
import StudentList from '../Screens/StudentList';
import EnterNote from '../Screens/EnterNote';
import Ecole from '../Screens/Ecole';
import RegisterScreen from '../Screens/RegisterScreen';

const Navigation = () => {

    const authToken = localStorage.getItem('authToken');

    console.log("mo est token est là non ? ", authToken)


    return (
        <BrowserRouter>
            <Routes>
                {
                    authToken ? <>
                        <Route path="/home" element={<HomeScreen />} />
                        <Route path="planning" element={<PlanningScreen />} />
                        <Route path="scolarite" element={<ReleveNoteScreen />} />
                        <Route path="/enter-note" element={<EnterNote />} />
                        <Route path="/ecole" element={<Ecole />} />
                        <Route path="/student-list" element={<StudentList />} />
                        <Route path="/teacher" element={<Teacher />} />
                    </> :
                        <>
                            <Route exact path="/" element={<RegisterScreen />} />
                            <Route path="start" element={<StarPage />} />
                            <Route path="sign-in" element={<SignInScreen />} />
                        </>
                }

            </Routes>
        </BrowserRouter>
    )
}

export default Navigation
