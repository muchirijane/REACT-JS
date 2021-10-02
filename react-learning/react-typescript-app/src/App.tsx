import { useState } from 'react';
import Container from '@mui/material/Container';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import Todo from './models/todo'
function App() {

  const [todos, setTodos] = useState<Todo[]>([
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
    new Todo('Learn GraphQL'),
  ]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => [...prevTodos, newTodo]);

  }
  return (
    <Container maxWidth='md'>
      <h1>Hello Typescript</h1>
      <TodoForm onAddTodo={addTodoHandler} />
      <Todos items={todos} />

    </Container>
  );
}

export default App;
