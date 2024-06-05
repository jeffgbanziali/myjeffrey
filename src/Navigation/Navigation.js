import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../Screens/HomeScreen"
import SignInScreen from "../Screens/SignInScreen"
import StarPage from '../Screens/StartPage';
import PlanningScreen from '../Screens/PlanningScreen';
import ReleveNoteScreen from '../Screens/ReleveNoteScreen';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomeScreen />} />
                <Route path="start" element={<StarPage />} />
                <Route path="sign-in" element={<SignInScreen />} />
                <Route path="planning" element={<PlanningScreen />} />
                <Route path="scolarite" element={<ReleveNoteScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation
