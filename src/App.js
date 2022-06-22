import React from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/">
            {user && user._id ? (
              <Homepage setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route path="login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="register">
            <Register />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
