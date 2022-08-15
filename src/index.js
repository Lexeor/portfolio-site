import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import 'remixicon/fonts/remixicon.css';
import { MainContextProvider } from './components/mainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MainContextProvider>
        <App />
    </MainContextProvider>
);