import React from 'react'
import List from '@mui/material/List';
import Todo from '../models/todo'
import TodoItem from './TodoItem';

const Todos: React.FC<{ items: Todo[]; onDeleteTodo: (todoId: number) => void }> = ({ items, onDeleteTodo }) => {
  return (
    <List>
      {items.map(item => (
        <TodoItem key={item.id} text={item.text} onDeleteTodo={onDeleteTodo.bind(null, item.id)} />
      ))}

    </List>
  )
}

export default Todos;