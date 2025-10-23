import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBz2uRxYsy1gypEloQcaxlwGvavDh4JjOk",
  authDomain: "react-blog-be8d7.firebaseapp.com",
  projectId: "react-blog-be8d7",
  storageBucket: "react-blog-be8d7.firebasestorage.app",
  messagingSenderId: "383278900691",
  appId: "1:383278900691:web:bc94e8730de43cdfdd3b26",
  measurementId: "G-QMB6BCGREK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
