// import './App.css';
import React, { Component } from 'react';
import MyProvider from './contexts/MyProvider';
import Login from './components/LoginComponent';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './dist/vendor/fontawesome-free/css/all.min.css';
import './dist/css/sb-admin-2.min.css';
class App extends Component {
    render() {
        return (
            <MyProvider>
                <Login />
                <BrowserRouter >
                   <Main />
               </BrowserRouter>
            </MyProvider>
        );
    }
}
export default App;
