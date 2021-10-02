import React from 'react'
import List from '@mui/material/List';
import Todo from '../models/todo'
import TodoItem from './TodoItem';

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <TodoItem key={item.id} text={item.text} />
      ))}

    </List>
  )
}

export default Todos;