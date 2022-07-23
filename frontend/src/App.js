import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'; // import navbar
import Login from './views/auth/Login'; // new
import Signup from './views/auth/Signup'; // new
import Logout from './views/auth/Logout'; // new


const App = () => {
    return (
        <div className='App'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/login' element={<Login/>} exact/>
                    <Route path='/signup' element={<Signup/>} exact/>
                    <Route path='/logout' element={<Logout/>} exact/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;