import React, { useContext } from "react";
import { LibraryContex } from "../context/libraryContext";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state] = useContext(LibraryContex);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isLogin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
