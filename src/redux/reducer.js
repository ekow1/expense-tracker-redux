let expenseState = {
     income : 0,
    expense: [],
  
    query: "",
  };
 

  export const expenseReducer = ( state= expenseState , action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return  {...state, expense: [...state.expense, action.payload]};

            case "DELETE_EXPENSE":
              const unDeletedExpense = state.expense.filter(
                (expense) => expense.id !== action.payload
              );
              return { ...state, expense: unDeletedExpense };

              case "UPDATE_EXPENSE":
                const updatedExpense = state.expense.map((cost) => {
                  if (cost.id === action.payload.editExpense.id) {
                    return action.payload.editExpense;
                  } else {
                    return cost;
                  }
                });
                return { ...state, expense: updatedExpense };
             
            
        case 'ADD_INCOME':
            return {
                ...state,
                income :parseFloat(state.income + action.payload)
            }
        case 'DECREASE_INCOME':
            return {
                ...state,
                income :parseFloat(state.income - action.payload)
            }
        case 'UPDATE_INCOME':
            return {
                ...state,
                income :parseFloat( action.payload)
            };

            case "SEARCH_EXPENSE": {
              const { query } = action;
              return { ...state, query };
            }
        
         

            default:
                return state;

}

}
 
