import React, { useContext } from 'react'
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import { TodoContext } from '../store/TodoContext';

const Todos: React.FC = () => {
  const todoContext = useContext(TodoContext);
  return (
    <List>
      {todoContext.items.map(item => (
        <TodoItem key={item.id} text={item.text} onDeleteTodo={todoContext.removeTodo.bind(null, item.id)} />
      ))}

    </List>
  )
}

export default Todos;