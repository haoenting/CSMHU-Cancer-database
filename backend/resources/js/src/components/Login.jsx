import React from "react";

const Login = () => {
    return (
        <div className="login-container">
            <h2>Login</h2>

            <div className="input-group">
                <label>username</label><br />
                <input type="text" />
            </div>

            <div className="input-group">
                <label>password</label><br />
                <input type="password" />
            </div>

            <button className="login-btn">login</button>

            <p className="signup-text">
                Don't have account? <a href="/Register">Sign up</a>
            </p>
        </div>
    );
};

export default Login;
