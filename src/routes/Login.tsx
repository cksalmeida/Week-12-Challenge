import React, { useEffect } from 'react';
import * as firebaseui from 'firebaseui';
import { auth } from '../FirebaseConfig';
import { EmailAuthProvider } from 'firebase/auth'; 
import 'firebaseui/dist/firebaseui.css';
import { Link } from "react-router-dom";
import FurniroLogo from '../assets/FurniroLogo.svg'
import 'firebaseui/dist/firebaseui.css';

const Login: React.FC = () => {
  useEffect(() => {
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
      ],
    };

    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  return (
    <div className='bg-[#FFF3E3] h-screen'>
    <div className=" container mx-auto p-8">
      <div className="flex justify-between font-medium mb-20">
      <img src={FurniroLogo} alt="Furniro Logo" className='max-h-6' />
          <Link to="/">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      <h1 className="text-2xl text-center font-semibold mb-20">Login</h1>
      <div id="firebaseui-auth-container"></div>
    </div>
    </div>
  );
};

export default Login;
