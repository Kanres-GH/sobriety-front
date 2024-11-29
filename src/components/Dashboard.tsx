import '../static/css/main-page.css'
import MilestoneTracker from './MileStoneTracker';
import DaysTracker from './DaysTracker';
import CurrentMilestone from './CurrentMilestone';

export default function Dashboard() {

    return (
        <div className="dashboard-grid">
            <div className="dashboard-grid-item grid-item-1">
                <DaysTracker />
            </div>
            <div className="dashboard-grid-item grid-item-2">
                <div className="dashboard-milestone-tracker">
                    <MilestoneTracker />
                </div>
                
                <h2 style={{color: 'white', fontSize: '18px', fontWeight: '500'}}>So far I have saved...</h2>
                <div className="dashboard-block" style={{    justifyContent: "space-between"}}>
                    <p style={{color: '#D6D6D6'}}>Money saved:</p>
                    <span style={{color: '#77FF6A', fontWeight: 'bold'}}>$0.00</span>
                </div>
                
                <h2 style={{color: 'white', fontSize: '18px', fontWeight: '500'}}>I'm doing this because...</h2>
                <div className="dashboard-block" style={{justifyContent: 'center'}}>
                    <p style={{color: '#D6D6D6', fontSize: '16px'}}>I want to be a better person.</p>
                </div>
            </div>
            
            <div className="dashboard-grid-item grid-item-3">
                <CurrentMilestone />
            </div>
        </div>
    );
}