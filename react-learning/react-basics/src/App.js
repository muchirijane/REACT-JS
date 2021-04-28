import {useState} from 'react'
import ExpenseItem from "./components/ExpenseItem";


function App() {
  const getItem = 'Finished!!!'
  
  const [expenses, setExpenses ]= useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(),
    },
  ]);


  return (
    <div>
      <h1>Learning React</h1>
      <ExpenseItem expenses={expenses}/>
    </div>
  );
}

export default App;