import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId="209359057568-rr6ffte1v3l5ifkthic1no8pnlq5j5cr.apps.googleusercontent.com">
    <CartProvider>
    <BrowserRouter>
    
      <App />
     
    </BrowserRouter>

    </CartProvider>
     </GoogleOAuthProvider>
  </React.StrictMode>
);



