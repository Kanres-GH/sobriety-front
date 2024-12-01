import { useState, useEffect } from "react";

export default function UserDataFormAdd() {
    // Define state for form inputs
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [daysPerWeek, setDaysPerWeek] = useState(1);
    const [moneySpent, setMoneySpent] = useState(0);
    const [timeSpent, setTimeSpent] = useState("");
    const [sobrietyReason, setSobrietyReason] = useState("");

    // Effect to update localStorage whenever any form data changes
    useEffect(() => {
        const formData = {
            startDate,
            startTime,
            daysPerWeek,
            moneySpent,
            timeSpent,
            sobrietyReason,
        };

        localStorage.setItem("sobrietyData", JSON.stringify(formData));
    }, [startDate, startTime, daysPerWeek, moneySpent, timeSpent, sobrietyReason]);

    return (
        <>
            <div className="reg-log-main-content-heading">
                <h1 style={{fontWeight: '500', fontSize: '1.4em', letterSpacing: 1.5, textAlign: 'center'}}>Some additional information</h1>
            </div>
            <form>
                <div className="reg-log-main-content-forms">
                    <div className="reg-log-main-start-date">
                        <h1 style={{fontWeight: '300', fontSize: '1.1em', letterSpacing: 1, textAlign: 'center'}}>Choose your sobriety start date</h1>
                        <input
                            type="date"
                            style={{color: 'white'}}
                            required
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <input
                            type="time"
                            style={{color: 'white'}}
                            required
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                    </div>
                    <div className="reg-log-main-per-week">
                        <h1 style={{fontWeight: '300', fontSize: '1.1em', letterSpacing: 1, textAlign: 'center'}}>How many days a week did you spend on your addiction?</h1>
                        <span style={{color: 'gray', fontSize: '12px'}}>On average, before you started tracking</span>
                        <input
                            type="number"
                            defaultValue={1}
                            min="1"
                            max="7"
                            required
                            value={daysPerWeek}
                            onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                        />
                    </div>
                    <div className="reg-log-main-per-week">
                        <h1 style={{fontWeight: '300', fontSize: '1em', letterSpacing: 1, textAlign: 'center'}}>How much <span style={{color: 'greenyellow'}}>money</span> and <span style={{color: 'cyan'}}>time</span> were you spending on your addiction per day?</h1>
                        <span style={{color: 'gray', fontSize: '12px'}}>On the days when you were NOT sober</span>
                        <div className="reg-log-main-per-week-money">
                            <span style={{color: 'white'}}>$</span>
                            <input
                                type="number"
                                step={0.01}
                                defaultValue={1}
                                min="0"
                                required
                                value={moneySpent}
                                onChange={(e) => setMoneySpent(Number(e.target.value))}
                            />
                            <div className="reg-log-main-per-week-time">
                                <input
                                    type="time"
                                    value={timeSpent}
                                    onChange={(e) => setTimeSpent(e.target.value)}
                                />
                                <span style={{color: 'gray', fontWeight: '300', fontSize: '12px'}}>Hours : Minutes</span>
                            </div>
                        </div>
                    </div>
                    <div className="reg-log-main-per-week">
                        <h1 style={{fontWeight: '300', fontSize: '1em', letterSpacing: 1, textAlign: 'center'}}>I want to be sober because...</h1>
                        <div className="reg-log-main-per-week-money">
                            <textarea
                                style={{
                                    width: '100%',
                                    backgroundColor: '#1f1f1f',
                                    resize: 'none',
                                    borderRadius: '10px',
                                    padding: '10px',
                                    color: 'white',
                                    fontSize: '14px',
                                }}
                                value={sobrietyReason}
                                onChange={(e) => setSobrietyReason(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
