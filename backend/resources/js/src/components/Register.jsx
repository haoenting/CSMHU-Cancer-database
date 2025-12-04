import React from "react";

const Register = () => {
    return (
        <div className="login-container">
            <h2>Register</h2>

            <div className="input-group">
                <label>username</label><br />
                <input type="text" />
            </div>

            <div className="input-group">
                <label>password</label><br />
                <input type="password" />
            </div>

            <button className="login-btn">register</button>

            <p className="signup-text">
                Don't have account? <a href="#">Sign up</a>
            </p>
        </div>
    );
};

export default Register;
