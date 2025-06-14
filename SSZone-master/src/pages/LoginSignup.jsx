import React, { useState } from 'react';
import GoogleLogin from '../componant/GoogleLogin';
import Login from '../componant/Login';
import Signup from '../componant/Signup';
import {  GoogleOAuthProvider } from "@react-oauth/google";

import { useNavigate, useLocation } from 'react-router-dom';



function LoginSignup() {

    const location = useLocation();
const navigate = useNavigate();


      const GoogleAuthwrapper = (  {  navigate, location}) =>{
    return(
      <GoogleOAuthProvider clientId="209359057568-rr6ffte1v3l5ifkthic1no8pnlq5j5cr.apps.googleusercontent.com"
>
        <GoogleLogin  navigate={navigate} location={location} />
        
      </GoogleOAuthProvider>
    )

  }
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
    
        <div>
          {showLogin ? <Login navigate={navigate} location={location} /> : <Signup />}
          <div className="text-center mt-4">
            <button
              onClick={() => setShowLogin(!showLogin)}
              className="text-blue-500 underline"
            >
              {showLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </button>
          </div>
           <GoogleLogin navigate={navigate} location={location}/>
      
      </div>
    </div>
  );
}

export default LoginSignup;

