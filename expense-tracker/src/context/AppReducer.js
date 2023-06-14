export const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        currentMonth: action.payload.currentMonth,
        transactions: state.transactions[action.payload.currentMonth].filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "SET_TRANSACTIONS":
      return {
        ...state,
        transactions: { ...state.transactions, ...action.payload },
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: { ...state.transactions, ...action.payload },
      };
    case "SET_CURRENT_MONTH":
      return {
        ...state,
        currentMonth: action.payload,
      };

    default:
      return state;
  }
};
