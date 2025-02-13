import React from 'react';
import { Navbar } from './components/Navbar';
import { Login } from './components/form/Login'
import { Todo } from './components/Todo'
import { Counter } from './components/Counter'


 function App() {
  return (
    <> 
      <Navbar/>
      <Login />
      <Todo/>
      <Counter />
    </>
  );
}
export default App;