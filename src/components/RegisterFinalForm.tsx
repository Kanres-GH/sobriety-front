export default function RegisterFinalForm() {

    return (
        <>
            <div className="reg-log-main-content-heading">
                <h1 style={{fontWeight: '500', fontSize: '2em', letterSpacing: 1.5, textAlign: 'center'}}>Final Step</h1>
            </div>
            <form>
                <div className="reg-log-checkbox">
                    <input type="checkbox" className="reg-log-check" required/>
                    <label style={{fontSize: 'larger'}}>I am 18 years old.</label>
                </div>
                <div className="reg-log-checkbox">
                    <input type="checkbox" className="reg-log-check" required/>
                    <label style={{fontSize: 'larger'}}>I am ready to be sober.</label>
                </div>
                <hr style={{display: 'block', borderColor: '#ffffff', border: 0, height: '1px', borderTop: '1px solid #5c5c5c', width: '50%', alignSelf: 'center'}}/>
                <div className="reg-log-checkbox">
                    <input type="checkbox" className="reg-log-check"/>
                    <label style={{fontSize: 'small'}}>I agree to receive newsletters and keep me updated on new products and promotions.</label>
                </div>
            </form>
        </>
    );
}