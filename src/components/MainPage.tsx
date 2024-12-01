import '../static/css/main-page.css'
import Navbar from './Navbar';
import NavMain from './NavMain';
import Dashboard from './Dashboard';
import SideProfile from './SideProfile';
// import angleIcon from '../static/imgs/icons/angle-small-right.svg'
import bannerAvatar from '../static/imgs/icons/banner-avatar.svg'
import { useEffect, useState, useContext, createContext, ReactNode } from 'react';


export default function MainPage() {

    return (
        <div className='main'>
            <Navbar />
            <div className="main-dashboard">
                <NavMain />
                <div className="main-dashboard-content">
                    <div className="main-dashboard-banner">
                        <div className="main-dashboard-banner-text">
                            <div className="main-dashboard-banner-header">
                                <h1 style={{color: 'white', fontSize: '24px'}}>Hello <span style={{fontWeight: 'bold'}}>{"User"}</span>,</h1>
                                <p>Welcome back to the NEW ME!</p>
                                <p>Enjoy your stay and don't forget to look after yourself!</p>
                            </div>
                            <div className="main-dashboard-banner-span" style={{display: 'flex', fontWeight: '500', cursor: 'pointer', fontSize: '12px'}}>
                                <button style={{backgroundColor: '#2FA950', color: 'white', borderRadius: '20px'}}>Review today's day &gt;</button>
                                {/* <img src={angleIcon} style={{height: '100%', filter: 'invert(90%) sepia(23%) saturate(589%) hue-rotate(70deg) brightness(102%) contrast(101%)'}} /> */}
                            </div>
                        </div>
                        <img src={bannerAvatar} />
                    </div>
                </div>
                <Dashboard />
            </div>
            <SideProfile />
        </div>
    );
}