import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './screens/home';
import Login from './screens/login';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path='/login' element={<Login/>} exact/>
            </Routes>
        </BrowserRouter>
    )
}
