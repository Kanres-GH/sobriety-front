import '../static/css/main-page.css'
import rightCircle from '../static/imgs/icons/angle-circle-right.svg'
import leftCircle from '../static/imgs/icons/angle-circle-left.svg'
import { useState, useEffect } from 'react';
import resetIcon from '../static/imgs/icons/duration.svg'


export default function DaysTracker() {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    // const { startDate } = sobrietyData;
    const divs = [
        {
            id: 1,
            content:
                <div className='main-tracker-wrapper tracker-div'>
                    <div className='main-tracker-header' style={{width: '100%', textAlign: 'center', margin: '5px'}}>
                        <span style={{color: 'rgb(255, 255, 255, 0.7)', fontSize: '12px'}}>I've been alcohol free for</span>
                    </div>
                    <hr style={{width: '80%'}}/>
                    <div className="main-tracker">
                        <hr className='main-hr' style={{height: '100%', borderColor: 'white', borderLeft: 'none'}}/>
                        <div className="main-tracker-digits" style={{background: `linear-gradient(0deg, #4EAB5F ${0}%, rgb(0, 0, 0, 0) 0%)`}}>
                            <div className="main-tracker-digits-box">
                                <h1>0</h1>
                                <p>years</p>
                            </div>
                        </div>
                        <hr className='main-hr' style={{height: '100%', borderColor: 'white', borderLeft: 'none'}}/>
                        <div className="main-tracker-digits" style={{background: `linear-gradient(0deg, #4EAB5F ${100 / 12 * 2}%, rgb(0, 0, 0, 0) 0%)`}}>
                            <div className="main-tracker-digits-box">
                                <h1>2</h1>
                                <p>months</p>
                            </div>
                        </div>
                        <hr className='main-hr' style={{height: '100%', borderColor: 'white', borderLeft: 'none'}}/>
                        <div className="main-tracker-digits" style={{background: `linear-gradient(0deg, #3A9C72 ${100 / 30 * 14}%, rgb(0, 0, 0, 0) 0%)`}}>
                            <div className="main-tracker-digits-box">
                                <h1>14</h1>
                                <p>days</p>
                            </div>
                        </div>
                        <hr className='main-hr' style={{height: '100%', borderColor: 'white', borderLeft: 'none'}}/>
                        <div className="main-tracker-digits" style={{background: `linear-gradient(0deg, #4970AB ${100 / 24 * 7}%, rgb(0, 0, 0, 0) 0%)`}}>
                            <div className="main-tracker-digits-box">
                                <h1>7</h1>
                                <p>hours</p>
                            </div>
                        </div>
                        <hr className='main-hr' style={{height: '100%', borderColor: 'white', borderLeft: 'none'}}/>
                        <div className="main-tracker-digits" style={{background: `linear-gradient(0deg, #4345C7 ${100 / 60 * 23}%, rgb(0, 0, 0, 0) 0%)`}}>
                            <div className="main-tracker-digits-box">
                                <h1>23</h1>
                                <p>minutes</p>
                            </div>
                        </div>
                        <hr className='main-hr' style={{height: '100%', borderColor: 'white', borderLeft: 'none'}}/>
                        <div className="main-tracker-digits" style={{background: `linear-gradient(0deg, #72489F ${100 / 60 * 49}%, rgb(0, 0, 0, 0) 0%)`}}>
                            <div className="main-tracker-digits-box">
                                <h1>49</h1>
                                <p>seconds</p>
                            </div>
                        </div>
                        <hr className='main-hr' style={{height: '100%', borderColor: 'white', borderLeft: 'none'}}/>
                    </div>
                </div>
            ,
        },
        {
            id: 2,
            content:
            <div className="streak-tracker tracker-div">
                <p style={{fontWeight: '300'}}>My sober streak is</p>
                <div className="streak-tracker-box">
                    <h1 style={{fontSize: '96px'}}>74</h1>
                </div>
                <p style={{fontWeight: '300'}}>days</p>
            </div>
        },
        {
            id: 3,
            content:
            <div className="start-tracker">
                <p style={{position: 'absolute', top: '10px', fontWeight: '300'}}>My sober start date</p>
                <div className="start-tracker-box">
                    <h1 style={{fontSize: '48px'}}>{}</h1>
                    <p style={{color: '#acacac', fontWeight: '300'}}>18:26</p>
                </div>
            </div>
        },
    ];
    
    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % divs.length);
    };
    
    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + divs.length) % divs.length);
    };

    return (
        <div className='days-tracker tracker-div'>
            <div className="days-tracker-div">
                {divs[currentIndex].content}
            </div>
            <div className="days-tracker-nav">
                <img src={leftCircle} onClick={prevItem}/>
                <img src={rightCircle} onClick={nextItem} />
            </div>
            <div className="days-tracker-reset">
                <img src={resetIcon} />
            </div>
        </div>
    );
}