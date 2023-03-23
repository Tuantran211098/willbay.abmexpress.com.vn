import React from 'react';
import ReactDOM from 'react-dom/client';
import Apps from './App';
// import { DarkModeContextProvider } from './context/darkModeContext';
import { store } from "./store";
 import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AppContextProvider } from './context/AppContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <AppContextProvider>
    <BrowserRouter>
    <Apps />
    </BrowserRouter>
    </AppContextProvider>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();