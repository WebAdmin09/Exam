import React from 'react'
import ReactDOM from 'react-dom/client'

import 'react-toastify/dist/ReactToastify.css';
import AuthContextProvider from "./context/AuthContext.jsx";
import StoreProvider from "./redux/store";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </StoreProvider>
  </React.StrictMode>,
)
