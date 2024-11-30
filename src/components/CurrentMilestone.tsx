
import '../static/css/main-page.css'
import flagIcon from '../static/imgs/icons/flag.svg'

export default function CurrentMilestone() {

    return (
        <div className='current-milestone'>
            <h1 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',  color: 'white', fontSize: '24px', fontWeight: '300'}}>Current milestone <img src={flagIcon} style={{height: '20px', filter: 'invert()'}}/></h1>
            <div className="current-milestone-box">
                <h1 style={{color: 'white', fontSize: '28px', fontWeight: '600', letterSpacing: 1}}>10 Weeks</h1>
            </div>
            <p style={{fontWeight: '300'}}>Next milestone in <span style={{color: '#FF9D00'}}>5 days</span></p>
            <p style={{color: '#a1adff', cursor: 'pointer'}}><u>View all milestones</u> &gt;</p>
            {/* <button style={{color: 'white', backgroundColor: '#2FA950', borderRadius: '20px', fontWeight: '500', fontSize: '14px'}}>See my progress</button> */}
        </div>
    );
}