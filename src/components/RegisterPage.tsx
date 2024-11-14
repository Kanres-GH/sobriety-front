import logo from '../static/imgs/logo.svg'
import '../static/css/reg-log.css'
import { Link } from 'react-router-dom';

export default function RegisterPage() {

    return (
        <div className='reg-log'>
            <div className="reg-log-img" />
            <div className="reg-log-main">
                <div className="reg-log-main-content">
                    <img src={logo} alt="New Me Logo" style={{width: '40vw', alignSelf: 'center', minWidth: '350px'}} />
                    <hr style={{display: 'block', borderColor: '#ffffff', border: 0, height: '1px', borderTop: '1px solid #1c1c1c'}}/>
                    <div className="reg-log-main-content-heading">
                        <h1 style={{fontWeight: '500'}}>Create a new account</h1>
                    </div>
                    <div className="reg-log-main-content-form">
                        <form>
                            <div className="reg-log-main-content-form-input">
                                <label htmlFor="text">Username:</label>
                                <input type="text" />
                                <p style={{fontSize: '12px', color: 'grey'}}>Username should not contain special characters like +, /, %, &, etc.</p>
                            </div>
                            
                            <div className="reg-log-main-content-form-input">
                                <label htmlFor="email">Email:</label>
                                <input type="email" />
                            </div>
                            <div className="reg-log-main-content-form-input">
                                <label htmlFor="password">Password:</label>
                                <input type="password" />
                                <p style={{fontSize: '12px', color: 'grey'}}>Password has to be at least 8 characters long.</p>
                            </div>
                        </form>
                    </div>
                    <p style={{lineHeight: 1.5}}>By creating an account, you agree to our<br /><span>Terms of Use</span> and <span>Privacy Policy</span>.</p>

                    <button>Sign up</button>
                    <p>Already have an account? <Link to='/login'><span>Log in</span></Link></p>
                </div>
            </div>
        </div>
    );
}