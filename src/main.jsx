import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl6qg2MQmI9JldKXRfTsgaBmWfDy-oF9I",
  authDomain: "coder-react-5a0e0.firebaseapp.com",
  projectId: "coder-react-5a0e0",
  storageBucket: "coder-react-5a0e0.appspot.com",
  messagingSenderId: "836150814701",
  appId: "1:836150814701:web:c4b528140d8917cfdb69e4",
  measurementId: "G-3GE4R2CKF1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
