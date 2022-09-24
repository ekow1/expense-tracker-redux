export const addIncome = (income = 0) => {
	return {
		type: "ADD_INCOME",
		payload: parseFloat(income)
	};
};
export const decreaseIncome = (decrease = 0) => {
	return {
		type: "DECREASE_INCOME",
		payload: parseFloat(decrease)
	};
};
export const addExpense = (expense) => {
	return {
		type: "ADD_EXPENSE",
		payload: expense,
	};
};

export const deleteExpense = (expense_id) => {
  return {
    type: "DELETE_EXPENSE",
    payload: expense_id,
  }
}
export const updateIncome = (editIncome)=>{
  return{
    type: "UPDATE_INCOME",
    payload: editIncome
  }


}
export const updateExpense = (editExpense)=>{
  return{
    type: "UPDATE_EXPENSE",
    payload: {editExpense}
  }


}

 export const searcExpense = (query)=>{
    
    return{
      type:'SEARCH_EXPENSE',
      query,
    }

}

export const searchExpense = (query)=>{
    
  return{
    type:'SEARCH_EXPENSE',
    query,
  }

}