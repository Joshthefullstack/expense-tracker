import { useState } from "react";
import ExpenseModal from "./components/Modal/Modal";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";


function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);

  // console.log(expenseAdded)


  return (
    <div className="App">
      <ExpenseModal show={show} handleClose={handleClose} handleShow={handleShow} setData={setData} data={data}   />
      <h1>Expenses Tracker</h1>


    <div>
      <h2>Your Expenses</h2>

      <button  onClick={handleShow}>Add New Expense </button>
    </div>

      <div className="expenses-table">
        {
          data.length === 0 ? <p>No expenses found</p> : <ExpenseTable/>
        }
      </div>
    </div>
  );
}

export default App;
