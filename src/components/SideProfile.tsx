import '../static/css/main-page.css'
import avatar from '../static/imgs/icons/circle-user.svg'
// import markerIcon from '../static/imgs/icons/marker.svg'
import SideCalendar from './SideCalendar';
import userIcon from '../static/imgs/icons/circle-user.svg'
// import bellIcon from '../static/imgs/icons/bell.svg'
import { useAuth } from './AuthProvider';
import { useEffect, useState } from 'react';

export default function SideProfile() {
    const [selectedAddiction, setSelectedAddiction] = useState<string | null>(null);

    const { username } = useAuth()

    const soberDays = ["2024-11-20", "2024-11-21", "2024-11-22", "2024-11-19", "2024-11-23", "2024-11-24", "2024-11-25", "2024-11-26", "2024-11-28", "2024-11-29"];
    const resetDays = ["2024-11-27"];
    
    useEffect(() => {
        const addiction = localStorage.getItem("addiction");
        setSelectedAddiction(addiction);
    }, []);

    return (
        <div className="side-profile">
            <div className="side-profile-user">
                <div className="side-profile-username">
                    <img src={avatar} alt="User avatar" className='user-avatar-sm' />
                    <h2 style={{color: 'white', fontWeight: 'bold', letterSpacing: 1, fontSize: '20px'}}>{username}</h2>
                </div>
                {/* <div className="side-profile-info">
                    <p className='side-profile-p'>25 years old</p>
                    <hr className='main-hr' style={{height: '75%', borderLeft: 'none'}}/>
                    <div className="side-profile-loc">
                        <p className='side-profile-p'><img src={markerIcon} style={{height: '75%', filter: 'invert(100%) sepia(2%) saturate(2%) hue-rotate(53deg) brightness(118%) contrast(100%)'}}/>Almaty, Kazakhstan</p>
                    </div>
                </div> */}
                <div className="side-profile-info-2">
                    <div className="side-profile-info-2-item">
                        <p style={{color: '#ababab', fontSize: '12px'}}>Addiction</p>
                        <p style={{color: 'white', fontWeight: '500', letterSpacing: 1}}>{selectedAddiction ? selectedAddiction : "Not set"}</p>
                    </div>
                    
                </div>
            </div>
            <div className="side-profile-calendar">
                <SideCalendar soberDays={soberDays} resetDays={resetDays} />
            </div>
            <hr className='main-hr' style={{width: '80%', alignSelf: 'center', borderTop: 'none'}}/>
            
            <h1 style={{fontSize: '20px', fontWeight: 'bold'}}>Latest Posts</h1>
            <div className="side-profile-footer">

                <div className="side-profile-post">
                    <div className="side-profile-post-pfp">
                        <img src={userIcon} alt="User" />
                    </div>
                    <div className="side-profile-post-content">
                        <h3 style={{color: 'white', fontSize: '12px'}}><span style={{fontWeight: '600'}}>Dennis Nedry</span> commented on <span style={{fontWeight: '600'}}>Isla Nublar</span>'s post</h3>
                        <p style={{fontSize: '12px', color: 'rgb(255, 255, 255, 0.75)', fontWeight: '300'}}>That's fire! Keep it up 🔥🔥</p>
                        <span style={{color: 'rgb(255, 255, 255, 0.5)', fontSize: '12px', fontWeight: '200'}}>12 minutes ago</span>
                    </div>
                </div>
                
                <div className="side-profile-post">
                    <div className="side-profile-post-pfp">
                        <img src={userIcon} alt="User" />
                    </div>
                    <div className="side-profile-post-content">
                        <h3 style={{color: 'white', fontSize: '12px'}}><span style={{fontWeight: '600'}}>Dennis Nedry</span> commented on <span style={{fontWeight: '600'}}>Isla Nublar</span>'s post</h3>
                        <p style={{fontSize: '12px', color: 'rgb(255, 255, 255, 0.75)', fontWeight: '300'}}>That's fire! Keep it up 🔥🔥</p>
                        <span style={{color: 'rgb(255, 255, 255, 0.5)', fontSize: '12px', fontWeight: '200'}}>12 minutes ago</span>
                    </div>
                </div>

                <div className="side-profile-post">
                    <div className="side-profile-post-pfp">
                        <img src={userIcon} alt="User" />
                    </div>
                    <div className="side-profile-post-content">
                        <h3 style={{color: 'white', fontSize: '12px'}}><span style={{fontWeight: '600'}}>Dennis Nedry</span> commented on <span style={{fontWeight: '600'}}>Isla Nublar</span>'s post</h3>
                        <p style={{fontSize: '12px', color: 'rgb(255, 255, 255, 0.75)', fontWeight: '300'}}>That's fire! Keep it up 🔥🔥</p>
                        <span style={{color: 'rgb(255, 255, 255, 0.5)', fontSize: '12px', fontWeight: '200'}}>12 minutes ago</span>
                    </div>
                </div>

                <div className="side-profile-post">
                    <div className="side-profile-post-pfp">
                        <img src={userIcon} alt="User" />
                    </div>
                    <div className="side-profile-post-content">
                        <h3 style={{color: 'white', fontSize: '12px'}}><span style={{fontWeight: '600'}}>Dennis Nedry</span> commented on <span style={{fontWeight: '600'}}>Isla Nublar</span>'s post</h3>
                        <p style={{fontSize: '12px', color: 'rgb(255, 255, 255, 0.75)', fontWeight: '300'}}>That's fire! Keep it up 🔥🔥</p>
                        <span style={{color: 'rgb(255, 255, 255, 0.5)', fontSize: '12px', fontWeight: '200'}}>12 minutes ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
}