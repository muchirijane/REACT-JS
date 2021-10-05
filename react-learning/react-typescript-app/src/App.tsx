import { useState } from 'react';
import Container from '@mui/material/Container';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import TodoContextProvider from './store/TodoContext';
function App() {



  return (
    <Container maxWidth='md'>
      <h1>Hello Typescript</h1>
      <TodoContextProvider>
        <TodoForm />
        <Todos />

      </TodoContextProvider>

    </Container>
  );
}

export default App;
