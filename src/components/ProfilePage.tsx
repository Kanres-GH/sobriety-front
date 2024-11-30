import "../static/css/main-page.css"
import Navbar from "./Navbar";
import NavMain from "./NavMain";
import userIcon from '../static/imgs/icons/circle-user.svg'
import calendarIcon from '../static/imgs/icons/calendar-day.svg'
import { FeedUser } from "./FeedUser";
import SideProfile from "./SideProfile";

export default function ProfilePage() {

    return (
        <div className="main">
            <Navbar />
            <div className="main-profile">
                <NavMain />
                <div className="profile-content">
                    <div className="profile-content-box">
                        <div className="profile-header">
                            <img src={userIcon} />
                            <h1>EasyB88</h1>
                            <span><img src={calendarIcon} />Member since 11 May 2023</span>
                            <button type="submit">Follow</button>
                        </div>
                        <div className="profile-posts">
                            <h1>EasyB88's posts</h1>
                            <div className="profile-posts-box">
                                <FeedUser />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SideProfile />
        </div>
    );
}