import "../static/css/main-page.css"
import Navbar from "./Navbar";
import NavMain from "./NavMain";
import SideProfile from "./SideProfile";

export default function MotivationPage() {

    return (
        <div className="main">
            <Navbar />
            <div className="main-motivation">
                <NavMain />
                <div className="motivation-content">
                    <div className="motivation-content-box">
                        <div className="motivation-image-box gradient-background-motivation">
                            <span>Today, 1 December</span>
                            <h1>You'll shed dead weight. Lightness can be disorienting.</h1>
                        </div>
                        <div className="motivation-previous-list">
                            <h1>Previous days</h1>
                            <div className="motivation-list-item">
                                <div className="motivation-item-header">
                                    <span>Sat, 30 Nov</span>
                                    <span>Motivation</span>
                                </div>
                                <div className="motivation-item-content">
                                    <p>Your resolve solidifies. Temptation trembles before you.</p>
                                </div>
                            </div>
                            <div className="motivation-list-item">
                                <div className="motivation-item-header">
                                    <span>Fri, 29 Nov</span>
                                    <span>Motivation</span>
                                </div>
                                <div className="motivation-item-content">
                                    <p>Vitality courses through you. Lethargy withers and dies.</p>
                                </div>
                            </div>
                            <div className="motivation-list-item">
                                <div className="motivation-item-header">
                                    <span>Thu, 28 Nov</span>
                                    <span>Motivation</span>
                                </div>
                                <div className="motivation-item-content">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ex facilis totam hic ratione laudantium.</p>
                                </div>
                            </div>
                            <div className="motivation-list-item">
                                <div className="motivation-item-header">
                                    <span>Wed, 27 Nov</span>
                                    <span>Motivation</span>
                                </div>
                                <div className="motivation-item-content">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ex facilis totam hic ratione laudantium.</p>
                                </div>
                            </div>
                            <div className="motivation-list-item">
                                <div className="motivation-item-header">
                                    <span>Tue, 26 Nov</span>
                                    <span>Motivation</span>
                                </div>
                                <div className="motivation-item-content">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ex facilis totam hic ratione laudantium.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SideProfile />
        </div>
    );
}