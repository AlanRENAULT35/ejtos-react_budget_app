import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, Location } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if(newBudget > 20000)
        {
            alert("The budget can't exceed 20000");
        }
        if(newBudget < totalExpenses)
        {
            alert("You cannot reduce the budget value lower than spending");
        }
    }
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
<div className='alert alert-secondary'>
<span>Budget: {Location}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
