import '../static/css/main-page.css'
import DaysTracker from './DaysTracker';

export default function Dashboard() {

    return (
        <div className="dashboard-grid">
            <div className="dashboard-grid-item grid-item-1">
                <DaysTracker />
            </div>
            <div className="dashboard-grid-item grid-item-2">
                
            </div>
            <div className="dashboard-grid-item grid-item-3">
                
            </div>
        </div>
    );
}