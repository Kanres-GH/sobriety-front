import { Link } from 'react-router-dom';
import logo from '../static/imgs/logo.svg'
import '../static/css/reg-log.css'

export default function LoginPage() {

    return (
        <div className='reg-log'>
            <div className="reg-log-img" />
            <div className="reg-log-main">
                <div className="reg-log-main-content">
                    <img src={logo} alt="New Me Logo" style={{width: '40vw', alignSelf: 'center', minWidth: '350px'}} />
                    <hr style={{display: 'block', borderColor: '#ffffff', border: 0, height: '1px', borderTop: '1px solid #1c1c1c'}}/>
                    <div className="reg-log-main-content-heading">
                        <h1 style={{fontWeight: '500'}}>Log into New Me</h1>
                    </div>
                    <div className="reg-log-main-content-form">
                        <form>
                            <div className="reg-log-main-content-form-input">
                                <label htmlFor="text">Username or Email:</label>
                                <input type="text" />
                            </div>
                            <div className="reg-log-main-content-form-input">
                                <label htmlFor="password">Password:</label>
                                <input type="password" />
                            </div>
                        </form>
                    </div>
                    
                    <button>Sign in</button>
                    <p>Don't have an account? <Link to='/register'><span>Sign up</span></Link></p>
                </div>
            </div>
        </div>
    );
}