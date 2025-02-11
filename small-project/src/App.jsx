import React from 'react';
import { Form } from './components/Form'
import { Todo } from './components/Todo'
import { Counter } from './components/Counter'

 function App() {
  return (
    <> 
      <Form />
      <Todo/>
      <Counter />
    </>
  );
}
export default App;