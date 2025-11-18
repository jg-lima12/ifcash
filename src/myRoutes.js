import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import NavBar from './layout/NavBar/NavBar';

import Home from './screens/Home/Home';
import Login from './screens/Login/Login';


export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path='/login' element={<Login/>} exact/>
            </Routes>
            <NavBar />
        </BrowserRouter>
    )
}
