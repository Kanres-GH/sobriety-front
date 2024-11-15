import logo from '../static/imgs/logo.svg'
import '../static/css/reg-log.css'
import useMultiForm from '../static/scripts/useMultiForm';
import UserDataForm from './UserDataForm';
import RegisterFinalForm from './RegisterFinalForm';
import AddictionListForm from './AddictionListForm';
import { FormEvent, useState } from 'react';

type FormData = {
    username: string,
    email: string,
    password: string,
    cpassword: string,
}

const INITIAL_DATA: FormData = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
}

export default function RegisterPage() {
    const [data, setData] = useState(INITIAL_DATA)
    const { step, next, back, isFirstStep, isLastStep } = useMultiForm([<UserDataForm {...data} updateFields={updateFields} />, <AddictionListForm />, <RegisterFinalForm />])

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return {...prev, ...fields}
        })
    }

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        next()
    }

    return (
        <div className='reg-log'>
            <div className="reg-log-img" />
            <div className="reg-log-main">
                <div className="reg-log-main-content">
                    <img src={logo} alt="New Me Logo" style={{width: '40vw', alignSelf: 'center', minWidth: '350px'}} />
                    <hr style={{display: 'block', borderColor: '#ffffff', border: 0, height: '1px', borderTop: '1px solid #1c1c1c'}}/>
                    <div className="reg-log-main-content-form">
                        <form onSubmit={onSubmit}>
                            {step}
                            <div className="reg-log-btns">
                                {!isFirstStep && <button className='reg-log-btn' type='button' onClick={back}>Back</button>}
                                <button className='reg-log-btn' type='submit'>{isLastStep ? "Sign Up" : "Next"}</button>
                            </div>
                            
                        </form>
                    </div>
                    <hr style={{display: 'block', borderColor: '#ffffff', border: 0, height: '1px', borderTop: '1px solid #1c1c1c'}}/>
                    {isLastStep && <p>By creating an account, you agree to our <span className='reg-log-span'>Terms of Use</span> and <span className='reg-log-span'>Privacy Policy</span>.</p>}
                </div>
            </div>
        </div>
    );
}