import '../static/css/main-page.css'
import rightCircle from '../static/imgs/icons/angle-circle-right.svg'
import leftCircle from '../static/imgs/icons/angle-circle-left.svg'
import { useState } from 'react';

export default function DaysTracker() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const divs = [
        {
            id: 1,
            content:
                <>
                    <div className='main-tracker-header' style={{width: '100%', textAlign: 'center', margin: '5px'}}>
                        <span style={{color: 'rgb(255, 255, 255, 0.7)', fontSize: '12px'}}>I've been alcohol free for</span>
                    </div>
                    <hr style={{width: '100%'}}/>
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
                </>
            ,
        },
        {
            id: 2,
            content: <div className="simple-tracker"></div>,
        },
        {
            id: 3,
            content: <div className="streak-tracker"></div>,
        },
    ];
    
    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % divs.length);
    };
    
    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + divs.length) % divs.length);
    };

    return (
        <div className='days-tracker'>
            <div className="days-tracker-div">
                {divs[currentIndex].content}
            </div>
            <div className="days-tracker-nav">
                <img src={leftCircle} onClick={prevItem}/>
                <img src={rightCircle} onClick={nextItem} />
            </div>
        </div>
    );
}