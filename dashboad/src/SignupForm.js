import React, { useState } from 'react';
import './SignupForm.css';

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-container">
  
      {/* Form Section */}
      <div className="form-section">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form>
            <input type="email"  style={{ backgroundColor: '#F0EFFF', padding: '14px',border:'none', borderRadius: '6px' }} placeholder="Enter Email" required />
            <input type="text" style={{ backgroundColor: '#F0EFFF', padding: '14px', border:'none',borderRadius: '6px' }}  placeholder="Create User Name" required />
            <input type="text" style={{ backgroundColor: '#F0EFFF', padding: '14px',border:'none', borderRadius: '6px' }}  placeholder="Contact number" required />
            <div className="password-container">
              <input type={showPassword ? "text" : "password"} style={{ backgroundColor: '#F0EFFF', padding: '14px', border:'none',borderRadius: '6px' }}  placeholder="Password" required />
              <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</span>
            </div>
            <div className="password-container">
              <input type={showPassword ? "text" : "password"} style={{ backgroundColor: '#F0EFFF', padding: '14px', border:'none',borderRadius: '6px' }}  placeholder="Confirm Password" required />
              <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</span>
            </div>
            <button type="submit" style={{ padding: '14px', border:'none' }}>Register</button>
          </form>
          <p>or continue with</p>
          <div className="social-login" style={{ marginTop: '10px' }}>
            {/* Google Button */}
            <button style={{ backgroundColor: 'transparent', border: 'none', padding: '0', cursor: 'pointer', display: 'block', marginBottom: '0px' }}>
              <img src="\images\download.png" alt="Google" style={{ width: '35px', height: '30px' }} />
            </button>
            {/* Apple Button */}
            <button style={{ backgroundColor: 'transparent', border: 'none', paddingRight: 150, cursor: 'pointer', display: 'block' }}>
              <img src="\images\google logo.png" alt="Apple" style={{ width: '30px', height: '30px' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
