import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);