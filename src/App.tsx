import './static/css/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import { useState, useEffect } from 'react'

export default function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/' element={<MainPage />} />
                    <Route path='/' element={<MainPage />} />
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </Router>  
        </>
    )
}


