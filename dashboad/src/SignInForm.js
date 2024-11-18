import React from 'react';
import './SignInForm.css';

function SignInForm({ onSignIn }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate successful authentication
    onSignIn(); // Call the onSignIn function passed from App
  };

  return (
    
    <div className="form-section-1">
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter email or user name" required />
        <input type="password" placeholder="Password" required />
        <a  href="/forgot-password" className="forgot-password">Forgot password?</a>
        <p> </p>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p>or continue with</p>
      <div className="social-login">
      <button style={{ backgroundColor: 'transparent', border: 'none', padding: '0', cursor: 'pointer', display: 'block', marginBottom: '0px' }}>
              <img src="\images\download.png" alt="Apple" style={{ width: '35px', height: '30px' }} />
            </button>
            {/* Apple Button */}
            <button style={{ backgroundColor: 'transparent', border: 'none', paddingRight: 100, cursor: 'pointer', display: 'block' }}>
              <img src="\images\google logo.png" alt="Google" style={{ width: '30px', height: '30px' }} />
            </button>
      </div>
    </div>
    
  );
}

export default SignInForm;
