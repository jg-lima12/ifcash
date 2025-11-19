import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import NavBar from './layout/NavBar/NavBar';

import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import User from './screens/User/User'
import Help from './screens/Help/Help';


export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path='/login' element={<Login />} />
                <Route path='/user' element={<User />} />
                <Route path='/help' element={<Help />} />
            </Routes>
            <NavBar />
        </BrowserRouter>
    )
}
