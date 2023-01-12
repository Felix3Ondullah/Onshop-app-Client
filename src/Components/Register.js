import React from 'react'
import { Link } from 'react-router-dom'

import "../Css/LoginRegister.css"

export default function SignUpPage() {

    return (
        <div className="reg-cont">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
        
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p >
                <Link to="/" className='foot-cont'>Back to Homepage</Link>.
                </p>
            </footer>
        </div>
    )

}