import { Link } from "react-router-dom";
type UserData = {
    username: string,
    email: string,
    password: string,
    cpassword: string,
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

export default function UserDataForm({username, email, password, cpassword, updateFields }: UserFormProps) {

    return (
        <>
            <div className="reg-log-main-content-heading">
                <h1 style={{fontWeight: '500', fontSize: '2em', letterSpacing: 1.5}}>Create a new account</h1>
            </div>
            <div className="reg-log-main-content-form-input">
                <label htmlFor="text">Username:</label>
                <input autoFocus required type="text" value={username} onChange={e => updateFields({username: e.target.value})} />
                <p style={{fontSize: '12px', color: 'grey'}}>Username should not contain special characters like +, /, %, &, etc.</p>
            </div>
        
            <div className="reg-log-main-content-form-input">
                <label htmlFor="email">Email:</label>
                <input required type="email" value={email} onChange={e => updateFields({email: e.target.value})} />
            </div>
            <div className="reg-log-main-content-form-input">
                <label htmlFor="password">Password:</label>
                <input required type="password" value={password} onChange={e => updateFields({password: e.target.value})} />
                <p style={{fontSize: '12px', color: 'grey'}}>Password has to be at least 8 characters long.</p>
            </div>
            <div className="reg-log-main-content-form-input">
                <label htmlFor="password">Confirm Password:</label>
                <input required type="password" value={cpassword} onChange={e => updateFields({cpassword: e.target.value})} />
            </div>
            
            <p>Already have an account? <Link to='/login'><span className='reg-log-span'>Log in</span></Link></p>
        </>
    );
}