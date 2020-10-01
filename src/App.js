import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LandingPage from "./page/LandingPage/LandingPage";
import Home from "./page/Home/Home";
import { LibraryContextProvider } from "./context/libraryContext";

import PrivateRoute from "./component/PrivateRoute";
import DetailBook from "./page/DetailBookPage/DetailBook";
import Profile from "./page/ProfilePage/Profile";
import MyLibrary from "./page/MyLibraryPage/MyLibrary";
import AddBook from "./page/AddBookPage/AddBook";
import Sidebar from "./component/Sidebar";

const App = () => {
  return (
    <div className="App">
      <LibraryContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <div className="container">
              <Grid>
                <Grid.Row>
                  <Sidebar />
                  <Grid.Column width={13}>
                    <PrivateRoute exact path="/home" component={Home} />
                    <PrivateRoute
                      exact
                      path="/detail/:id"
                      component={DetailBook}
                    />
                    <PrivateRoute exact path="/profile" component={Profile} />
                    <PrivateRoute
                      exact
                      path="/my-library"
                      component={MyLibrary}
                    />
                    <PrivateRoute exact path="/add-book" component={AddBook} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Switch>
        </Router>
      </LibraryContextProvider>
    </div>
  );
};

export default App;
