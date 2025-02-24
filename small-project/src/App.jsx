//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Login } from './components/form/Login';
import { Todo } from './components/todo/Todo';
import { Counter } from './components/Counter';
import {ForgotPassword} from './components/form/ForgotPassword'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login /> } />
          <Route path="/forgot-password" element={ <ForgotPassword /> } />
          <Route path="/todo" element={ <Todo /> } />
          <Route path="/counter" element={<Counter /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
