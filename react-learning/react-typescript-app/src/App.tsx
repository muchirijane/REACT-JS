import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo'
function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
    new Todo('Learn Redux'),
  ]
  return (
    <>
      <h1>Hello Typescript</h1>
      <Todos items={todos} />
    </>
  );
}

export default App;
