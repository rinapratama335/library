import React, { createContext, useReducer } from "react";

export const LibraryContex = createContext();

const initialState = {
  isLogin: false || localStorage.getItem("isLogin"),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("isLogin", true);
      return {
        ...state,
        isLogin: true,
      };
    case "LOGOUT":
      localStorage.removeItem("isLogin");
      return {
        ...state,
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const LibraryContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LibraryContex.Provider value={[state, dispatch]}>
      {props.children}
    </LibraryContex.Provider>
  );
};
