import '../static/css/main-page.css'
import avatar from '../static/imgs/avatar.jpg'
import markerIcon from '../static/imgs/icons/marker.svg'
import SideCalendar from './SideCalendar';
import userIcon from '../static/imgs/icons/circle-user.svg'
// import bellIcon from '../static/imgs/icons/bell.svg'

export default function SideProfile() {

    return (
        <div className="side-profile">
            <div className="side-profile-user">
                <div className="side-profile-username">
                    <img src={avatar} alt="User avatar" className='user-avatar-sm' />
                    <h2 style={{color: 'white', fontWeight: 'bold', letterSpacing: 1}}>Tom Allen</h2>
                </div>
                <div className="side-profile-info">
                    <p className='side-profile-p'>25 years old</p>
                    <hr className='main-hr' style={{height: '75%', borderLeft: 'none'}}/>
                    <div className="side-profile-loc">
                        <p className='side-profile-p'><img src={markerIcon} style={{height: '75%', filter: 'invert(100%) sepia(2%) saturate(2%) hue-rotate(53deg) brightness(118%) contrast(100%)'}}/>Almaty, Kazakhstan</p>
                    </div>
                </div>
                <div className="side-profile-info-2">
                    <div className="side-profile-info-2-item">
                        <p style={{color: '#ababab'}}>Addiction</p>
                        <p style={{color: 'white', fontWeight: 'bold'}}>Alcohol</p>
                    </div>
                    <hr className='main-hr' style={{height: '100%', borderLeft: 'none'}}/>
                    <div className="side-profile-info-2-item">
                        <p style={{color: '#ababab'}}>Weight</p>
                        <p style={{color: 'white', fontWeight: 'bold'}}>80kg</p>
                    </div>
                    
                </div>
            </div>
            <div className="side-profile-calendar">
                <SideCalendar />
            </div>
            <hr className='main-hr' style={{width: '80%', alignSelf: 'center', borderTop: 'none'}}/>
            
            <h1 style={{fontSize: '20px', fontWeight: 'bold'}}>Latest Posts</h1>
            <div className="side-profile-footer">
                <div className="side-profile-post">
                    <div className="side-profile-post-pfp">
                        <img src={userIcon} alt="User" />
                    </div>
                    <div className="side-profile-post-content">
                        <h3 style={{color: 'white', fontSize: '14px'}}><span style={{fontWeight: 'bold'}}>Dennis Nedry</span> commented on <span style={{fontWeight: 'bold'}}>Isla Nublar</span>'s post</h3>
                        <p style={{fontSize: '14px', color: 'rgb(255, 255, 255, 0.75)'}}>That's fire! Keep it up 🔥🔥</p>
                        <span style={{color: 'rgb(255, 255, 255, 0.5)', fontSize: '12px'}}>12 minutes ago</span>
                    </div>
                </div>
                
            </div>
        </div>
    );
}