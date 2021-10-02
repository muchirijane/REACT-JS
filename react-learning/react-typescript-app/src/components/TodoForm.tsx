import { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
const TodoForm = () => {
  const [taskError, setTaskError] = useState(false);
  return (
    <Container maxWidth='sm'>
      <form noValidate autoComplete='off'>
        <TextField label='Add Task' fullWidth error={taskError} />

      </form>

    </Container>
  )
}

export default TodoForm;