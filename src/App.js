import React, { useEffect } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

import HomePage from "./routes/Home/HomePage";
import GamePage from "./routes/Game/GamePage";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import UserPage from "./routes/User/UserPage";
import AboutPage from "./routes/About/AboutPage";

import "react-notifications/lib/notifications.css";
import s from "./app.module.css";
import cn from "classnames";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { getUserAsync, selectUserLoading } from "./store/user";

const App = () => {
  const location = useLocation();
  const isPadding =
    location.pathname === "/" || location.pathname === "/game/board";
  const dispatch = useDispatch();
  const isUserLoading = useSelector(selectUserLoading);

  useEffect(() => {
    dispatch(getUserAsync());
  }, []);

  if(isUserLoading) {
    return "Loading..."
  }

  return (
    <>
      <Switch>
        <Route path="/404" render={() => <h1>404 page not found!</h1>} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, { [s.isHomePage]: isPadding })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" exact component={HomePage} />
                <PrivateRoute path="/game" component={GamePage} />
                <PrivateRoute path="/about" component={AboutPage} />
                <PrivateRoute path="/user" component={UserPage} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
      <NotificationContainer />
    </>
  );
};

export default App;
