export default function UserDataFormAdd() {

    return (
        <>
            <div className="reg-log-main-content-heading">
                <h1 style={{fontWeight: '500', fontSize: '1.5em', letterSpacing: 1.5, textAlign: 'center'}}>Some additional information</h1>
            </div>
            <form>
                <div className="reg-log-main-content-forms">
                    <div className="reg-log-main-start-date">
                        <h1 style={{fontWeight: '300', fontSize: '1.1em', letterSpacing: 1.5, textAlign: 'center'}}>Choose your sobriety start date</h1>
                        <input type="date" style={{color: 'white'}} required />
                        <input type="time" style={{color: 'white'}} required />
                    </div>
                    <div className="reg-log-main-per-week">
                        <h1 style={{fontWeight: '300', fontSize: '1.1em', letterSpacing: 1.5, textAlign: 'center'}}>How many days a week did you drink?</h1>
                        <span style={{color: 'gray', fontSize: '12px'}}>On average, before you started tracking</span>
                        <input type="number" defaultValue={1} min="1" max="7" required />
                    </div>
                </div>
            </form>
        </>
    );
}