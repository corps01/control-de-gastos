import React, { createContext, useReducer, useEffect } from "react";
import { getCurrentMonthEnEspanol } from "../util/getCurrentDate";
import { AppReducer } from "./AppReducer";
import axios from "axios";

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
      const response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/db`
      ); // Replace with your JSON server endpoint
      const jsonData = response.data;

      dispatch({
        type: "SET_TRANSACTIONS",
        payload: jsonData,
      });
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
      await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/${currentMonth}`,
        transaction
      );

      fetchData();
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  }

  // Actions
  async function deleteTransaction(id, currentMonth) {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_ENDPOINT}/${currentMonth}/${id}`
      );
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
