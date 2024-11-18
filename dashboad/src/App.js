import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignupForm from './SignupForm';
import LandingPage from './LandingPage'; // Import the new LandingPage component
import './App.css';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSignIn = () => {
    setAuthenticated(true); // Authenticate the user and show the landing page
  };

  if (authenticated) {
    // Render the landing page if authenticated
    return <LandingPage />;
  }

  return (
    <div>
      {/* Top Navbar with Logo */}
      <div className="navbar">
        <h2>Your Logo</h2>
      </div>

      {/* Authentication section */}
      <div className="auth-container">
        
        <div className="auth-left">
          <div className="auth-section">
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', fontFamily: 'sans-serif', marginBottom: 12 }}>
              {showSignUp ? "Sign up to" : "Sign in to"}
            </h2>

            <p style={{ fontSize: '30px', fontWeight: 'normal', fontFamily: 'sans-serif', color: '#333', marginTop: 12 }}>
              Lorem Ipsum is simply
            </p>

            {showSignUp ? (
              <p>If you already have an account<br />You can <span className="toggle-link" onClick={toggleForm}>Login here !</span></p>
            ) : (
              <p>If you don’t have an account <span className="toggle-link" onClick={toggleForm}>Register here!</span></p>
            )}
          </div>
                     {/* Image Section to the Right of Auth Section */}
        <div className="auth-right">
        <img 
  src="\images\Rectangle 2.png" 
  alt="Auth illustration" 
  style={{
    width: '100%',
    maxWidth: '200px',  // Max width for the image
    height: 'auto',
  }} 
/>

        </div>
 
  
          {/* Form Section */}
          <div className="form-section">
            {showSignUp ? <SignupForm /> : <SignInForm onSignIn={handleSignIn} />}
          </div>
          
        </div>

      
      </div>
    </div>
  );
}

export default App;
