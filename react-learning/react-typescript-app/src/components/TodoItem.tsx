
import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const TodoItem: React.FC<{ text: string }> = ({ text }) => {
  return (

    <ListItem>
      <ListItemButton>
        <ListItemText primary={text} />
        <ListItemIcon>
          <DeleteRoundedIcon color='secondary' />
        </ListItemIcon>

      </ListItemButton>

    </ListItem>




  )
}

export default TodoItem;