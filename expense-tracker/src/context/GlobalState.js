import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const getCurrentMonthEnEspanol = () => {
  const month = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const d = new Date();
  return month[d.getMonth()];
};

const initialState = {
  currentMonth: getCurrentMonthEnEspanol(),
  transactions: {
    Enero: [],
    Febrero: [],
    Marzo: [],
    Abril: [],
    Mayo: [],
    Junio: [],
    Julio: [],
    Agosto: [],
    Septiembre: [],
    Octubre: [],
    Noviembre: [],
    Diciembre: [],
  },
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/db"); // Replace with your JSON server endpoint
      const jsonData = response.data;

      dispatch({
        type: "SET_TRANSACTIONS",
        payload: jsonData,
      });

      console.log(state);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function setMonth(month) {
    dispatch({
      type: "SET_CURRENT_MONTH",
      payload: month,
    });
  }

  async function addTransaction(transaction, currentMonth) {
    try {
      const response = await axios.post(
        `http://localhost:4000/${currentMonth}`,
        transaction
      );
      const newTransaction = response.data;

      fetchData();
      // dispatch({
      //   type: "ADD_TRANSACTION",
      //   payload: { [currentMonth]: newTransaction },
      // });
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  }

  // Actions
  async function deleteTransaction(id, currentMonth) {
    try {
      await axios.delete(`http://localhost:4000/${currentMonth}/${id}`);

      // dispatch({
      //   type: "DELETE_TRANSACTION",
      //   payload: { currentMonth, id },
      // });
      fetchData();
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        currentMonth: state.currentMonth,
        deleteTransaction,
        addTransaction,
        setMonth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
