import '../static/css/main-page.css'
import MilestoneTracker from './MileStoneTracker';
import DaysTracker from './DaysTracker';

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
                <hr style={{opacity: 0.5, width: '75%', alignSelf: 'center'}} />
                <h2 style={{color: 'white', fontSize: '22px'}}>So far I have saved...</h2>
                <div className="dashboard-savings-block" style={{    justifyContent: "space-between"}}>
                    <p style={{color: '#D6D6D6', fontSize: '20px'}}>Money saved:</p>
                    <span style={{color: '#77FF6A', fontWeight: 'bold', fontSize: '20px'}}>$0.00</span>
                </div>
                <hr style={{opacity: 0.5, width: '75%', alignSelf: 'center'}} />
                <h2 style={{color: 'white', fontSize: '22px'}}>I'm doing this because...</h2>
                <div className="dashboard-savings-block" style={{justifyContent: 'center'}}>
                    <p style={{color: '#D6D6D6', fontSize: '16px'}}>I want to be a better person.</p>
                </div>
            </div>
            
            <div className="dashboard-grid-item grid-item-3">
                
            </div>
        </div>
    );
}