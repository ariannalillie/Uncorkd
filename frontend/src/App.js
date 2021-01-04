import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import HomePage from "./components/HomePage"
import Wineries from "./components/Wineries";
import Reviews from "./components/Reviews"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/wineries" >
            <Wineries />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
          <Route path="/reviews/:id">
            <Reviews />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
