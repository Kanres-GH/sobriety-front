import "../static/css/main-page.css"
import Navbar from "./Navbar";
import NavMain from "./NavMain";

export default function MotivationPage() {

    return (
        <div className="main">
            <Navbar />
            <div className="main-motivation">
                <NavMain />
            </div>
        </div>
    );
}