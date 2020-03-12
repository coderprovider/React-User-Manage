import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.scss';
import './Header/Header'
import Header from "./Header/Header";
import MainView from "./MainView/MainView";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainView/>
        </div>
    );
}

export default App;
