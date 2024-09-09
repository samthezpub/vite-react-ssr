import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Получаем данные, переданные с сервера
const initialData = window.__INITIAL_DATA__;

ReactDOM.hydrateRoot(
    document.getElementById('root'),
    <BrowserRouter>
        <App initialData={initialData} />
    </BrowserRouter>
);
