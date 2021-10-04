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

  const deleteHandler = (todoId: number) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== todoId));

  }

  return (
    <Container maxWidth='md'>
      <h1>Hello Typescript</h1>
      <TodoForm onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteHandler} />

    </Container>
  );
}

export default App;
