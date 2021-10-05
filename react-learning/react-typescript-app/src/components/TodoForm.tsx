import { FormEvent, useState, useContext } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { TodoContext } from '../store/TodoContext';

const useStyles = makeStyles({
  field: {
    marginBottom: 20,
    marginTop: 20,
    display: 'block'
  }
});

const TodoForm: React.FC = () => {
  const classes = useStyles();
  const [taskError, setTaskError] = useState(false);
  const [task, setTask] = useState('');
  const todoCtx = useContext(TodoContext);

  const addTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (task.trim().length === 0) {
      setTaskError(true);
      return;
    }
    const addedTask = task;
    todoCtx.addTodo(addedTask);

  }

  return (
    <>
      <form noValidate autoComplete='off' onSubmit={submitHandler}>
        <TextField
          className={classes.field}
          label='Add Task'
          onChange={addTodo}
          fullWidth
          error={taskError}
          multiline
          required
          color='secondary'
          id='todo-text' />
        <Button type='submit' variant='contained' color='secondary'>Add</Button>
      </form>

    </>
  )
}

export default TodoForm;