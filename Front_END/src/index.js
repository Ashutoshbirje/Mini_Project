import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId="4880446009-90laa16ub7so3lk4mgu7i8sfrdg00ffn.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
);
