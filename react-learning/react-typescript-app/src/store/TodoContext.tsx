import React, { useState } from 'react';
import Todo from '../models/todo';

type TodoValues = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}

export const TodoContext = React.createContext<TodoValues>({
  items: [],
  addTodo: () => { },
  removeTodo: (id: number) => { }
});


const TodoContextProvider: React.FC = (props) => {
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

  const contextValue: TodoValues = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteHandler,
  }

  return <TodoContext.Provider value={contextValue}>
    {props.children}
  </TodoContext.Provider>
}

export default TodoContextProvider;